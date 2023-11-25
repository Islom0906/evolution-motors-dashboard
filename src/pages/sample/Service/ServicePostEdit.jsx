import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Upload, Typography} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {MinusCircleOutlined} from "@ant-design/icons";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";

const {Title} = Typography


const initialValueForm = {
    bg_image: [],
    title_uz: "",
    title_ru: "",
    subtitle_uz: "",
    subtitle_ru: "",
    main_title_uz: "",
    main_title_ru: "",
    main_text_uz: "",
    main_text_ru: "",
    main_items: [
        {
            text_uz: "",
            text_ru: "",
        }
    ]
};


const ServicePostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsMain, setFileListPropsMain] = useState([]);


    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess,
    } = useMutation(({url, formData}) => apiService.postData(url, formData), {

        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });


    // query-about
    const {
        mutate: postServiceMutate,
        data: postService,
        isLoading: postServiceLoading,
        isSuccess: postServiceSuccess,

    } = useMutation(({url, data}) => apiService.postData(url, data), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // query-edit
    const {
        isLoading: editServiceLoading,
        data: editServiceData,
        refetch: editServiceRefetch,
        isSuccess: editServiceSuccess,

    } = useQuery(["edit-service", editId], () => apiService.getDataByID("/about/service", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putService, isLoading: putServiceLoading, data: putData, isSuccess: putServiceSuccess
    } = useMutation(({
                         url, data, id
                     }) => apiService.editData(url, data, id), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // delete image

    const {mutate: imagesDeleteMutate} = useMutation(({url, ids}) => apiService.deleteImages(url, ids), {
        onSuccess: () => message.success('Success'), onError: (error) => message.error(error.message)
    });

    //                                              =====useEffect====

    // service success
    useEffect(() => {
        if (putServiceSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postServiceSuccess || putServiceSuccess) {
            navigate('/service')
        }
    }, [postService, putData])

    // if edit service
    useEffect(() => {
        if (editId !== "") {
            editServiceRefetch();
        }
    }, [editId]);

    // if no edit service
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit service
    useEffect(() => {


        const imageInitialMain = [{
            uid: editServiceData?.bg_image?.id,
            name: editServiceData?.bg_image?.id,
            status: 'done',
            url: editServiceData?.bg_image?.image,
        }];

        if (editServiceSuccess) {

            const edit = {
                bg_image: imageInitialMain,
                title_uz: editServiceData.title_uz,
                title_ru: editServiceData.title_ru,
                subtitle_uz: editServiceData.subtitle_uz,
                subtitle_ru: editServiceData.subtitle_ru,
                main_title_uz: editServiceData.main_title_uz,
                main_title_ru: editServiceData.main_title_ru,
                main_text_uz: editServiceData.main_text_uz,
                main_text_ru: editServiceData.main_text_ru,
                main_items: editServiceData.main_items

            }

            setFileListPropsMain(imageInitialMain);
            form.setFieldsValue(edit)
        }

    }, [editServiceData])
    const onFinish = (values) => {


        const data = {
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            subtitle_uz: values.subtitle_uz,
            subtitle_ru: values.subtitle_ru,
            main_title_uz: values.main_title_uz,
            main_title_ru: values.main_title_ru,
            main_text_uz: values.main_text_uz,
            main_text_ru: values.main_text_ru,
            bg_image: [fileListPropsMain[0]?.uid],
            main_items: values.main_items
        };
        if (editServiceSuccess) {
            putService({url: "/about/service", data, id: editId});
        } else {
            postServiceMutate({url: "/about/service/", data});
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    // refresh page again get data

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
        if (storedValues) {
            storedValues.images = []
            form.setFieldsValue(storedValues);
        }

        const handleBeforeUnload = () => {

            localStorage.setItem('myFormValues', JSON.stringify(form.getFieldsValue()),);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);


    // image

    useEffect(() => {
        // MAIN
        if (imagesUploadSuccess) {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]

            setFileListPropsMain(uploadImg);
        }


    }, [imagesUpload]);

    const onChangeMainImage = ({fileList: newFileList}) => {

        form.setFieldsValue({bg_image: newFileList});
        if (fileListPropsMain.length !== 0 || newFileList.length === 0) {
            const id = [fileListPropsMain[0]?.uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
            setFileListPropsMain([])
        }
        const formData = new FormData();

        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
        }
    };


    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    const addFormList = (add) => {
        let itemsValue = [];
        add()
        const getValue = form.getFieldsValue();
        if (!getValue?.main_items[0]) {
            itemsValue.push({
                text_uz: "",
                text_ru: "",
            })
        }
        form.setFieldsValue({items: itemsValue});
    }

    return (
        <div>
        {(postServiceLoading || editServiceLoading || putServiceLoading || imagesUploadLoading) ? <AppLoader/> :
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 24
                }}
                wrapperCol={{
                    span: 24
                }}
                style={{
                    maxWidth: "100%"
                }}
                initialValues={initialValueForm}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >


                <Row gutter={20}>

                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Sarlavha talab qilinadi'}
                            label={'Sarlavha Uz'}
                            name={'title_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Необходимо ввести заголовок'}
                            label={'Заголовок Ru'}
                            name={'title_ru'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormTextArea
                            required={true}
                            required_text={'Qo\'shimcha sarlavha kiritish talab qilinada'}
                            label={'Qo\'shimcha sarlavha Uz'}
                            name={'subtitle_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormTextArea
                            required={true} required_text={'Требуется дополнительный заголовок'}
                            label={'Дополнительное название Ru'}
                            name={'subtitle_ru'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormTextArea
                            required={true}
                            required_text={'Asosiy matn sarlavha kiritish kerak'}
                            label={'Asosiy matn sarlavha Uz'}
                            name={'main_title_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormTextArea
                            required={true} required_text={'Основной текст должен быть заголовком.'}
                            label={'Основной текст Название Ru'}
                            name={'main_title_ru'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormTextArea
                            required={true}
                            required_text={'Asosiy matn kiritish kerak'}
                            label={'Asosiy matn Uz'}
                            name={'main_text_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormTextArea
                            required={true} required_text={'Вам необходимо ввести основной текст'}
                            label={'Основной текст Ru'}
                            name={'main_text_ru'}
                        />

                    </Col>
                </Row>

                <Row gutter={20}>

                    <Col span={12}>
                        <Form.Item
                            label='Изображение основной'
                            name={'bg_image'}
                            rules={[{required: true, message: 'Изображение баннера должно быть загружено.'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsMain}
                                    listType='picture-card'
                                    onChange={onChangeMainImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsMain.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>Добавить преимущества</Title>
                <Form.List name="main_items">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={12}>
                                                <FormTextArea
                                                    required={true}
                                                    required_text={'Matn talab qilinadi'}
                                                    label={`Matn Uz ${index + 1}`}
                                                    name={[field.name, 'text_uz']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormTextArea
                                                    required={true}
                                                    required_text={'Требуется текст'}
                                                    label={`Текст Ru ${index + 1}`}
                                                    name={[field.name, 'text_ru']}
                                                />
                                            </Col>
                                        </Row>
                                        <MinusCircleOutlined
                                            onClick={() => remove(field.name)}/>
                                    </div>

                                );
                            })}
                            <Form.Item>
                                <Button type="primary" onClick={() => addFormList(add)} block
                                        style={{backgroundColor: '#28a745'}}>
                                    Добавьте предмет
                                </Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>


                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editServiceSuccess ? 'Edit' : 'Add'}
                </Button>
            </Form>}
    </div>);
};

export default ServicePostEdit;
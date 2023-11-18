import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";
import ImgCrop from "antd-img-crop";

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    subtitle_uz: "",
    subtitle_ru: "",
    main_title_uz: "",
    main_title_ru: "",
    main_text_uz: "",
    main_text_ru: "",
    bg_image:[]
};




const CreaditLeasingPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);


    // query-creadit
    const {
        mutate: postCreaditMutate,
        data: postCreadit,
        isLoading: postCreaditLoading,
        isSuccess: postCreaditSuccess,
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
        isLoading: editCreaditLoading,
        data: editCreaditData,
        refetch: editCreaditRefetch,
        isSuccess: editCreaditSuccess,
    } = useQuery(["edit-creadit", editId], () => apiService.getDataByID("/about/credit-leasing", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putCreadit,
        isLoading: putCreaditLoading,
        data: putData,
        isSuccess: putCreaditSuccess
    } = useMutation(({
                         url,
                         data,
                         id
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

    // creadit success
    useEffect(() => {
        if (putCreaditSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postCreaditSuccess || putCreaditSuccess) {

            navigate('/creadit')
        }
    }, [postCreadit, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editCreaditRefetch();
        }
    }, [editId]);

    // if no edit creadit
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit creadit
    useEffect(() => {
        if (editCreaditSuccess) {

            const bg_image=[{
                uid: editCreaditData.id,
                name: editCreaditData.id,
                status: "done",
                url: editCreaditData.bg_image
            }];


            const edit = {
                title_uz: editCreaditData.title_uz,
                title_ru: editCreaditData.title_ru,
                subtitle_uz: editCreaditData.subtitle_uz,
                subtitle_ru: editCreaditData.subtitle_ru,
                main_title_uz: editCreaditData.main_title_uz,
                main_title_ru: editCreaditData.main_title_ru,
                main_text_uz: editCreaditData.main_text_uz,
                main_text_ru: editCreaditData.main_text_ru,
                bg_image
            }

            setFileListProps(bg_image)
            form.setFieldsValue(edit)
        }

    }, [editCreaditData])


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);
        formData.append('subtitle_uz', values.subtitle_uz);
        formData.append('subtitle_ru', values.subtitle_ru);
        formData.append('main_title_uz', values.main_title_uz);
        formData.append('main_title_ru', values.main_title_ru);
        formData.append('main_text_uz', values.main_text_uz);
        formData.append('main_text_ru', values.main_text_ru);

        if (fileListProps[0]?.originFileObj) {
            formData.append('bg_image', fileListProps[0]?.originFileObj);
        }

        if (editCreaditData) {
            putCreadit({url: '/about/credit-leasing', data: formData, id: editId})
        } else {
            postCreaditMutate({url: "/about/credit-leasing/", data: formData});
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

            localStorage.setItem(
                'myFormValues',
                JSON.stringify(form.getFieldsValue()),
            );
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);


    // image
    const onChange = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({bg_image: newFileList});
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



    return (
        <div>
            {(postCreaditLoading || editCreaditLoading || putCreaditLoading) ?
                <AppLoader/> :
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
                                label='Изображение на заднем плане'
                                name={'bg_image'}
                                rules={[{required: true, message: 'Требуется фоновое изображение.'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListProps}
                                        listType='picture-card'
                                        onChange={onChange}
                                        onPreview={onPreview}
                                        beforeUpload={() => false}
                                    >
                                        {fileListProps.length > 0 ? "" : "Upload"}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editCreaditSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default CreaditLeasingPostEdit;
import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Upload,Typography} from "antd";
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

const {Title}=Typography


const initialValueForm = {
    bg_image: [],
    title_uz: "",
    title_ru: "",
    subtitle_uz:"",
    subtitle_ru:"",
    main_title_uz:"",
    main_title_ru:"",
    context_text_uz:"",
    context_text_ru:"",
    cards: [
        {
            card_title_uz: "",
            card_title_ru: "",
            card_image: []
        }
    ]
};



const OptionPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsMain, setFileListPropsMain] = useState([]);
    const [fileListPropsChild, setFileListPropsChild] = useState([]);
    const [isUpload, setIsUpload] = useState('');
    const [mainIndex, setMainIndex] = useState(0);


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
        mutate: postAboutMutate, data: postAbout, isLoading: postAboutLoading, isSuccess: postAboutSuccess,

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
        isLoading: editAboutLoading,
        data: editAboutData,
        refetch: editAboutRefetch,
        isSuccess: editAboutSuccess,

    } = useQuery(["edit-about", editId], () => apiService.getDataByID("/about/about-company", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putAbout, isLoading: putAboutLoading, data: putData, isSuccess: putAboutSuccess
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

    // about success
    useEffect(() => {
        if (putAboutSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postAboutSuccess || putAboutSuccess) {
            navigate('/about')
        }
    }, [postAbout, putData])

    // if edit about
    useEffect(() => {
        if (editId !== "") {
            editAboutRefetch();
        }
    }, [editId]);

    // if no edit about
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit about
    useEffect(() => {
        const initialAbout = [];
        const initialFileListPropsAbout = [];

        if (editAboutData !== undefined) {
            for (let i = 0; i < editAboutData.cards.length; i++) {
                let editDefaultImages = [{
                    uid: editAboutData.cards[i]?.card_image?.id,
                    name: editAboutData.cards[i]?.card_image?.id,
                    status: "done",
                    url: editAboutData.cards[i]?.card_image?.image
                }];
                const item = {
                    card_title_uz: editAboutData.cards[i].card_title_uz,
                    card_title_ru: editAboutData.cards[i].card_title_ru,
                    card_image: editDefaultImages
                };
                initialAbout.push(item);
                initialFileListPropsAbout.push(editDefaultImages)
            }
        }


        const imageInitialMain = [{
            uid: editAboutData?.bg_image?.id,
            name: editAboutData?.bg_image?.id,
            status: 'done',
            url: editAboutData?.bg_image?.image,
        }];

        if (editAboutSuccess) {

            const edit = {
                bg_image: imageInitialMain,
                title_uz: editAboutData.title_uz,
                title_ru: editAboutData.title_ru,
                subtitle_uz: editAboutData.subtitle_uz,
                subtitle_ru: editAboutData.subtitle_ru,
                main_title_uz: editAboutData.main_title_uz,
                main_title_ru: editAboutData.main_title_ru,
                context_text_uz: editAboutData.context_text_uz,
                context_text_ru: editAboutData.context_text_ru,
                cards: initialAbout

            }

            setFileListPropsMain(imageInitialMain);
            setFileListPropsChild(initialFileListPropsAbout)
            form.setFieldsValue(edit)
        }

    }, [editAboutData])
    const onFinish = (values) => {


        const children = []

        for (let i = 0; i < values.cards.length; i++) {
            let isImage = ""
            if (fileListPropsChild.length > 0) {
                if (fileListPropsChild[i] === null || fileListPropsChild[i]?.length < 1) {
                    isImage = ""
                } else {
                    isImage = fileListPropsChild[i][0]?.uid
                }
            }

            const item = {
                card_title_uz: values.cards[i].card_title_uz,
                card_title_ru: values.cards[i].card_title_ru,
                card_image: [isImage]
            };
            children.push(item);
        }


        const data = {
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            subtitle_uz: values.subtitle_uz,
            subtitle_ru: values.subtitle_ru,
            main_title_uz: values.main_title_uz,
            main_title_ru: values.main_title_ru,
            context_text_uz: values.context_text_uz,
            context_text_ru: values.context_text_ru,
            bg_image: [fileListPropsMain[0]?.uid],
            cards: children
        };
        if (editAboutSuccess) {
            putAbout({url: "/about/about-company", data, id: editId});
        } else {
            postAboutMutate({url: "/about/about-company/", data});
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
        if (imagesUploadSuccess && isUpload === "main") {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]

            setFileListPropsMain(uploadImg);
            setIsUpload('')
        }


        // CHILD
        const uploadFilesStateAbout = [...fileListPropsChild];
        if (imagesUploadSuccess && isUpload === 'child') {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]
            uploadFilesStateAbout[mainIndex] = uploadImg;
            setFileListPropsChild(uploadFilesStateAbout);
            const getValue = form.getFieldsValue();
            const itemsValue = getValue?.cards;
            if (!itemsValue[mainIndex]) {
                itemsValue[mainIndex] = {
                    card_title_uz: "",
                    card_title_ru: "",
                    card_image: []
                }
            }
            itemsValue[mainIndex].card_image = uploadImg;
            form.setFieldsValue({items: itemsValue});
            setIsUpload('')
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
            setIsUpload('main')
        }
    };

    const onChangeChildImage = (index, {fileList: newFileList}) => {
        setMainIndex(index);


        if (fileListPropsChild[index] || newFileList.length === 0) {
            const id = [fileListPropsChild[index][0].uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
            fileListPropsChild[index] = null;
            setFileListPropsChild(fileListPropsChild);

        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('child')

        }
    };


    // handleRemoveAbout
    const handleRemoveAbout = (name, remove, index, editorFileList) => {

        if (editorFileList === fileListPropsChild[index] && fileListPropsChild.length > 0) {
            const id = [fileListPropsChild[index][0]?.uid];
            fileListPropsChild.splice(index, 1);
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
        }
        remove(name);
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
        if (!getValue?.cards[0]) {
            itemsValue.push({
                card_title_uz: "",
                card_title_ru: "",
                card_image: []
            })
        }
        form.setFieldsValue({items: itemsValue});
    }

    return (<div>
        {(postAboutLoading || editAboutLoading || putAboutLoading || imagesUploadLoading) ? <AppLoader/> :
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
                            label={'Asosiy matn Uz'}
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
                            name={'context_text_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormTextArea
                            required={true} required_text={'Вам необходимо ввести основной текст'}
                            label={'Основной текст Ru'}
                            name={'context_text_ru'}
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
                <Form.List name="cards">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                const editorFileList = fileListPropsChild[index] || [];
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Karta nomi talab qilinadi'}
                                                    label={`Karta nomi Uz ${index + 1}`}
                                                    name={[field.name, 'card_title_uz']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Необходимо ввести название карты'}
                                                    label={`Название карты Ru ${index + 1}`}
                                                    name={[field.name, 'card_title_ru']}
                                                />
                                            </Col>
                                        </Row>


                                        <Form.Item
                                            label={`Изображение карты ${index + 1}`}
                                            name={[field.name, "card_image"]}
                                            rules={[{
                                                required: true,
                                                message: 'Требуется загрузка изображения карты'
                                            }]}>

                                            <ImgCrop rotate>
                                                <Upload
                                                    maxCount={1}
                                                    listType="picture-card"
                                                    fileList={editorFileList}
                                                    onChange={(newFileList) => onChangeChildImage(index, newFileList)}
                                                    onPreview={onPreview}
                                                    beforeUpload={() => false}
                                                >
                                                    {editorFileList.length < 1 && "+ Upload"}
                                                </Upload>
                                            </ImgCrop>
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => handleRemoveAbout(field.name, remove, index, editorFileList)}/>
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
                    {editAboutSuccess ? 'Edit' : 'Add'}
                </Button>
            </Form>}
    </div>);
};

export default OptionPostEdit;
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
import {EditorState} from "draft-js";
import {convertFromHTML, convertToHTML} from "draft-convert";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './NewsPostEdit.css'


import ImgCrop from "antd-img-crop";

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    sub_title_uz: "",
    sub_title_ru: "",
    text_uz: "",
    text_ru: "",
    image:[]
};




const NewsPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [editorStatesUz, setEditorStatesUz] = useState(EditorState.createEmpty());
    const [editorStatesRu, setEditorStatesRu] = useState(EditorState.createEmpty());

    // query-news
    const {
        mutate: postNewsMutate,
        data: postNews,
        isLoading: postNewsLoading,
        isSuccess: postNewsSuccess,
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
        isLoading: editNewsLoading,
        data: editNewsData,
        refetch: editNewsRefetch,
        isSuccess: editNewsSuccess,
    } = useQuery(["edit-news", editId], () => apiService.getDataByID("/about/news", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putNews,
        isLoading: putNewsLoading,
        data: putData,
        isSuccess: putNewsSuccess
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

    // news success
    useEffect(() => {
        if (putNewsSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postNewsSuccess || putNewsSuccess) {

            navigate('/news')
        }
    }, [postNews, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editNewsRefetch();
        }
    }, [editId]);

    // if no edit news
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit news
    useEffect(() => {
        if (editNewsSuccess) {

            const initialEditorUz=EditorState.createWithContent(convertFromHTML(editNewsData.text_uz))
            const initialEditorRu=EditorState.createWithContent(convertFromHTML(editNewsData.text_ru))

            const image=[{
                uid: editNewsData.id,
                name: editNewsData.id,
                status: "done",
                url: editNewsData.image
            }];


            const edit = {
                title_uz: editNewsData.title_uz,
                title_ru: editNewsData.title_ru,
                sub_title_uz: editNewsData.sub_title_uz,
                sub_title_ru: editNewsData.sub_title_ru,
                text_uz: initialEditorUz,
                text_ru: initialEditorRu,
                image
            }

            setEditorStatesUz(initialEditorUz)
            setEditorStatesRu(initialEditorRu)
            setFileListProps(image)
            form.setFieldsValue(edit)
        }

    }, [editNewsData])


    const onFinish = (values) => {

        const itemsWithHtmlContentUz = convertToHTML(editorStatesUz.getCurrentContent());
        const itemsWithHtmlContentRu = convertToHTML(editorStatesRu.getCurrentContent());

        const formData = new FormData();

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);
        formData.append('sub_title_uz', values.sub_title_uz);
        formData.append('sub_title_ru', values.sub_title_ru);
        formData.append('text_uz', itemsWithHtmlContentUz);
        formData.append('text_ru', itemsWithHtmlContentRu);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        if (editNewsData) {
            putNews({url: '/about/news', data: formData, id: editId})
        } else {
            postNewsMutate({url: "/about/news/", data: formData});
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
        form.setFieldsValue({image: newFileList});
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


    const onEditorStateChangeUz = (editorState) => {
        setEditorStatesUz(editorState);
    };
    const onEditorStateChangeRu = (editorState) => {
        setEditorStatesRu(editorState);
    };


    return (
        <div>
            {(postNewsLoading || editNewsLoading || putNewsLoading) ?
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
                                name={'sub_title_uz'}
                            />


                        </Col>
                        <Col span={12}>
                            <FormTextArea
                                required={true} required_text={'Требуется дополнительный заголовок'}
                                label={'Дополнительное название Ru'}
                                name={'sub_title_ru'}
                            />

                        </Col>
                    </Row>



                    <Row gutter={20}>

                        <Col span={12}>
                            <Form.Item
                                label={`Asosiy matn Uz`}
                                name={"text_uz"}
                                rules={[
                                    {required: true, message: "Asosiy matn kiritish kerak"}
                                ]}
                                style={{width: "100%"}}
                            >
                                <Editor
                                    editorState={editorStatesUz}
                                    onEditorStateChange={(state) => onEditorStateChangeUz(state)}
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                />
                            </Form.Item>
                            {/*<FormTextArea*/}
                            {/*    required={true}*/}
                            {/*    required_text={'Asosiy matn kiritish kerak'}*/}
                            {/*    label={'Asosiy matn Uz'}*/}
                            {/*    name={'text_uz'}*/}
                            {/*/>*/}


                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={`Основной текст Ru`}
                                name={"text_ru"}
                                rules={[
                                    {required: true, message: "Вам необходимо ввести основной текст"}
                                ]}
                                style={{width: "100%"}}
                            >
                                <Editor
                                    editorState={editorStatesRu}
                                    onEditorStateChange={(state) => onEditorStateChangeRu(state)}
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                />
                            </Form.Item>
                            {/*<FormTextArea*/}
                            {/*    required={true} required_text={'Вам необходимо ввести основной текст'}*/}
                            {/*    label={'Основной текст Ru'}*/}
                            {/*    name={'text_ru'}*/}
                            {/*/>*/}


                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение на заднем плане'
                                name={'image'}
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
                            editNewsSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default NewsPostEdit;
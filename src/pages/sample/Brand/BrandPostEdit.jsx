import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Row, Select, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import ImgCrop from "antd-img-crop";

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    image:[],
    country:"",
};




const BrandPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);

    // query-countries-get
    const {data: countriesData, refetch: countriesFetch} = useQuery(
        'get-countries',
        () => apiService.getData('/cars/countries/'),
        {
            enabled: false,
        },
    );

    // query-brands
    const {
        mutate: postBrandsMutate,
        data: postBrands,
        isLoading: postBrandsLoading,
        isSuccess: postBrandsSuccess,
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
        isLoading: editBrandsLoading,
        data: editBrandsData,
        refetch: editBrandsRefetch,
        isSuccess: editBrandsSuccess,
    } = useQuery(["edit-brands", editId], () => apiService.getDataByID("/cars/brands", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putBrands,
        isLoading: putBrandsLoading,
        data: putData,
        isSuccess: putBrandsSuccess
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

    // brands success
    useEffect(() => {
        if (putBrandsSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postBrandsSuccess || putBrandsSuccess) {

            navigate('/brands')
        }
    }, [postBrands, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editBrandsRefetch();
        }
    }, [editId]);

    // if no edit brands
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
        countriesFetch()
    }, []);


    //edit brands
    useEffect(() => {
        if (editBrandsSuccess) {

            console.log(editBrandsData.countries.id)

            const image=[{
                uid: editBrandsData.id,
                name: editBrandsData.id,
                status: "done",
                url: editBrandsData.image
            }];

            const edit = {
                title_uz: editBrandsData.title_uz,
                title_ru: editBrandsData.title_ru,
                image,
                country: editBrandsData.countries.id,
            }
            setFileListProps(image)
            form.setFieldsValue(edit)
        }

    }, [editBrandsData])


    const onFinish = (values) => {

        console.log(values)

        const formData = new FormData();

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);
        formData.append('country', values.country);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        if (editBrandsData) {
            putBrands({url: '/cars/brands', data: formData, id: editId})
        } else {
            postBrandsMutate({url: "/cars/brands/", data: formData});
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



    // option types
    const optionsTypes = useMemo(() => {
        return countriesData?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [countriesData]);

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

    return (
        <div>
            {(postBrandsLoading || editBrandsLoading || putBrandsLoading) ?
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
                                required_text={'Brand kiritishingiz kerak'}
                                label={'Brand Uz'}
                                name={'title_uz'}
                            />


                        </Col>
                        <Col span={12}>
                            <FormInput
                                required={true}
                                required_text={'Вы должны ввести бренд'}
                                label={'Бренд Ru'}
                                name={'title_ru'}
                            />

                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label={'Выберите страну'}
                                name={'country'}
                                rules={[{
                                    required: true, message: 'Страну должны быть выбраны'
                                }]}
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну типы'
                                    optionLabelProp='label'
                                    options={optionsTypes}
                                />
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение бренда'
                                name={'image'}
                                rules={[{required: true, message: 'Требуется изображение бренда'}]}>
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
                            editBrandsSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default BrandPostEdit;
import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Modal, Row, Select, Upload} from "antd";
import {AppLoader} from "../../../@crema";
import FormInput from "../../../@crema/core/Form/FormInput";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import PropTypes from "prop-types";
import ImgCrop from "antd-img-crop";

const initialValueForm = {
    title_uz: "",
    title_ru: "",

};

const AddBrandModal = ({refetchCountries}) => {
    const [form] = Form.useForm();



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileListProps, setFileListProps] = useState([]);

    // query-countries-get
    const {data: countriesData} = useQuery(
        'get-countries',
        () => apiService.getData('/cars/countries/')
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

    const showModal = () => {
        setIsModalOpen(true);

    };


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);
        formData.append('country', values.country);

            formData.append('image', fileListProps[0]?.originFileObj);

            postBrandsMutate({url: "/cars/brands/", data: formData});


    }

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                // Call your onFinish function with the form values
                onFinish(values);

                // Close the modal

                // Reset the form fields

            })
            .catch((errorInfo) => {
                console.log('Failed:', errorInfo);
            });
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (postBrandsSuccess){
            refetchCountries()
            setIsModalOpen(false)
            form.setFieldsValue(initialValueForm)

        }
    }, [postBrands]);


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

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
            <Button type="primary" onClick={showModal}>
                Создать новый бренд
            </Button>
            <Modal title="Новый тип" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {(postBrandsLoading ) ?
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

                        </Form>
                    }
            </Modal>
        </div>
    );
};

AddBrandModal.propTypes={
    refetchCountries:PropTypes.func
}


export default AddBrandModal;
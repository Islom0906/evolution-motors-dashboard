import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Modal, Row} from "antd";
import {AppLoader} from "../../../@crema";
import FormInput from "../../../@crema/core/Form/FormInput";
import {useMutation} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import PropTypes from "prop-types";

const initialValueForm = {
    title_uz: "",
    title_ru: "",

};

const AddTypeModal = ({refetchTypes}) => {
    const [form] = Form.useForm();



    const [isModalOpen, setIsModalOpen] = useState(false);


    // query-types
    const {
        mutate: postTypesMutate,
        data: postTypes,
        isLoading: postTypesLoading,
        isSuccess: postTypesSuccess,
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


        postTypesMutate({url: "/cars/types/", data: formData});


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
        if (postTypesSuccess){
            refetchTypes()
            setIsModalOpen(false)
            form.setFieldsValue(initialValueForm)
        }
    }, [postTypes]);


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Создать новый тип
            </Button>
            <Modal title="Новый тип" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {(postTypesLoading) ?
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
                                        required_text={'Tur nomini kiritishingiz kerak'}
                                        label={'Tur nomi Uz'}
                                        name={'title_uz'}
                                    />


                                </Col>
                                <Col span={12}>
                                    <FormInput
                                        required={true}
                                        required_text={'Необходимо ввести название типа'}
                                        label={'Название типа Ru'}
                                        name={'title_ru'}
                                    />

                                </Col>
                            </Row>


                        </Form>
                    }
            </Modal>
        </div>
    );
};

AddTypeModal.propTypes={
    refetchTypes:PropTypes.func
}


export default AddTypeModal;
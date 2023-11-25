import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Modal, Row, Select,  Typography} from "antd";
import {AppLoader} from "../../../@crema";
import FormInput from "../../../@crema/core/Form/FormInput";
import {useMutation} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import PropTypes from "prop-types";

const {Title} = Typography

const initialValueForm = {
    title_ru: "",
    title_uz: "",
    type: [
    ]
};

const initialValueFormEditCountry = {
    title_ru: "",
    type:[]
};

const AddCountryModal = ({refetchCountries,arrTypes,arrCountry}) => {
    const [form] = Form.useForm();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewCountry, setIsNewCountry] = useState(false)
    const [chooseAction, setChooseAction] = useState(false)
    // const [findCountry, setFindCountry] = useState({})


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

    const {
        mutate: putCountries,
        isLoading: putCountriesLoading,
        data: putData,
        isSuccess: putCountriesSuccess
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

    const showModal = () => {
        setIsModalOpen(true);

    };


    const onFinish = (values) => {
        const findCountry=arrCountry.find(country=>country?.id===values.title_ru)
        const data={
            title_ru:findCountry.title_ru,
            title_uz:findCountry.title_uz,
            type:values.type
        }
        if (isNewCountry){
        postBrandsMutate({url: "/cars/countries/", data: values});
        }else{
            putCountries({url: '/cars/countries', data, id: values.title_ru})
        }
    }

    const checkAction = (isNew) => {
        setIsNewCountry(isNew)
        setChooseAction(true)
    }

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                onFinish(values);

            })
            .catch((errorInfo) => {
                console.log('Failed:', errorInfo);
            });
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setChooseAction(false)
    };

    useEffect(() => {
        if (postBrandsSuccess||putCountriesSuccess) {
            refetchCountries()
            setIsModalOpen(false)
            form.setFieldsValue(initialValueForm)

        }
    }, [postBrands,putData]);


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onchangeCoutry=(value)=>{
        const typeId=[]
        const findCountries=arrCountry.find(country=>country?.id===value)
        findCountries.types.map(type=>{
            typeId.push(type.id)
        })
        form.setFieldsValue({type:typeId})
        // setFindCountry(findCountries)
    }

    // option types
    const optionsTypes = useMemo(() => {
        return arrTypes?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [arrTypes]);


    const optionsCountries = useMemo(() => {
        return arrCountry?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [arrCountry]);


    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Создать новый страна
            </Button>
            <Modal title="Новый тип" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={600}>
                {
                    !chooseAction ?
                        <Row>
                            <Col span={24}>
                                <Title level={3}>Добавляете ли вы новую страну или объединяете новый тип со страной</Title>
                            </Col>
                            <Col span={10}>
                                <Button type="primary" onClick={() => checkAction(true)}>
                                    Добавить новую страну
                                </Button>
                            </Col>
                            <Col span={14}>
                                <Button type="primary" onClick={() => checkAction(false)}>
                                    Объединить новый тип со страной
                                </Button>
                            </Col>
                        </Row>
                        :
                        (postBrandsLoading||putCountriesLoading) ?
                            <AppLoader/> :

                            isNewCountry ?
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
                                                required_text={'Mamlakat nomini kiritishingiz kerak'}
                                                label={'Mamlakat nomi Uz'}
                                                name={'title_uz'}
                                            />


                                        </Col>
                                        <Col span={12}>
                                            <FormInput
                                                required={true}
                                                required_text={'Необходимо ввести название страна'}
                                                label={'Название страна Ru'}
                                                name={'title_ru'}
                                            />

                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                label={'Выберите типы'}
                                                name={'type'}
                                                rules={[{
                                                    required: true, message: 'Типы должны быть выбраны'
                                                }]}
                                                wrapperCol={{
                                                    span: 24,
                                                }}
                                            >
                                                <Select
                                                    mode={'multiple'}
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
                                </Form> :
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
                                    initialValues={initialValueFormEditCountry}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Row gutter={20}>

                                        <Col span={12}>
                                            <Form.Item
                                                label={'Выберите страна'}
                                                name={'title_ru'}
                                                rules={[{
                                                    required: true, message: 'Страна должны быть выбраны'
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
                                                    onChange={onchangeCoutry}
                                                    options={optionsCountries}
                                                />
                                            </Form.Item>

                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label={'Выберите типы'}
                                                name={'type'}
                                                rules={[{
                                                    required: true, message: 'Типы должны быть выбраны'
                                                }]}
                                                wrapperCol={{
                                                    span: 24,
                                                }}
                                            >
                                                <Select
                                                    mode={'multiple'}
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
                                </Form>


                }


            </Modal>
        </div>
    );
};

AddCountryModal.propTypes = {
    refetchCountries: PropTypes.func,
    arrTypes:PropTypes.array,
    arrCountry:PropTypes.array
}


export default AddCountryModal;
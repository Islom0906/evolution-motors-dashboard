import React, {useEffect, useMemo} from 'react';
import {Button, Col, Form, message, Row, Select} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    type:[]
};






const CountriesPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()



    // query-types-get
    const {data: typesData, refetch: typesFetch} = useQuery(
        'get-types',
        () => apiService.getData('/cars/types/'),
        {
            enabled: false,
        },
    );

    // query-countries
    const {
        mutate: postCountriesMutate,
        data: postCountries,
        isLoading: postCountriesLoading,
        isSuccess: postCountriesSuccess,
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
        isLoading: editCountriesLoading,
        data: editCountriesData,
        refetch: editCountriesRefetch,
        isSuccess: editCountriesSuccess,
    } = useQuery(["edit-countries", editId], () => apiService.getDataByID("/cars/countries", editId), {
        enabled: false
    });
    // put-query
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

    // countries success
    useEffect(() => {
        if (putCountriesSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postCountriesSuccess || putCountriesSuccess) {

            navigate('/countries')
        }
    }, [postCountries, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editCountriesRefetch();
        }
    }, [editId]);

    // if no edit countries
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
        typesFetch()
    }, []);


    //edit countries
    useEffect(() => {
        const type=[]
        if (editCountriesSuccess) {

            editCountriesData?.types.map(types=>{
                type.push(types.id)
            })

            console.log(editCountriesData)
            const edit = {
                title_uz: editCountriesData.title_uz,
                title_ru: editCountriesData.title_ru,
                type
            }

            form.setFieldsValue(edit)
        }

    }, [editCountriesData])


    const onFinish = (values) => {




        if (editCountriesData) {
            putCountries({url: '/cars/countries', data: values, id: editId})
        } else {
            postCountriesMutate({url: "/cars/countries/", data: values});
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
        return typesData?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [typesData]);

    return (
        <div>
            {(postCountriesLoading || editCountriesLoading || putCountriesLoading) ?
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

                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editCountriesSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default CountriesPostEdit;
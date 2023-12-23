import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Row, Upload, Typography, Select} from "antd";
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
import FormInputNumber from "../../../@crema/core/Form/FormInputNumber";
import AddTypeModal from "./AddTypeModal";
import AddBrandModal from "./AddBrandModal";
import AddCountryModal from "./AddCountryModal";
import './carPostEdit.css'
const {Title} = Typography


const initialValueForm = {
    title_uz: "",
    title_ru: "",
    main_text_uz: "",
    main_text_ru: "",
    price: "",
    credit_price: "",
    colour: "",
    is_available: null,
    power_reserve: "",
    max_speed: "",
    acceleration: "",
    battery_capacity: "",
    num_of_seats: "",
    review_link_1: "",
    review_link_2: "",
    type: null,
    country: null,
    brand: null,
    main_image: null,
    inner_image: null,
    exterior_images: [],
    interior_images: [],
    technology_images: [],
    characteristic: [
        {
            title_uz: "",
            title_ru: "",
            characteristics_child: [
                {
                    key_uz: "",
                    key_ru: "",
                    value_uz: "",
                    value_ru: "",
                }
            ]
        }
    ]
};


const CarPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsMain, setFileListPropsMain] = useState([]);
    const [fileListPropsInner, setFileListPropsInner] = useState([]);
    const [fileListPropsExterior, setFileListPropsExterior] = useState([]);
    const [fileListPropsInterior, setFileListPropsInterior] = useState([]);
    const [fileListPropsTechnology, setFileListPropsTechnology] = useState([]);

    const [isUpload, setIsUpload] = useState('');
    const [getSelectValue, setGetSelectValue] = useState({
        typeId:"",
        countriesId:"",
    })


    // query-types-get
    const {data: typesData,refetch:refetchTypes} = useQuery(
        'get-types',
        () => apiService.getData('/cars/types/')
    );

    // query-countries-get
    const {data: countriesData,refetch:refetchCountries} = useQuery(
        'get-countries',
        () => apiService.getData('/cars/countries/'),

    );


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


    // query-car
    const {
        mutate: postCarMutate, data: postCar, isLoading: postCarLoading, isSuccess: postCarSuccess,

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
        isLoading: editCarLoading,
        data: editCarData,
        refetch: editCarRefetch,
        isSuccess: editCarSuccess,

    } = useQuery(["edit-car", editId], () => apiService.getDataByID("/cars/cars", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putCar, isLoading: putCarLoading, data: putData, isSuccess: putCarSuccess
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

    // car success
    useEffect(() => {
        if (putCarSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postCarSuccess || putCarSuccess) {
            navigate('/car')
        }
    }, [postCar, putData])

    // if edit car
    useEffect(() => {
        if (editId !== "") {
            editCarRefetch();
        }
    }, [editId]);

    // if no edit car
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }

    }, []);


    //edit car
    useEffect(() => {
        const exterior_images = [];
        const interior_images = [];
        const technology_images = [];


        if (editCarData!==undefined){
            editCarData.exterior_images.map(image=>{
                const data={
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                exterior_images.push(data)
            })
            editCarData.interior_images.map(image=>{
                const data={
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                interior_images.push(data)
            })
            editCarData.technology_images.map(image=>{
                const data={
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                technology_images.push(data)
            })
        }








        const main_image = [{
            uid: editCarData?.main_image?.id,
            name: editCarData?.main_image?.id,
            status: 'done',
            url: editCarData?.main_image?.image,
        }];
        const inner_image = [{
            uid: editCarData?.inner_image?.id,
            name: editCarData?.inner_image?.id,
            status: 'done',
            url: editCarData?.inner_image?.image,
        }];

        if (editCarSuccess) {

            const edit = {
                title_uz: editCarData?.title_uz,
                title_ru: editCarData?.title_ru,
                main_text_uz: editCarData?.main_text_uz,
                main_text_ru: editCarData?.main_text_ru,
                price: editCarData?.price,
                credit_price: editCarData?.credit_price,
                colour: editCarData?.color.color,
                is_available: editCarData?.is_available,
                power_reserve: editCarData?.power_reserve,
                max_speed: editCarData?.max_speed,
                battery_capacity: editCarData?.battery_capacity,
                acceleration: editCarData?.acceleration,
                num_of_seats: editCarData?.num_of_seats,
                review_link_1: editCarData?.reviews?.link_1,
                review_link_2: editCarData?.reviews?.link_2,
                type: editCarData?.type,
                country: editCarData?.country,
                brand: editCarData?.brand?.id,
                main_image,
                inner_image,
                exterior_images,
                interior_images,
                technology_images,
                characteristic:editCarData?.characteristic
            }

            setGetSelectValue({
                typeId:editCarData.type,
                countriesId:editCarData.country,
            })
            setFileListPropsMain(main_image);
            setFileListPropsInner(inner_image);
            setFileListPropsExterior(exterior_images);
            setFileListPropsInterior(interior_images);
            setFileListPropsTechnology(technology_images);
            form.setFieldsValue(edit)
        }

    }, [editCarData])
    const onFinish = (values) => {


        const exterior_images = []
        const interior_images = []
        const technology_images = []

        fileListPropsExterior.map(image=>{
            exterior_images.push(image.uid)
        })
        fileListPropsInterior.map(image=>{
            interior_images.push(image.uid)
        })
        fileListPropsTechnology.map(image=>{
            technology_images.push(image.uid)
        })





        const data = {
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            main_text_uz: values.main_text_uz,
            main_text_ru: values.main_text_ru,
            price: values.price,
            credit_price: values.credit_price==="" ? null : values.credit_price,
            colour: values.colour,
            is_available: values.is_available,
            power_reserve: values.power_reserve,
            max_speed: values.max_speed,
            acceleration: values.acceleration,
            battery_capacity: values.battery_capacity,
            num_of_seats: values.num_of_seats,
            review_link_1: values.review_link_1,
            review_link_2: values.review_link_2,
            type: values.type,
            country: values.country,
            brand: values.brand,
            main_image: fileListPropsMain[0]?.uid,
            inner_image: fileListPropsInner[0]?.uid,
            exterior_images,
            interior_images,
            technology_images,
            characteristic: values?.characteristic
        };
        if (editCarSuccess) {
            putCar({url: "/cars/cars", data, id: editId});
        } else {
            postCarMutate({url: "/cars/cars/", data});
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

            form.setFieldsValue({main_image: uploadImg});
            setFileListPropsMain(uploadImg);
            setIsUpload('')
        }
        // INNER
        if (imagesUploadSuccess && isUpload === "inner") {

            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]

            form.setFieldsValue({inner_image: uploadImg});
            setFileListPropsInner(uploadImg);
            setIsUpload('')
        }

        // EXTERIOR
        if (imagesUploadSuccess && isUpload === "exterior") {
            const initialImage=[...fileListPropsExterior]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({exterior_images: [uploadImg]});

            setFileListPropsExterior(initialImage);
            setIsUpload('')
        }
        // INTERIOR
        if (imagesUploadSuccess && isUpload === "interior") {
            const initialImage=[...fileListPropsInterior]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({interior_images: [uploadImg]});
            setFileListPropsInterior(initialImage);
            setIsUpload('')
        }
        // TECHNOLOGY
        if (imagesUploadSuccess && isUpload === "technology") {
            const initialImage=[...fileListPropsTechnology]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({technology_images: [uploadImg]});
            setFileListPropsTechnology(initialImage);
            setIsUpload('')
        }

    }, [imagesUpload]);
    const onChangeMainImage = ({fileList: newFileList}) => {

        if (fileListPropsMain.length !== 0 || newFileList.length === 0) {
            form.setFieldsValue({main_image: []});
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

    console.log(fileListPropsInterior)
    const onChangeInnerImage = ({fileList: newFileList}) => {

        if (fileListPropsInner.length !== 0 || newFileList.length === 0) {
            form.setFieldsValue({inner_image: []});
            const id = [fileListPropsInner[0]?.uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
            setFileListPropsInner([])
        }
        const formData = new FormData();

        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('inner')
        }
    };
    // Exterior Image

    const onChangeExteriorImage=({fileList: newFileList})=>{
        if (newFileList.length<fileListPropsExterior.length){
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length-1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('exterior')
        }
    }

    const handleRemoveExteriorImage=(file)=>{
        const withoutDeleteImage=[]

        fileListPropsExterior.map((image)=>{
            if (image?.uid!==file?.uid){
                withoutDeleteImage.push(image)
            }
        })
        if (!withoutDeleteImage.length>0){
            form.setFieldsValue({exterior_images: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/delete-images", ids});
        setFileListPropsExterior(withoutDeleteImage)

    }
    //  Interior Image

    const onChangeInteriorImage=({fileList: newFileList})=>{
        if (newFileList.length<fileListPropsInterior.length){
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length-1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('interior')
        }
    }

    const handleRemoveInteriorImage=(file)=>{
        const withoutDeleteImage=[]

        fileListPropsInterior.map((image)=>{
            if (image?.uid!==file?.uid){
                withoutDeleteImage.push(image)
            }
        })
        if (!withoutDeleteImage.length>0){
            form.setFieldsValue({interior_images: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/delete-images", ids});
        setFileListPropsInterior(withoutDeleteImage)

    }

    // Technology Image
    const onChangeTechnologyImage=({fileList: newFileList})=>{
        if (newFileList.length<fileListPropsTechnology.length){
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length-1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('technology')
        }
    }

    const handleRemoveTechnologyImage=(file)=>{
        const withoutDeleteImage=[]

        fileListPropsTechnology.map((image)=>{
            if (image?.uid!==file?.uid){
                withoutDeleteImage.push(image)
            }
        })
        if (!withoutDeleteImage.length>0){
            form.setFieldsValue({technology_images: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/delete-images", ids});
        setFileListPropsTechnology(withoutDeleteImage)

    }


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

    // selection
    const optionAvailable = useMemo(() => {

        return [
            {
                value: true,
                label: 'В продаже',
            },
            {
                value: false,
                label: 'Нет в продаже',
            },
        ]
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

    // countries types
    const optionsCountries = useMemo(() => {
        if (!getSelectValue.typeId){
            return []
        }
        const filterType=typesData?.find(type=>type.id===getSelectValue.typeId)
        return filterType?.countries?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [getSelectValue.typeId,typesData]);

    const optionsBrand = useMemo(() => {
        if (!getSelectValue.countriesId){
            return []
        }
        const filterCountry=countriesData?.find(country=>country.id===getSelectValue.countriesId)
        return filterCountry?.brands?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [getSelectValue.countriesId,countriesData]);



    const onChangeType=(value)=>{
        const data={...getSelectValue,typeId:value}
        setGetSelectValue(data)
        form.setFieldsValue({country:null,brand:null})
    }
    const onChangeCountries=(value)=>{
        const data={...getSelectValue, countriesId: value}
        setGetSelectValue(data)
        form.setFieldsValue({brand:null})
    }



    return (<div>
        {(postCarLoading || editCarLoading || putCarLoading || imagesUploadLoading) ? <AppLoader/> :
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
                                style={{
                                    width: '100%',
                                }}
                                onChange={onChangeType}
                                placeholder='Выберите одну типы'
                                optionLabelProp='label'
                                options={optionsTypes}
                            />
                        </Form.Item>

                        <AddTypeModal refetchTypes={refetchTypes}/>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={'Выберите страна'}
                            name={'country'}
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
                                onChange={onChangeCountries}
                                placeholder='Выберите одну страна'
                                optionLabelProp='label'
                                options={optionsCountries}
                            />
                        </Form.Item>
                        <AddCountryModal arrCountry={countriesData} arrTypes={typesData} refetchCountries={refetchTypes}/>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={'Выберите бренд'}
                            name={'brand'}
                            rules={[{
                                required: true, message: 'Бренд должны быть выбраны'
                            }]}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                placeholder='Выберите одну бренд'
                                optionLabelProp='label'
                                options={optionsBrand}
                            />
                        </Form.Item>
                        <AddBrandModal refetchCountries={refetchCountries}/>
                    </Col>
                </Row>

                <Row gutter={20}>

                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Moshina modeli talab qilinadi'}
                            label={'Moshina modeli Uz'}
                            name={'title_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется модель автомобиля'}
                            label={'Модель автомобиля Ru'}
                            name={'title_ru'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormTextArea
                            required={true}
                            required_text={'Asosiy matn kiritish talab qilinada'}
                            label={'Asosiy matn Uz'}
                            name={'main_text_uz'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormTextArea
                            required={true} required_text={'Основной текст обязателен'}
                            label={'Основной текст Ru'}
                            name={'main_text_ru'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormInputNumber
                            required={true}
                            required_text={'Необходимо ввести цену автомобиля'}
                            label={'Цена автомобиля'}
                            name={'price'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInputNumber

                            label={'Цена со скидкой на автомобиль'}
                            name={'credit_price'}
                        />

                    </Col>
                </Row>

                <Row gutter={20}>

                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется указать цвет автомобиля.'}
                            label={'Цвет автомобиля (введите код цвета, например: #000000)'}
                            name={'colour'}
                        />


                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={'Доступно ли оно в настоящее время?'}
                            name={'is_available'}
                            rules={[{
                                required: true, message: 'Вы должны выбрать'
                            }]}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                placeholder='Выберите статус продажи'
                                optionLabelProp='label'
                                options={optionAvailable}
                            />
                        </Form.Item>

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется заполнение'}
                            label={'Как далеко он проходит на одном заряде?'}
                            name={'power_reserve'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется заполнение'}
                            label={'Самая высокая скорость'}
                            name={'max_speed'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется заполнение'}
                            label={'За сколько секунд он разгоняется от 0 до 100 км/ч?'}
                            name={'acceleration'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется заполнение'}
                            label={'Заряд батареи (кВтч)'}
                            name={'battery_capacity'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            required={true}
                            required_text={'Требуется заполнение'}
                            label={'Количество мест'}
                            name={'num_of_seats'}
                        />


                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={12}>
                        <FormInput
                            label={'Ссылка на видео на ютубе 1'}
                            name={'review_link_1'}
                        />


                    </Col>
                    <Col span={12}>
                        <FormInput
                            label={'Ссылка на видео на ютубе 2'}
                            name={'review_link_2'}
                        />

                    </Col>
                </Row>


                <Row gutter={20}>

                    <Col span={12}>
                        <Form.Item
                            label='Изображение основной'
                            name={'main_image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
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
                    <Col span={12}>
                        <Form.Item
                            label='Внутренний вид автомобиля'
                            name={'inner_image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsInner}
                                    listType='picture-card'
                                    onChange={onChangeInnerImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsInner.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={24}>
                        <Form.Item
                            label='Экстерьерные изображения'
                            name={'exterior_images'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={5}
                                    fileList={fileListPropsExterior}
                                    listType='picture-card'
                                    onChange={onChangeExteriorImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                    onRemove={handleRemoveExteriorImage}
                                >
                                    {fileListPropsExterior.length > 4 ? "" : "+Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label='Интерьер изображения'
                            name={'interior_images'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={5}
                                    fileList={fileListPropsInterior}
                                    listType='picture-card'
                                    onChange={onChangeInteriorImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                    onRemove={handleRemoveInteriorImage}
                                >
                                    {fileListPropsInterior.length > 4 ? "" : "+Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label='Технологии изображения'
                            name={'technology_images'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={5}
                                    fileList={fileListPropsTechnology}
                                    listType='picture-card'
                                    onChange={onChangeTechnologyImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                    onRemove={handleRemoveTechnologyImage}
                                >
                                    {fileListPropsTechnology.length > 4 ? "" : "+Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>Добавить характеристики автомобиля</Title>
                <Form.List name="characteristic">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'To\'ldirish talab qilinadi'}
                                                    label={`Xususiyatni sarlavhasi misol uchun:(O'lchami va vazni) Uz ${index + 1}`}
                                                    name={[field.name, 'title_uz']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Требуется заполнение'}
                                                    label={`Например, характерное название: (РАЗМЕР И МАССА) Ru ${index + 1}`}
                                                    name={[field.name, 'title_ru']}
                                                />
                                            </Col>
                                        </Row>


                                        <Form.List name={[field.name,"characteristics_child"]} style={{paddingLeft:'100px'}}>
                                            {(fields, {add:addChild, remove:removeChild}) => (
                                                <>
                                                    {fields.map((childField, childIndex) => {
                                                        return (
                                                            <div key={childField.fieldKey} style={{marginBottom: 20}}>
                                                                <Row gutter={20} >

                                                                    <Col span={11} offset={1} className={'character-child'}>
                                                                        <FormInput
                                                                            required={true}
                                                                            required_text={'To\'ldirish talab qilinadi'}
                                                                            label={`Xususiyat nomi (Uzunlik*kenglik*balandlik,mm) Uz ${childIndex + 1}`}
                                                                            name={[childField.name, 'key_uz']}
                                                                        />
                                                                    </Col>
                                                                    <Col span={11} >
                                                                        <FormInput
                                                                            required={false}
                                                                            required_text={'To\'ldirish talab qilinadi'}
                                                                            label={`Xususiyat qiymati (4630×1910×1655) Uz ${childIndex + 1}`}
                                                                            warning={'!!! Agar ✅ qo\'ymoqchi bo\'lsangiz qatorni bo\'sh qoldiring'}
                                                                            name={[childField.name, 'value_uz']}
                                                                        />
                                                                    </Col>
                                                                    <Col span={11} offset={1} className={'character-child'}>
                                                                        <FormInput
                                                                            required={true}
                                                                            required_text={'Требуется заполнение'}
                                                                            label={`Название характера (Длина*ширина*высота, мм) Ru ${childIndex + 1}`}
                                                                            name={[childField.name, 'key_ru']}
                                                                        />
                                                                    </Col>

                                                                    <Col span={11}>
                                                                        <FormInput
                                                                            required={false}
                                                                            required_text={'Требуется заполнение'}
                                                                            label={`Характеристическое значение (4630×1910×1655) Ru ${childIndex + 1},   
                                                                            `}
                                                                            warning={'!!! Если хотите поставить ✅, оставьте строку пустой'}
                                                                            name={[childField.name, 'value_ru']}
                                                                        />
                                                                    </Col>
                                                                    <Col span={6} offset={1}>

                                                                    <Title level={3}> <MinusCircleOutlined
                                                                        onClick={() => removeChild(childField.name)}/> Удалить  характеристики (Длина*ширина*высота, мм)</Title>
                                                                    </Col>
                                                                </Row>





                                                            </div>

                                                        );
                                                    })}
                                                    <Row>
                                                        <Col offset={1} span={10}>
                                                    <Form.Item>
                                                        <Button  type="primary" onClick={() => addChild()} block
                                                                style={{backgroundColor: '#1677ff'}}>
                                                            Нажмите, чтобы добавить новую функцию
                                                        </Button>
                                                    </Form.Item>

                                                        </Col>
                                                    </Row>

                                                </>
                                            )}
                                        </Form.List>

                                        <Title level={3}> <MinusCircleOutlined
                                            onClick={() => remove(field.name)}/> Удалить имя характеристики (РАЗМЕР И МАССА)</Title>

                                    </div>

                                );
                            })}
                            <Form.Item>
                                <Button type="primary" onClick={() => add()} block
                                        style={{backgroundColor: '#28a745'}}>
                                    Открыть новый раздел для характеристика
                                </Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>


                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editCarSuccess ? 'Изменить автомобиля' : 'Создать автомобиль'}
                </Button>
            </Form>}
    </div>);
};

export default CarPostEdit;
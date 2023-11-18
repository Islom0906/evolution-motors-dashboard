import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";

const initialValueForm = {
    name:"",
    lat:""
};



const MapPostEdit = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDt2upRTGqJ3BOGeKN1aCG5dByeOspcREk',
        libraries: ['geometry', 'drawing'],
    });
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId}=useSelector(state => state.editData)
    const dispatch=useDispatch()



    const [latLng, setlatLng] = useState({lat:null,lng:null});
    const [defaultCenter, setDefaultCenter] = useState({lat: 41.311785,
        lng: 69.279696,});
    // query-map
    const {
        mutate: postMapMutate,
        data: postMap,
        isLoading: postMapLoading,
        isSuccess: postMapSuccess,
    } = useMutation(({url, data}) => apiService.postData(url, data),{
        onSuccess:()=>{

            message.success('Success')
        },
        onError:(error)=>{

            message.error(error)
        }
    });

    // query-edit
    const {
        isLoading: editMapLoading,
        data: editMapData,
        refetch: editMapRefetch,
        isSuccess: editMapSuccess,
    } = useQuery(["edit-map", editId], () => apiService.getDataByID("/about/map", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putMap,
        isLoading: putMapLoading,
        data: putData,
        isSuccess: putMapSuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id),{
        onSuccess:()=>{
            message.success('Success')
        },
        onError:(error)=>{
            message.error(error.message)
        }
    });

    // map success
    useEffect(() => {
        if (putMapSuccess) {
            dispatch({type:EDIT_DATA,payload:""})
        }

        if (postMapSuccess || putMapSuccess) {

            navigate('/map')
        }
    }, [postMap,putData])





    // if edit map
    useEffect(() => {
        if (editId !== "") {
            editMapRefetch();
        }
    }, [editId]);

    // if no edit map
    useEffect(() => {
        if (editId===""){
            form.setFieldsValue(initialValueForm)
        }
    }, []);




    //edit map
    useEffect(()=>{
        if (editMapSuccess){

        const edit={
            name:editMapData.name,
            lat:editMapData.lat
        }
        setlatLng({lat:Number(editMapData.lat),lng:Number(editMapData.lng)})
            form.setFieldsValue(edit)
        }

    },[editMapData])



    const onFinish = (values) => {
        const formData=new FormData()

        formData.append('name',values.name)
        formData.append('lat',latLng.lat)
        formData.append('lng',latLng.lng)


        if (editMapData){
            putMap({url: '/about/map',data:formData,id:editId})
        }else{
            postMapMutate({url: "/about/map/", data:formData});
        }






    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    // refresh page again get data

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
    if (storedValues) {
        storedValues.images=[]
      form.setFieldsValue(storedValues);
    }

    const handleBeforeUnload = () => {
        
            localStorage.setItem(
              'myFormValues',
              JSON.stringify(form.getFieldsValue()),
            );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return ()=>{
        localStorage.removeItem('editDataId')
        localStorage.removeItem('myFormValues')
        window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, []);


    // Map
    const handleMapClick = (event) => {
        const clickedLatLng = {
            lat: event.latLng.lat(),
            lng: event?.latLng.lng(),
        };
        setDefaultCenter(clickedLatLng)
        setlatLng(clickedLatLng)
        form.setFieldsValue({lat:clickedLatLng.lat})
    };
    const mapStyles = {
        height: '400px',
        width: '100%',
    };


    return (
        <div>
            {( postMapLoading ||editMapLoading ||putMapLoading) ?
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
                        <Col span={24}>
                            <Form.Item
                                label="Название"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Ввод названия обязателен"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                    </Row>




                    <Row gutter={20}>
                        <Col span={24}>
                            {
                                isLoaded &&

                                <GoogleMap
                                    mapContainerStyle={mapStyles}
                                    zoom={12}
                                    center={defaultCenter}
                                    onClick={handleMapClick}
                                >
                                    <MarkerF position={latLng}/>
                                </GoogleMap>
                            }
                            <Form.Item
                                label=""
                                name="lat"
                                rules={[
                                    {
                                        required: true,
                                        message: "Разметка карты обязательна"
                                    }
                                ]}
                            >



                            </Form.Item>


                        </Col>

                    </Row>


                        <Button type="primary" htmlType="submit" style={{width: "100%",marginTop:"20px"}}>
                    {
                            editMapSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default MapPostEdit;
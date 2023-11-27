import { Button,   Space, Table,Image } from "antd";
import {  EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
// import { useEffect, useState } from "react";

const ServiceTable = ({data}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()


    // const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/service/add')
    };

    // useEffect(()=>{
    //     const reverse=[data]
    //     setReverseData(reverse)
    // },[data])
    console.log(data)
    const columns = [
        {
            title: 'Title Uz',
            dataIndex: 'title_uz',
            id: 'title_uz',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Title Ru',
            dataIndex: 'title_ru',
            id: 'title_ru',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Image',
            dataIndex: 'bg_image',
            id: 'bg_image',
            render: (image) => {
                console.log(image)
                    return (
                    <Image
                        width={50}

                        src={image?.image}
                    />
                )
            },
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record?.id)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>

                </Space>
            ),
        },
    ];

    return (
        <div>
            {
                data[0] &&
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey={(record) => record?.id}
                />
            }
        </div>
    );
};

ServiceTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default ServiceTable;
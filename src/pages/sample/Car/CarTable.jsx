import {Button, Image, Popconfirm, Space, Table, Tag} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const CarTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const Delete = async (id) => {
        deleteHandle('/cars/cars',id)
    };

    const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/car/add')
    };

    useEffect(()=>{
        const reverse=data?.reverse()
        setReverseData(reverse)
    },[data])



    const columns = [
        {
            title: 'Model Cars Uz',
            dataIndex: 'title_uz',
            id: 'title_uz',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            id: 'brand',
            render: (text) => <p>{text?.title_ru}</p>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            id: 'price',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Is Available',
            dataIndex: 'is_available',
            id: 'is_available',
            render: (text) => text ? <Tag color="#108ee9">В продаже</Tag> : <Tag color="#f50">Нет в продаже</Tag>
        },
        {
            title: 'Main Image',
            dataIndex: 'main_image',
            id: 'main_image',
            render: (image) => {
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
                        onClick={() => Edit(record.slug)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Popconfirm
                        title={'Are you sure to delete this task?'}
                        description={'Delete the task '}
                        onConfirm={() => Delete(record.slug)}>
                        <Button type='danger' icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={reverseData}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

CarTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default CarTable;
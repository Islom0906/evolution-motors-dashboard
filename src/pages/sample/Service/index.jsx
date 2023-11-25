import ServiceTable from './ServiceTable';
import {Button, Col, message, Row, Space, Spin} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import apiService from '../../../@crema/services/apis/api';
import { useQuery} from 'react-query';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import {useDispatch} from 'react-redux';

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data,
    isLoading: getCategoryLoading} = useQuery('insurance-get', () => apiService.getData('/about/service/'), {
    // enabled:false,
    onError: (error) => {

      message.error(error);
      // Handle the error
    },
  });




  const addArticle = () => {
    dispatch({type: EDIT_DATA, payload: ''});
    navigate('/service/add');
  };


  return (
      <div className={'site-space-compact-wrapper'}>
        <Space direction={'vertical'} style={{width: '100%'}}>
          <Row gutter={20}>

            <Col span={8} offset={16}>
              <Button
                  disabled={data?.title_uz}
                  type='primary'
                  icon={<PlusOutlined />}
                  style={{width: '100%'}}
                  onClick={addArticle}>
                Add
              </Button>
            </Col>
          </Row>
          <Spin
              size='medium'
              spinning={getCategoryLoading}>
            <ServiceTable
                data={[data]}
            />
          </Spin>
        </Space>
      </div>
  );
};

export default Index;
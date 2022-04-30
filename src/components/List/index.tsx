import { List as Lista, Col, Row, Typography, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const List = () => {
  const data = ['ajklhdikd', 'haiud'];
  const loadMoreData = () => {};
  return (
    <>
      <Row>
        <Col
          span={12}
          offset={6}
          style={{ backgroundColor: '#111', height: '100%' }}
        >
          <Typography>adhiuadhihudia</Typography>

          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>Você chegou ao fim!</Divider>}
            scrollableTarget='scrollableDiv'
          >
            <Lista
              dataSource={data}
              renderItem={(item) => <Lista.Item key={item.id}></Lista.Item>}
            >
              <div>Conteúdo</div>
            </Lista>
          </InfiniteScroll>
        </Col>
      </Row>
    </>
  );
};

export { List };

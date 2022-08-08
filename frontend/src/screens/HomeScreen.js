import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
// import { listProducts } from '../action/productActions';

//components imported
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <>
      <h1>Latest Dishes</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger"></Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

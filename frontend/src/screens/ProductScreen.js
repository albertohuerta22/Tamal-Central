import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap';

const ProductScreen = () => {
  return (
    <Row>
      <Col md={6}>
        <Image src={product.image} />
      </Col>
    </Row>
  );
};

export default ProductScreen;

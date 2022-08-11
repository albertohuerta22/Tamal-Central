import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

//component imports
import Message from '../components/Message';

//action imported to dispatch id
import { addToCart, removeFromCart } from '../action/cartActions';

const CartScreen = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  // const cartItems = localStorage.getItem('cartItems')
  //   ? JSON.parse(localStorage.getItem('cartItems'))
  //   : [];

  // useEffect(() => {
  //   if (cartItems) {
  //     setQuantity(cartItems);
  //   }
  // });

  const checkoutHandler = () => {
    console.log('checkout clicked');
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const quantityValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}></Col>
                  <Col className="product-page-section">
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value)),
                          setQty(e.target.value)
                        )
                      }
                    >
                      {quantityValues.map((x) => (
                        <option key={x} value={x}>
                          {x}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2} className="product-page-section">
                    <Button
                      className="product-page-section"
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4} style={{ marginTop: '20px' }}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

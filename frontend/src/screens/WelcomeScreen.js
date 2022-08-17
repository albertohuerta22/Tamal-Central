import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../action/productActions';
import Carousel from 'react-bootstrap/Carousel';

//components imported
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import redTamale from '../images/redtamale.jpg';
import greenTamale from '../images/greentamale.jpg';
import mole from '../images/mole.jpg';
import champurrado from '../images/champurrado.jpg';

const WelcomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts()); // this is what gets the ball rolling
  }, [dispatch]);

  return (
    <div className="main-container">
      <Carousel variant="dark">
        <Carousel.Item
          style={{
            height: '32rem',
            background: '#777',
            color: 'white',
            position: 'relative',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <img className="h-50" src={redTamale} alt="red tamale" />
          <Carousel.Caption>
            <h5>Red Tamale</h5>
            <p>Food Description Here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-50 mh-50" src={greenTamale} alt="green tamale" />
          <Carousel.Caption>
            <h5>Green Tamale</h5>
            <p>Food Description Here.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-50 mh-50" src={mole} alt="mole" />
          <Carousel.Caption>
            <h5>Mole</h5>
            <p>Food Description Here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-50 h-20" src={champurrado} alt="champurrado" />
          <Carousel.Caption>
            <h5>Champurrado</h5>
            <p>Food Description Here</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WelcomeScreen;

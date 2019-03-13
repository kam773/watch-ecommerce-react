import React from "react";
import MySlider from "../Slider/Slider";
import styled from "styled-components";
import Banner1 from "../../img/abt-1.jpg";
import Banner2 from "../../img/abt-2.jpg";
import Banner3 from "../../img/abt-3.jpg";
import { Container, Row, Col } from "reactstrap";
import Product from "./Product";
import { ProductConsumer } from "../../context";

export default function Landing() {
  return (
    <SliderContainer>
      <MySlider />
      <Container className="py-5">
        <Row>
          <Col md="4">
            <figure className="img-wrapper hover-effect">
              <img className="img-responsive" src={Banner1} alt="Banner" />
              <figcaption>
                <h4>Nulla maximus nunc</h4>
                <p>In sit amet sapien eros Integer dolore magna aliqua</p>
              </figcaption>
            </figure>
          </Col>
          <Col md="4">
            <figure className="img-wrapper hover-effect">
              <img className="img-responsive" src={Banner2} alt="Banner" />
              <figcaption>
                <h4>Mauris erat augue</h4>
                <p>In sit amet sapien eros Integer dolore magna aliqua</p>
              </figcaption>
            </figure>
          </Col>
          <Col md="4">
            <figure className="img-wrapper hover-effect">
              <img className="img-responsive" src={Banner3} alt="Banner" />
              <figcaption>
                <h4>Cras elit mauris</h4>
                <p>In sit amet sapien eros Integer dolore magna aliqua</p>
              </figcaption>
            </figure>
          </Col>
        </Row>
        <h1 className="text-center text-black text-capitalize my-3">
          featured products
        </h1>
        <Row>
          <ProductConsumer>
            {value => {
              return value.featured.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </Row>
        <h1 className="text-center text-black text-capitalize my-3">
          Best Sellers
        </h1>
        <Row>
          <ProductConsumer>
            {value => {
              return value.featured.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </Row>
      </Container>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  height: auto;

  .img-wrapper {
    position: relative;
  }
  figcaption {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #008cba;
    width: 100%;
  }
  .img-wrapper:hover figcaption {
    opacity: 0.8;
  }
  .img-wrapper:hover figcaption h4 {
    opacity: 1;
  }
  .img-wrapper:hover figcaption p {
    opacity: 1;
  }
  figcaption h4 {
    color: #fff;
    font-size: 1.4rem;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    letter-spacing: 2px;
    text-align: center;
    opacity: 1;
  }
  figcaption p {
    color: white;
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 1;
    margin-top: 30px;
    line-height: 1.4;
  }
  .cart-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: right;
    padding: 0.8rem;
    font-size: 1.5rem;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;

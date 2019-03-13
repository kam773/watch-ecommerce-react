import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <Container>
      <Row className="d-flex flex-row align-items-center my-2 text-capitalize text-center">
        <Col xs="10" className="mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "auto" }}
            className="img-fluid"
            alt="product"
          />
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <span className="d-lg-none">product: </span>
          {title}
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <span className="d-lg-none">price: </span>
          {price}
        </Col>
        <Col xs="10" className="mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <ButtonWrapper>
              <span
                className="btn btn-black mx-1on>"
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1on>">{count}</span>
              <span
                className="btn btn-black mx-1on>"
                onClick={() => increment(id)}
              >
                +
              </span>
            </ButtonWrapper>
          </div>
        </Col>
        {/*  */}
        <Col className="mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i style={{ cursor: "pointer" }} className="fas fa-trash" />
          </div>
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <strong> item total : $ {total}</strong>
        </Col>
      </Row>
    </Container>
  );
}

const ButtonWrapper = styled.div`
  .btn-black {
    border: 1px solid #000;
    transition: all 0.3s;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

import React from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button/Button";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart
        } = value.detailProduct;
        return (
          <DetailsWrapper className="py-5">
            <Container>
              {/* title */}
              <Row>
                <Col
                  xs="10"
                  className="mx-auto text-center text-slanted text-blue my-5"
                >
                  <h1>{title}</h1>
                </Col>
              </Row>
              {/* end title */}
              {/* product info*/}
              <Row>
                <Col xs="10" className="mx-auto col-md-6 my-3 text-capitalize">
                  <img
                    src={img}
                    className="img-fluid img-detail"
                    alt="product"
                  />
                </Col>
                <Col xs="10" className="mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model: {title}</h1>
                  <h4 className="text-uppercase text-title text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </Col>
              </Row>
            </Container>
          </DetailsWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const DetailsWrapper = styled.div`
  .img-detail {
    width: 50%;
    height: auto;
  }
`;

export default Details;

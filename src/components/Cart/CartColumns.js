import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function CartColumns() {
  return (
    <Container className="container-fluid text-center d-none d-lg-block">
      <Row>
        <Col xs="10" className="mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">products</p>
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">name of product</p>
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">price</p>
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">quantity</p>
        </Col>{" "}
        <Col xs="10" className="mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">remove</p>
        </Col>
        <Col xs="10" className="mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">total</p>
        </Col>
      </Row>
    </Container>
  );
}

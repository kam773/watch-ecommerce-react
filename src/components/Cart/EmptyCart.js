import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function EmptyCart() {
  return (
    <Container className="my-5">
      <Row className="my-5">
        <Col xs="10" className="mx-auto text-center text-title my-5">
          <h1>Your cart is currently empty</h1>
        </Col>
      </Row>
    </Container>
  );
}

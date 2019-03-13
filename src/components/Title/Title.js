import React from "react";
import { Col, Row } from "reactstrap";

export default function Title({ name, title }) {
  return (
    <Row>
      <Col xs="10" className="mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold py-5">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </Col>
    </Row>
  );
}

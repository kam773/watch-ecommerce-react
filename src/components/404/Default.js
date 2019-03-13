import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Default extends Component {
  render() {
    return (
      <Container>
        <Row className="my-5">
          <Col
            xs="10"
            className="mx-auto text-center text-title text-uppercase my-5"
          >
            <h1 className="display-3 my-5">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              the requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

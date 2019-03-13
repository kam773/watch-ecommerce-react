import React from "react";
import styled from "styled-components";
import { Input, Form, FormGroup, Row, Col } from "reactstrap";

export default function ContactForm() {
  return (
    <FormWrapper>
      <Form action="mail.php" id="contact-form" method="POST">
        <Row>
          <Col md="6">
            <FormGroup className="md-form my-3">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="form-control"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup className="md-form my-3">
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup className="md-form my-3">
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup className="md-form my-3">
              <Input
                type="textarea"
                id="message"
                name="message"
                placeholder="Message"
                className="form-control md-textarea"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  textarea {
    resize: none;
    height: 6rem;
    border: 1px solid #555;
    font-size: 1.2rem;
  }
  input {
    height: 3rem;
    border: 1px solid #555;
    font-size: 1.2rem;
  }
  #contact-form {
    width: 100%;
  }
`;

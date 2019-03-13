import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "reactstrap";

export default function Contact() {
  return (
    <Container fluid>
      <h1 className="text-center text-black text-capitalize my-3">
        Contact us
      </h1>
      <FormWrapper>
        <Row>
          <Col md="4">
            <div className="address-box my-3">
              <div className="address my-3">
                <h5>Address</h5>
                <p>
                  The company name,
                  <span>Lorem ipsum dolor,</span>
                  Glasglow Dr 40 Fe 72.
                </p>
              </div>
              <div className="address my-3">
                <h5>Address1</h5>
                <p>
                  Tel:1115550001,
                  <span>Fax:190-4509-494</span>
                  Email:{" "}
                  <a href="mailto:example@email.com">contact@example.com</a>
                </p>
              </div>
            </div>
          </Col>
          <Col md="8">
            <Row>
              <Col md="12" className="mb-md-0 mb-5">
                <ContactForm />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormWrapper>
    </Container>
  );
}
const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0 0 30%;
  .address-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .address {
    font-size: 1.2rem;
  }
  .btn {
    padding: 1rem 2rem;
    border: 2px solid #555;
    background: transparent;
    color: #555;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    background: #555;
    color: #fff !important;
  }
`;

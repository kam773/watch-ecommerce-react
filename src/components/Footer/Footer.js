import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";

export default function Footer() {
  return (
    <FooterWrapper className="mt-5">
      <Container>
        <Row>
          <Col md="3" xs="12">
            <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">
              follow us
            </h5>
            <ul className="list my-3 text-left ml-2">
              <li className="list-item my-4">
                <a className="d-flex flex-row align-items-center" href="#">
                  <i className="fab fa-facebook fa-2x" />
                  Facebook
                </a>
              </li>
              <li className="list-item my-4">
                <a className="d-flex flex-row align-items-center" href="#">
                  <i className="fab fa-twitter fa-2x" />
                  Twitter
                </a>
              </li>
              <li className="list-item my-4">
                <a className="d-flex flex-row align-items-center" href="#">
                  <i className="fab fa-google-plus fa-2x" />
                  Google Plus
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3" xs="12">
            <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">
              information
            </h5>
            <ul className="list text-left ml-2">
              <li className="my-2">Specials</li>
              <li className="my-2">New Products</li>
              <li className="my-2">Our Stores</li>
              <li className="my-2">Contact Us</li>
              <li className="my-2">Top Sellers</li>
            </ul>
          </Col>
          <Col md="3" xs="12">
            <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">
              my account
            </h5>
            <ul className="list text-left ml-2">
              <li className="my-2">My Account</li>
              <li className="my-2">My Credit Spils</li>
              <li className="my-2">My Merchandise returns</li>
              <li className="my-2">My Personal info</li>
              <li className="my-2">My Addresses</li>
            </ul>
          </Col>
          <Col md="3" xs="12">
            <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">
              store information
            </h5>
            <ul className="list text-left ml-2">
              <li>
                <h6>
                  The company name,
                  <span>Lorem ipsum dolor,</span>
                  Glasglow Dr 40 Fe 72.
                </h6>
                <h6>+955 123 4567</h6>
                <p>
                  <a href="mailto:example@email.com">contact@example.com</a>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <footer className="footer pt-5 my-5">
        <Row>
          <Col md="6">
            <div className="subscribe-from ml-5">
              <Form action="" id="subscribe-form">
                <div className="form-inline">
                  <Input type="text" placeholder="Enter your email" />
                  <Button color="white" type="submit">
                    Subscribe
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md="6">
            <div className="footer-text text-right py-2 mr-5">
              <p className="text-right-text-black text-bold">
                &copy; 2019 Luxury Watches. All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </footer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  overflow-x: hidden;
  .list {
    list-style: none;
    text-align: center;
    .list-item {
      a {
        color: #000 !important;
        text-decoration: none;
        .fab {
          margin-right: 0.3rem;
        }
      }
    }
  }
  .footer {
    border-top: 1px solid #999;
  }
  input {
    height: 2.5rem;
    border: 1px solid #000;
    width: 50%;
    font-size: 1.2rem;
    padding: 0.2rem;
  }
  button[type="submit"] {
    border: 1px solid #000;
    background: transparent;
    padding: 0.46rem 1rem;
    cursor: pointer;
  }
`;

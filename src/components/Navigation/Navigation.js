import React from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';
import {NavLink} from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { Button, Navbar, FormControl, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  render() {
    return (
      <React.Fragment>
          <NavWapper>
            <div className="brand">
                <h1 className="text-center my-5 brand-header">Luxury Watches</h1>
            </div>
              <Container>
                <Row>
                  <Col md="12">
                  <Navbar bg="white" variant="light" expand="lg" className="my-3">
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                      <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item className="ml-3">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-3">
                        <NavLink className="nav-link" to="/men">Men</NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-3">
                        <NavLink className="nav-link" to="/women">Women</NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-3">
                        <NavLink className="nav-link" to="/kids">Kids</NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-3">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav.Item>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-primary">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                  </Navbar>
                  </Col>
                </Row>
              </Container>
          </NavWapper>
      </React.Fragment>
    )
  }

}

const NavWapper = styled.nav`
.brand {
  width: 100%;
  display: block;
}
.brand-header {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
}
.nav-link {
  color: #000!important;
  font-size: 1.2rem;
}

`;

export default Navigation;
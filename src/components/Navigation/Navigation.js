import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../Form/Form';
import {Nav, Navbar} from 'react-bootstrap';

export default function Navigation() {
  return (
      <React.Fragment>
          <div className="brand">
              <h1 className="text-center my-5 brand-header">Luxury Watches</h1>
          </div>
          <NavWapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                    <Navbar className="mb-2" bg="white" variant="white">
                      <Nav className="mr-auto">
                        <Nav.Link href="#home"><Link className="nav-link" to="/">Home</Link></Nav.Link>
                        <Nav.Link href="#features"><Link className="nav-link" to="/men">Men</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className="nav-link" to="/women">Women</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className="nav-link" to="/kids">Kids</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className="nav-link" to="/contact">Contact</Link></Nav.Link>
                      </Nav>
                    </Navbar>
                    </div>
                    <div className="col-md-4">
                      <div className="search-box mt-3">
                          <Form/>
                      </div>
                    </div>
              </div>
            </div>
          </NavWapper>
      </React.Fragment>
  )
}

{/* <ul className="navbar-nav">
  <li className="nav-item ml-5"></li>
  <li className="nav-item ml-5"></li>
  <li className="nav-item ml-5"></li>
  <li className="nav-item ml-5"><Link className="nav-link" to="/kids">Kids</Link></li>
  <li className="nav-item ml-5"><Link className="nav-link" to="/contact">Contact</Link></li>
</ul> */}

const NavWapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
.brand {
  width: 100%;
  display: block;

}
.brand-header {
  text-transform: uppercase!important;
  color: #FFD700!important;

}
ul {
  list-style: none;
  li{
    display: inline-block;
  }
}
.nav-link {
  color: #000!important;
  font-size: 1.2rem;

}

`;
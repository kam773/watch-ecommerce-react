import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../Form/Form';

export default function Navigation() {
  return (
      <React.Fragment>
          <div className="brand">
              <h1 className="text-center my-5 brand-header">Luxury Watches</h1>
          </div>
          <NavWapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
              {/*
              https://www.iconfinder.com/icons/1243689/call_phone_icon
              Creative Commons (Attribution 3.0 Unported);
              https://www.iconfinder.com/Makoto_msk */}
              <ul className="navbar-nav">
                  <li className="nav-item ml-5"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item ml-5"><Link className="nav-link" to="/men">Men</Link></li>
                  <li className="nav-item ml-5"><Link className="nav-link" to="/women">Women</Link></li>
                  <li className="nav-item ml-5"><Link className="nav-link" to="/kids">Kids</Link></li>
                  <li className="nav-item ml-5"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
              <div className="search-box m-3">
                  <Form/>
              </div>
          </NavWapper>
      </React.Fragment>
  )
}

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
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    // const { cartTotal } = value;
  return (
      <React.Fragment>
          <HeaderWapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
              {/*
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
              <div className="cart">
                  <Link to="/cart" className="nav-link">
                      <i className="fas fa-cart-plus" style={ { color: '#fff', fontSize: '1.6rem', marginRight: '10px' } }></i>
                      <span style={ { color: '#fff', fontSize: '1.6rem' } }>${0}</span>
                  </Link>
              </div>
          </HeaderWapper>
          <Navigation/>
      </React.Fragment>
  )
}

const HeaderWapper = styled.nav`
display: flex;
flex-direction: row;
justify-content: flex-end;
background: #000;
.cart {
  display: flex;
}

`;
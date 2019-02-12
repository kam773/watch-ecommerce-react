import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../../context';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
   const { title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">

              <div className="img-container p-5">
                <Link to="/details">
                    <img src={ img } alt="Product" className="card-img-top"/>
                </Link>
              </div>
              <button
                className="cart-btn"
                disabled={inCart?true:false}
                onClick={()=>console.log()}
                >
                {inCart?(<p className="text-capitalize mb-0" disabled>{" "}in Cart</p>): <i className="fas fa-cart-plus"></i>}
              </button>

              {/* Card footer */}
              <div className = "card-footer d-flex justify-content-between">
                            <p className = "align-self-center mb-0"> {
                        title
                      } </p>
                            <h5 className = "text-blue font-italic mb-0" >
                                <span className = "mr-1" > $ {
                        price
                      } </span></h5>
              </div>
          </div>

      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .cart-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: right;
    padding: .8rem;
    font-size: 1.5rem;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

`;
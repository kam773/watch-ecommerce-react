import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../../context';

export default class Product extends React.Component {
  render() {
   const { title, img, price } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">

              <div className="img-container p-5">
                <Link to="/details">
                    <img src={ img } alt="Product"/>
                </Link>
              </div>
              <button
                className="cart-btn">
                <i className="fas fa-cart-plus"></i>
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

const ProductWrapper = styled.div`
  .card {
    width: 100%;
  }

`;
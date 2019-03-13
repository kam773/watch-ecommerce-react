import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

export default class Product extends React.Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <Card>
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="" className="card-img-top" />
                </Link>
              </div>
            )}
          </ProductConsumer>
          {/* Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0"> {title} </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1"> $ {price} </span>
            </h5>
          </div>
        </Card>
      </ProductWrapper>
    );
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
};

const ProductWrapper = styled.div`
  .cart-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.8rem;
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;

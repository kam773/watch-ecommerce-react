import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Product from "../Product/Product";
import { Container, Row } from "reactstrap";
export default class ChildrenSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="py-5">
          <h1 className="text-center text-black text-capitalize my-3">
            Kid&apos;s Collection
          </h1>
          <Row>
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

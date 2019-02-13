import React, { Component } from 'react'
import { ProductConsumer  } from '../../context';
import Product from '../Product/Product';

export default class WomenSection extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="py-5">
                <div className="container">
                  <h1 className="text-center text-black text-capitalize my-3">Women&apos;s Collection</h1>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                             return value.products.map(product => {
                                 return <Product key={ product.id } product={ product }/>
                             } ) } }

                        </ProductConsumer>
                    </div>
                </div>
          </div>
      </React.Fragment>
    )
  }
}


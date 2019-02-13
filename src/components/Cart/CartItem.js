import React from 'react'

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
  return (
      <div className="row d-flex flex-row align-items-center my-2 text-capitalize text-center">
          <div className="col-10 mx-auto col-lg-2">
              <img
              src={ img }
              style={ { width: '5rem', height: 'auto' } }
              className="img-fluid"
              alt="product"/>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <span className="d-lg-none text-bold">product: </span>
              { title }
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <span className="d-lg-none text-bold">price: </span>
              { price }
          </div>
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
              <div className="d-flex justify-content-center">
                  <div>
                      <span className="btn btn-black mx-1 text-bold" onClick={ () => decrement(id) }>-</span>
                      <span className="btn btn-black mx-1 text-bold">{ count }</span>
                      <span className="btn btn-black mx-1 text-bold" onClick={ () => increment(id) }>+</span>
                  </div>
              </div>
          </div>
          {/*  */}
          <div className="col-10 mx-auto col-lg-2">
              <div className="cart-icon" onClick={ () => removeItem(id) }>
                  <i style={ { cursor: 'pointer' } } className="fas fa-trash"></i>
              </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <strong> item total : $ { total }</strong>
          </div>
      </div>
  )
}

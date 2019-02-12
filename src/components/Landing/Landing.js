import React from 'react';
import MySlider from '../Slider/Slider';
import styled from 'styled-components';
import Banner1 from '../../img/abt-1.jpg';
import Banner2 from '../../img/abt-2.jpg';
import Banner3 from '../../img/abt-3.jpg';
import img1 from '../../img/p-4.png';
import img2 from '../../img/p-2.png';
import img3 from '../../img/p-6.png';
import img4 from '../../img/p-7.png';

export default function Landing() {
  return (
      <SliderContainer>
          <MySlider/>
          <div className="py-5">
              <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                                <figure className="img-wrapper hover-effect">
                                        <img className="img-responsive" src={ Banner1 } alt="Banner"/>
                                        <figcaption>
                                            <h4>Nulla maximus nunc</h4>
                                            <p>In sit amet sapien eros Integer dolore magna aliqua</p>
                                        </figcaption>
                                </figure>
                        </div>
                        <div className="col-md-4">
                                <figure className="img-wrapper hover-effect">
                                        <img className="img-responsive" src={ Banner2 } alt="Banner"/>
                                        <figcaption>
                                            <h4>Mauris erat augue</h4>
                                            <p>In sit amet sapien eros Integer dolore magna aliqua</p>
                                        </figcaption>
                                </figure>
                        </div>
                        <div className="col-md-4">
                                <figure className="img-wrapper hover-effect">
                                        <img className="img-responsive" src={ Banner3 } alt="Banner"/>
                                        <figcaption>
                                            <h4>Cras elit mauris</h4>
                                            <p>In sit amet sapien eros Integer dolore magna aliqua</p>
                                        </figcaption>
                                </figure>
                        </div>
                    </div>
                    <h1 className="text-center text-black text-capitalize my-3">featured products</h1>
                    <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img1 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">CASSIO Classic</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 89 </span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img2 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">ATLANTIC sealine</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 199 </span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img3 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">FESTINA Multifunction</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 169 </span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img4 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">SEIKO Prospex</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 189 </span></h5>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <h1 className="text-center text-black text-capitalize my-3">Best Sellers</h1>
                    <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img2 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">FESTINA Multifunction</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 169 </span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img4 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">SEIKO Prospex</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 189 </span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img1 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">CASSIO Classic</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 169 </span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card">
                                    <div className="img-container p-5">
                                        <img src={ img3 } alt="Product"/>
                                    </div>
                                    <a href="#" className="cart-btn">
                                        <i className="fas fa-cart-plus"></i>
                                    </a>
                                        {/* Card footer */}
                                    <div className = "card-footer d-flex justify-content-between">
                                            <p className = "align-self-center mb-0">ATLANTIC sealine</p>
                                            <h5 className = "text-blue font-italic mb-0" >
                                                <span className = "mr-1" > $ 199 </span></h5>
                                    </div>
                                </div>
                            </div>
                    </div>
              </div>

          </div>
      </SliderContainer>
  )
}

const SliderContainer = styled.div`
    width: 100%;
    height: auto;

    .img-wrapper {
        position: relative;

    }
    figcaption {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #008CBA;
        width: 100%;
    }
    .img-wrapper:hover figcaption {
        opacity: .8;
    }
    .img-wrapper:hover figcaption h4 {
        opacity: 1;
    }
    .img-wrapper:hover figcaption p {
        opacity: 1;
    }
    figcaption h4 {
        color: #fff;
        font-size: 1.4rem;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: capitalize;
        letter-spacing: 2px;
        text-align: center;
        opacity: 1;
    }
    figcaption p {
        color: white;
        font-size: 1.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 1;
        margin-top: 30px;
        line-height: 1.4;
    }
    .cart-btn {
        padding: .5rem 1rem;
        color: #000!important;
        font-size: 1.2rem;
    }
`;
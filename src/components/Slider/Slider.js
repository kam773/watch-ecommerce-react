import React, { Component } from 'react'
import Slider from "react-slick";
import Banner1 from '../../img/bnr-1.jpg';
import Banner2 from '../../img/bnr-2.jpg';
import Banner3 from '../../img/bnr-3.jpg';
import './style.css';

export default class MySlider extends Component {
  render() {
      const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        ssEase: 'linear'
      };
    return (
        <Slider { ...settings }>
            <div className="img-wrapper">
                <img className="img-fluid" src={ Banner1 } alt="Banner"/>
            </div>
            <div className="img-wrapper">
                <img className="img-fluid" src={ Banner2 } alt="Banner"/>
            </div>
            <div className="img-wrapper">
                <img className="img-fluid" src={ Banner3 } alt="Banner"/>
            </div>
        </Slider>
    )
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import Banner1 from "../../img/bnr-1.jpg";
import Banner2 from "../../img/bnr-2.jpg";
import Banner3 from "../../img/bnr-3.jpg";
import styled from "styled-components";
export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      fade: true
    };
    return (
      <SliderWrapper>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="img-wrapper">
              <img src={Banner1} alt="Banner" />
            </div>
            <div className="img-wrapper">
              <img src={Banner2} alt="Banner" />
            </div>
            <div className="img-wrapper">
              <img src={Banner3} alt="Banner" />
            </div>
          </Slider>
        </div>
      </SliderWrapper>
    );
  }
}

const SliderWrapper = styled.div`
  .slider-container {
    width: 100%;
    height: auto;
  }

  .img-wrapper {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .img-wrapper img {
    width: 100%;
    height: auto;
  }
`;

import React from 'react';
import MySlider from '../Slider/Slider';
import styled from 'styled-components';
import Banner1 from '../../img/abt-1.jpg';
import Banner2 from '../../img/abt-2.jpg';
import Banner3 from '../../img/abt-3.jpg';

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


`;
import React from 'react';
import MySlider from '../Slider/Slider';
import styled from 'styled-components';

export default function Landing() {
  return (
      <SliderContainer>
          <MySlider/>
          <div className="py-5">
              <div className="container">
                    <h1 className="text-center text-black text-capitalize my-3">featured products</h1>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">

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

`;
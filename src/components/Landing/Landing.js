import React from 'react';
import MySlider from '../Slider/Slider';
import styled from 'styled-components';

export default function Landing() {
  return (
      <SliderContainer>
          <MySlider/>
      </SliderContainer>
  )
}

const SliderContainer = styled.div`
    width: 100%;
    height: auto;

`;
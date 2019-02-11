import React from 'react';
import styled from 'styled-components';

export default function Form() {
  return (
      <FormWrapper>
          <form>
              <div className="form-inline">
                  <input class="form-control" id="search" type="text" placeholder="Search" />
                  <button type="submit"><i className="fas fa-search"></i></button>
              </div>
          </form>
      </FormWrapper>
  )
}

const FormWrapper = styled.div`
button {
    background: transparent;
    outline: none;
    border: 1px solid #000;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
}
input {
    border: 1px solid #000;
}

`;
import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: #000;
  border: none;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border: 2px solid #000;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

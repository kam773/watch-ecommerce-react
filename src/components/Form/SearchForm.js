import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "reactstrap";

export default function SearchForm() {
  return (
    <FormWrapper>
      <Form>
        <div className="form-inline">
          <Input
            className="form-control"
            id="search"
            type="text"
            placeholder="Search"
          />
          <Button color="white" type="submit">
            <i className="fas fa-search" />
          </Button>
        </div>
      </Form>
    </FormWrapper>
  );
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

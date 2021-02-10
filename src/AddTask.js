import React, { useState } from "react";

import styled from "styled-components";

const AddForm = styled.form`
  display: flex;
  width: 100%;
  background-color: hsl(237, 14%, 26%);
  height: 4.7rem;
  border-radius: 0.7rem;
  padding: 0 2rem;
  align-items: center;
`;
const CheckBoxInput = styled.input`
  appearance: none;
  height: 0;
  padding: 1rem;
  border-radius: 50%;
  border: 1px solid grey;
`;

const AddTaskInput = styled.input`
  ::placeholder {
    font-family: "Josefin Sans" sans-serif;
  }
  flex-grow: 1;
  background-color: transparent;
  color: var(--font-color);
  border: none;
  padding: 0.5rem;
  font-size: 1.4rem;
  border: 1px solid grey;
  font-family: "Josefin Sans", sans-serif;
`;

const AddTask = () => {
  return (
    <AddForm>
      <CheckBoxInput type="checkbox" />
      <AddTaskInput type="text" placeholder="Create a new todo..." />
    </AddForm>
  );
};
export default AddTask;

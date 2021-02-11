import React, { useState } from 'react';

import styled from 'styled-components';

import { CheckBoxInput, CheckBoxLabel } from './CheckBoxInput';

const AddForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 4rem;
  background-color: var(--task-color-dark);
  height: 6.3rem;
  border-radius: 0.7rem;
  padding: 0 2rem;
  align-items: center;
  transition: 0.2s;
`;
const AddTaskInput = styled.input`
  color: var(--font-color);
  font-family: 'Josefin Sans', sans-serif;
  transition: 0.2s;
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  font-size: 1.31rem;
  margin-left: 10px;
  @media (min-width: 1440px) {
    font-size: 1.6rem;
  }
`;

const AddTask = ({ handleTask }) => {
  const [AddTaskValue, setAddTaskValue] = useState('');
  const handleCheck = () => {
    if (AddTaskValue.length > 2 && AddTaskValue.length < 22) {
      handleTask(AddTaskValue);
      setAddTaskValue('');
    } else {
      console.log('task name is to short/long');
    }
  };
  const handleInputValue = (e) => {
    setAddTaskValue(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (AddTaskValue.length > 2 && AddTaskValue.length < 22) {
      handleTask(AddTaskValue);
      setAddTaskValue('');
    } else {
      console.log('task name is to short/long');
    }
  };
  return (
    <AddForm onSubmit={handleForm}>
      <CheckBoxLabel>
        <CheckBoxInput type="checkbox" onClick={handleCheck} />
      </CheckBoxLabel>
      <AddTaskInput
        type="text"
        placeholder="Create a new todo..."
        value={AddTaskValue}
        onChange={handleInputValue}
      />
    </AddForm>
  );
};
export default AddTask;

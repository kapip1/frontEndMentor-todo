import React from 'react';

import styled from 'styled-components';

import AddTask from './AddTask';

import sun from './assets/icon-sun.svg';
import moon from './assets/icon-moon.svg';

const AddTaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  color: white;
  letter-spacing: 0.5em;
  font-weight: 700;
  font-size: 2.8rem;
  text-transform: uppercase;
`;
const InputCheckBox = styled.input`
  &:hover,
  &:focus {
    transform: rotate(${({ darkMode }) => (darkMode ? -60 + 'deg' : null)});
  }
  transition: 0.3s;
  width: 1.6em;
  height: 1.6em;
`;

const AddTaskSection = ({ darkMode, setDarkMode, handleTask }) => {
  const handleInputClick = () => setDarkMode(!darkMode);
  return (
    <AddTaskWrapper>
      <Title>todo</Title>
      <InputCheckBox
        onClick={handleInputClick}
        darkMode={darkMode}
        type="image"
        src={`${darkMode ? sun : moon}`}
        alt="lightMode"
      />
      <AddTask handleTask={handleTask} />
    </AddTaskWrapper>
  );
};
export default AddTaskSection;

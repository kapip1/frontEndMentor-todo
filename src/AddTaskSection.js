import React from "react";

import styled from "styled-components";

import AddTask from "./AddTask";

import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";

const AddTaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const InputMode = styled.input`
  width: 1.7em;
  height: 1.7em;
`;
const Title = styled.h1`
  color: white;
  letter-spacing: 0.5em;
  font-weight: 700;
  font-size: 2.8rem;
  text-transform: uppercase;
`;

const AddTaskSection = ({ darkMode, setDarkMode }) => {
  const handleInputClick = () => setDarkMode(!darkMode);
  return (
    <AddTaskWrapper>
      <Title>todo</Title>
      <InputMode
        onClick={handleInputClick}
        type="image"
        src={`${darkMode ? sun : moon}`}
        alt="lightMode"
      />
      <AddTask />
    </AddTaskWrapper>
  );
};
export default AddTaskSection;

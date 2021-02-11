import React from 'react';

import styled, { css } from 'styled-components';

import cross from './assets/icon-cross.svg';
import checked from './assets/icon-check.svg';

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: var(--task-color-dark);
  height: 6.3rem;
  vertical-align: baseline;
`;
const TaskName = styled.p`
  color: var(--font-color);
  opacity: ${({ active }) => (active ? '1' : '0.3')};
  text-decoration: ${({ active }) => (active ? null : 'line-through')};
  font-size: 1.5rem;
  order: 1;
  flex-grow: 8;
  @media (min-width: 1440px) {
    font-size: 1.95rem;
  }
`;
const TaskInput = styled.input`
  appearance: none;
  width: 100%;
  height: 100%;
`;
const TaskButton = styled.button`
  position: relative;
  transition: 0.3s;
  border: none;
  margin-left: 1rem;
  margin-right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  cursor: pointer;
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url(${cross});
    background-position: center;
    background-repeat: no-repeat;
  }
  &:hover {
    transform: rotate(90deg);
  }
  &::focus {
    outline: none;
  }
`;
const LabelTaskInput = styled.label`
  position: relative;
  order: 2;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border-radius: 50%;
  margin-left: 2rem;
  margin-right: 2rem;
  overflow: hidden;
  border: 0.5px solid grey;
  ${({ active }) =>
    !active
      ? css`
          background: linear-gradient(135deg, #57ddff, #c058f3);
          &::after {
            position: absolute;
            content: '';
            transform: translate(-50%, -50%);
            left: 53%;
            top: 55%;
            width: 60%;
            height: 60%;
            background-image: url(${checked});
            background-repeat: no-repeat;
            background-size: 100%;
  }
          }
        `
      : null}
`;

const Task = ({ name, handleTaskRemove, id, handleTaskDone, active }) => {
  const handleCheckBox = () => {
    handleTaskDone(id);
  };
  return (
    <TaskWrapper>
      <TaskName active={active}>{name}</TaskName>
      <TaskButton onClick={() => handleTaskRemove(id)}></TaskButton>
      <LabelTaskInput active={active}>
        <TaskInput
          type="checkbox"
          checked={!active}
          onChange={handleCheckBox}
        />
      </LabelTaskInput>
    </TaskWrapper>
  );
};
export default Task;

import React, { useState } from 'react';

import styled from 'styled-components';

import Task from './Task';
import TaskListPanel from './TaskListPanel';
import TaskListInfo from './TaskListInfo';

const TaskListWrapper = styled.div`
  margin-top: 2rem;
  border-radius: 0.7rem;
  width: 100%;
  background-color: var(--task-color-dark);
`;

const TaskListSection = ({
  tasks,
  handleTaskRemove,
  handleTaskDone,
  handleTaskClear,
}) => {
  const [render, setRender] = useState(0);

  const allTask = tasks.map((task) => (
    <Task
      name={task.name}
      handleTaskRemove={handleTaskRemove}
      handleTaskDone={handleTaskDone}
      id={task.id}
      key={task.id}
      active={task.active}
    />
  ));
  const active = tasks.filter((task) => task.active === true);
  const activeTasks = active.map((task) => (
    <Task
      name={task.name}
      handleTaskRemove={handleTaskRemove}
      handleTaskDone={handleTaskDone}
      id={task.id}
      key={task.id}
      active={task.active}
    />
  ));
  const done = tasks.filter((task) => task.active === false);
  const doneTasks = done.map((task) => (
    <Task
      name={task.name}
      handleTaskRemove={handleTaskRemove}
      handleTaskDone={handleTaskDone}
      id={task.id}
      key={task.id}
      active={task.active}
    />
  ));
  const getRenderType = (type) => {
    setRender(type);
  };
  const renderList = () => {
    if (render === 0) {
      return allTask;
    } else if (render === 1) {
      return activeTasks;
    } else if (render === 2) {
      return doneTasks;
    }
  };
  return (
    <>
      <TaskListWrapper>{renderList()}</TaskListWrapper>
      <TaskListInfo />
      <TaskListPanel getRenderType={getRenderType} render={render} />
    </>
  );
};
export default TaskListSection;

import React, { useState } from 'react';

import styled from 'styled-components';

import EmptyTask from './EmptyTask';
import Task from './Task';
import TaskListPanel from './TaskListPanel';
import TaskListInfo from './TaskListInfo';

const TaskListWrapper = styled.div`
  margin-top: 2rem;
  border-radius: 0.7rem;
  width: 100%;
  overflow: hidden;
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
    <TaskListWrapper>
      {renderList().length ? renderList() : <EmptyTask />}
      <TaskListInfo handleTaskClear={handleTaskClear} length={active.length} />
      <TaskListPanel getRenderType={getRenderType} render={render} />
    </TaskListWrapper>
  );
};
export default TaskListSection;

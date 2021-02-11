import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import AddTaskSection from './AddTaskSection';
import TaskListSection from './TaskListSection';

import GlobalStyle from './GlobalStyle';
import ToDoList from './ToDoList';
import Wrapper from './Wrapper';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Zrobić śniadanie',
      active: true,
    },
  ]);
  const handleTask = (name) => {
    const tasksCopy = [...tasks];
    const task = {
      id: uuidv4(),
      name,
      active: true,
    };
    tasksCopy.push(task);
    setTasks(tasksCopy);
  };
  const handleTaskRemove = (id) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.findIndex((task) => task.id === id);
    tasksCopy.splice(task, 1);
    setTasks(tasksCopy);
  };
  const handleTaskDone = (id) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.findIndex((task) => task.id === id);
    const isActive = tasksCopy[task].active;
    tasksCopy[task].active = !isActive;
    setTasks(tasksCopy);
  };
  const handleTaskClear = () => {
    const tasksCopy = [...tasks];
    const DoneTaks = tasksCopy.filter((task) => task.active === true);
    setTasks(DoneTaks);
  };
  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Wrapper darkMode={darkMode}>
        <ToDoList>
          <AddTaskSection
            handleTask={handleTask}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <TaskListSection
            tasks={tasks}
            handleTaskRemove={handleTaskRemove}
            handleTaskDone={handleTaskDone}
            handleTaskClear={handleTaskClear}
          />
        </ToDoList>
      </Wrapper>
    </>
  );
};

export default App;

import React, { useState } from "react";

import AddTaskSection from "./AddTaskSection";

import GlobalStyle from "./GlobalStyle";
import ToDoList from "./ToDoList";
import Wrapper from "./Wrapper";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Wrapper darkMode={darkMode}>
        <ToDoList>
          <AddTaskSection darkMode={darkMode} setDarkMode={setDarkMode} />
        </ToDoList>
      </Wrapper>
    </>
  );
};

export default App;

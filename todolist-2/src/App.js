import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import MotivationNote from './components/MotivationNote'; 
import { TodoProvider } from './TodoContext';


const GlobalStyle = createGlobalStyle`
  body {
    //웹 배경
    background: #F0DDDF;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      <MotivationNote />
    </TodoProvider>
  );
}

export default App;
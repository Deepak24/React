// import { useState } from 'react'
// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import AddTodo from "./components/AddTodo1";
import Todos from "./components/Todos";

function App() {

  return (
    <>
      <h2>Learning the redux toolkit.</h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App;

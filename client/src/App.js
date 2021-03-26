import React from "react";
import NewTodo from "./components/NewTodo";
import Main from "./components/main";
import Alert from "./components/alert";
import "./App.css";

const App = () => (
  <div className="container">
    <h1 className="title">Todo App</h1>
    <div className="main">
      <NewTodo />
      <Alert />
      <Main />
    </div>
  </div>
);

export default App;

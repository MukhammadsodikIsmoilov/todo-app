import React from "react";
import NewTodo from "./components/new-todo";
import Main from "./components/main";
import Alert from "./components/Alert/Alert.jsx";
import Header from "./components/Header/Header.jsx";
import "./App.css";

const App = () => (
	<div className='container'>
		<Header title='Todo App' />
		<div className='main'>
			<NewTodo />
			<Alert />
			<Main />
		</div>
	</div>
);

export default App;

import React from 'react';
import {useDispatch} from 'react-redux';
import {clearTodos} from '../redux/todo/actions';
import TodoList from './TodoList';


const Body = () => {
  const dispatch = useDispatch()
  return (
    <div className='todoList'>
      <TodoList />
      <button className='btn' onClick={() => dispatch(clearTodos())}>
        Clear All
      </button>
    </div>
  );
};

export default Body;

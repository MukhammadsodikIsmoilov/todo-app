import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo, fetchTodos} from '../redux/todo/actions';
import {showAlert} from '../redux/alert/actions'


const NewTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.length > 2) {
      dispatch(addTodo(todo));
      dispatch(fetchTodos())
      setTodo('');
    } else {
      dispatch(showAlert('Type at least 3 characters', 'info'));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='New Todo ...'
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
    </form>
  );
};

export default NewTodo;

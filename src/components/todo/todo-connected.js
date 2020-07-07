import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax';
import './todo.scss';
import Navbar from 'react-bootstrap/Navbar';




const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteItem] = useAjax();
  useEffect(_getTodoItems, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <h1>
          Home
        </h1>
      </Navbar>
      <Navbar bg="dark" variant="dark">

        <header >
          <h2>
            There are {list.filter(item => item.complete === 'pending').length} Items To Complete
          </h2>
        </header>
      </Navbar>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
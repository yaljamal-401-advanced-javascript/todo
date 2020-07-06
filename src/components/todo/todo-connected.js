import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax'
import './todo.scss';
import Navbar from 'react-bootstrap/Navbar';

const todoAPI = 'http://api-testtt.herokuapp.com/api/v1/todo';



const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteItem] = useAjax()

  // const [list, setList] = useState([]);

  // const _addItem = (item) => {
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

  // const _toggleComplete = id => {

  //   let item = list.filter(i => i._id === id)[0] || {};

  //   if (item._id) {

  //     item.complete = !item.complete;

  //     let url = `${todoAPI}/${id}`;

  //     fetch(url, {
  //       method: 'put',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(item)
  //     })
  //       .then(response => response.json())
  //       .then(savedItem => {
  //         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //       })
  //       .catch(console.error);
  //   }
  // };

  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.json())
  //     .then(data => setList(data.result))
  //     .catch(console.error);
  // };

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
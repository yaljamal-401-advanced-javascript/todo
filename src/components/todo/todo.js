import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([]);
  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newlist = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList(newlist);
    }
  };
  useEffect(() => {
    let list = [
      {
        _id: 1,
        complete: false,
        text: 'Clean the Kitchen',
        difficulty: 3,
        assignee: 'Person A',
      },
      {
        _id: 2,
        complete: false,
        text: 'Do the Laundry',
        difficulty: 2,
        assignee: 'Person A',
      },
      {
        _id: 3,
        complete: false,
        text: 'Walk the Dog',
        difficulty: 4,
        assignee: 'Person B',
      },
      {
        _id: 4,
        complete: true,
        text: 'Do Homework',
        difficulty: 3,
        assignee: 'Person C',
      },
      {
        _id: 5,
        complete: false,
        text: 'Take a Nap',
        difficulty: 1,
        assignee: 'Person B',
      },
    ];
    document.title = `To Do List: ${
      list.filter((item) => !item.complete).length
      }`;
    setList(list);
  }, []);

  document.title = `To Do List:  ${
    list.filter((item) => !item.complete).length
    }`;

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>HOME</Navbar.Brand>
        </Navbar>
      </header>

      <Navbar variant="dark" bg="dark" className="mt-4 ml-5 mr-5">
        <Navbar.Brand>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </Navbar.Brand>
      </Navbar>
      <Container className="ml-5 mr-5 mt-5">
        <Row className="ml-5">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList list={list} handleComplete={toggleComplete} />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ToDo;
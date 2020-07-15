import React, { useState, useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Login from '../../login/index.js';
import Signup from '../../signup/index.js';
import Auth from '../../auth/index.js';
import './todo.scss';
import useAjax from '../../hooks/ajax.js';

// import React, { useContext } from 'react';
import { SettingsContext } from '../../context/data.js';
// import { ThemeContext } from '../../context/theme.js';

function ToDo(props) {
  // var slicedList;
  const siteContext = useContext(SettingsContext);
  // const themeContext = useContext(ThemeContext);

  const [list, setList] = useState([]);
  const [getElement, postElement, putElement, deleteElement] = useAjax(setList);

  const addItem = (item) => {
    item.complete = false;
    let url = `https://lab32-401.herokuapp.com/todo`;
    postElement(url, item);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let z = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList([...z]);
      let data = item;
      let url = `https://lab32-401.herokuapp.com/todo`;

      putElement(url, data);
    }
  };

  useEffect(() => {
    document.title = `TO DO LIST ${
      list.filter((item) => !item.complete).length
      }`;
  }, [list]);
  useEffect(() => {
    let url = `https://lab32-401.herokuapp.com/todo`;
    getElement(url);

    // setTimeout(() => {

    //   ss();
    // }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const togglehandleDelete = (id) => {
    let idx = list.findIndex((i) => i._id === id);
    list.splice(idx, 1);
    setList([...list]);
    let url = `https://lab32-401.herokuapp.com/todo`;

    deleteElement(url, id);
  };

  return (
    <main>
      <Login />
      <Signup />
      <Auth capability="read">
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

        <div style={{ textAlign: 'end' }}>
          <Button
            style={{}}
            variant="primary"
            onClick={(e) => siteContext.setShow(!siteContext.show)}
          >
            Hide Completed
          </Button>
          <form onChange={(e) => siteContext.changeSort(e.target.value)}>
            <label className="radio">
              <input type="radio" name="sort" value="difficulty" />
              difficulty
            </label>
            <label className="radio">
              <input type="radio" name="sort" value="complete" />
              complete
            </label>
            <label className="radio">
              <input type="radio" name="sort" value="assignee" />
              assignee
            </label>
            <label className="radio">
              <input type="radio" name="sort" value="none" />
              none
            </label>
          </form>
        </div>
        <section className="todo">
          <Auth capability="create">
            <div>
              <TodoForm handleSubmit={addItem} />
            </div>
          </Auth>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              handleDelete={togglehandleDelete}
            />
          </div>
        </section>
      </Auth>
    </main>
  );
}
export default ToDo;
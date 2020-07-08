import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax';
import './todo.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Pagination from './pagination.js';
import ToggleHideShow from './togglehideshow';
import PaginationContext from '../context/pagination-context';
import ToggleShowProvider from '../context/hideShow';
import ChangeNumberOfPages from './itemperpage';
import Header from '../header/header.js';
// import SortItem from './sortItems'

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteItem] = useAjax();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemPerPage, setItemPerPage] = useState(3);

  // const indexOfLastItem = currentPage * itemPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const currentItem = list.slice(indexOfFirstItem, indexOfLastItem);

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log(list ,'llllllllllll');

  useEffect(_getTodoItems, []);

  return (
    <>
      <Header />
      <Navbar bg="dark" variant="dark" className="navSec">

        <Nav className="mr-auto" >
          <h2>
            To Do List Manager ({list.filter(item => item.complete === 'pending').length})
          </h2>
        </Nav>

      </Navbar>



      <section className="todo">

        <div className="form">
          <TodoForm handleSubmit={_addItem} />
        </div>
        <PaginationContext list={list}>

          <div className="list">
            <ToggleShowProvider list={list}>
              <ToggleHideShow />
              <ChangeNumberOfPages />

              <TodoList
                handleComplete={_toggleComplete}
                handleDelete={deleteItem}
              />
            </ToggleShowProvider>
            <Pagination
              totalitems={list.length}
            />
          </div>

        </PaginationContext>

      </section>
    </>
  );
};

export default ToDo;

import React, { useContext } from 'react';

import { PaginationContext } from '../context/pagination-context';
import './todo.scss';
import Dropdown from 'react-bootstrap/Dropdown';
function ChengeNumberOfPages() {

  const pagination = useContext(PaginationContext);
  const changHandler = (e) => {
    pagination.setItem(e.target.value);
  };

  return (
    <>
      {/* <Dropdown nChange={changHandler} className="page">
  <Dropdown.Toggle variant="primary" id="dropdown-basic">

    #page
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item value='3'><option value='3'>3</option></Dropdown.Item>
    <Dropdown.Item value='5'><option value='5'>5</option></Dropdown.Item>
    <Dropdown.Item value='7'><option value='7'>7</option></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
      {/* <span>items per page</span> */}
      <select onChange={changHandler}>
        <option>items per page</option>
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='7'>7</option>
      </select>
    </>
  );

}
export default ChengeNumberOfPages;

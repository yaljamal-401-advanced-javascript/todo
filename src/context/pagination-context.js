import React, { useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const list = props.list.sort((a, b) => a.difficulty > b.difficulty ? 1 : -1);
  let currentItem = list.slice(indexOfFirstItem, indexOfLastItem);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setItem = numberOfPages => setItemPerPage(numberOfPages);

  const state = {
    currentPage,
    itemPerPage,
    setCurrentPage: setCurrentPage,
    setItemPerPage: setItemPerPage,
    currentItem,
    paginate,
    setItem,

  };

  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );

}

export default Pagination;
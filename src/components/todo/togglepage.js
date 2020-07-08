import React from 'react';

const NextPrevious = ({ currentPage, handleChangePage }) => {
  
  return (
      <>
   <button onClick={() => handleChangePage(currentPage++)}>Next</button>
   <button onClick={() => handleChangePage(currentPage--)}>Previous</button>
   </>
  );
};

export default NextPrevious;
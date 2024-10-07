import React, { useState } from 'react';
import Pagination from './Pagination';

const items = [...Array(100).keys()]; 
const itemsPerPage = 10;

const App = () => {
  const [currentPageItems, setCurrentPageItems] = useState([]);

  const onPageChange = (pageNumber) => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageItems(items.slice(start, end));
  };

  return (
    <div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onPageChange={onPageChange}
      />
      <ul>
        {currentPageItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
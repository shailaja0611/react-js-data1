// src/ItemList.js
import React, { useState } from 'react';
import Pagination from './Pagination';

const ItemList = () => {
    const items = Array.from({ length: 100 }, (_, index) => Item ${index + 1});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default ItemList;
import React, { useState, useEffect } from 'react';

import TableElem from '../TableElements';
import axiosInstance from '../../util/http';
import './index.style.scss';

const Table = () => {
  // eslint-disable-next-line no-unused-vars
  const [tableElems, setElements] = useState([]);

  const elems = tableElems.map(({ id, name, price }, index) => (
    <TableElem name={name} id={id} key={id} price={price} index={index} />
  ));

  useEffect(async () => {
    // const result = await axiosInstance.get('/api/v1/products');
    const { data: { data } } = await axiosInstance.get('http://localhost:5050/api/v1/products/');
    setElements(data);
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th className="id" scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {elems}
      </tbody>
    </table>
  );
};

export default Table;

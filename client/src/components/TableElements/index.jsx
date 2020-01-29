/* eslint-disable react/prop-types */
import React from 'react';

import './index.style.scss';

const TableElem = ({
  name,
  id,
  price,
  index,
}) => {
  console.log('ffr');
  // eslint-disable-next-line no-alert
  const handleClick = () => {
    console.log(name, ' here ', id, ' ', price);
  };

  return (
    <tr onClick={handleClick}>
      <th scope="row">{index + 1}</th>
      <td className="id">{id}</td>
      <td>{name}</td>
      <td>{`$ ${price}`}</td>
    </tr>
  );
};

export default TableElem;

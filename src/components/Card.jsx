import React from 'react';

const Card = ({ data }) => {
  const { name, age, band, genre } = data;
  return (
    <ul className='bg-white border border-[#ccc]'>
        <li>{name}</li>
        <li>{age}</li>
        <li>{band}</li>
        <li>{genre}</li>

    </ul>
  )
}

export default Card;
import React from 'react';

const Card = ({ data }) => {
  const { name, age, band, genre } = data;
  return (
    <ul className='w-[90%] h-[90%] p-6 bg-white border border-[#ccc]'>
        <li>{name}</li>
        <li>{age}</li>
        <li>{band}</li>
        <li>{genre}</li>
    </ul>
  )
}

export default Card;
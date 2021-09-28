import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 title='header' className='header-1'>{title}</h1>
      {/* <h3 title='Header' className='header'>Cats</h3> */}
    </>
  );
}

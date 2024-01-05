import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='size-full flex flex items-center justify-center m-10'>
      <div className='w-1/3 flex items-center justify-between'>
        <Link className='w-1/4 text-center m-4 border-2 rounded-xl p-5 border-gray-600 shadow-gray-500 shadow-2xl bg-white hover:bg-gray-200 transition duration-300' to="/bookList">Book List</Link>
        <Link className='w-1/4 text-center m-4 border-2 rounded-xl p-5 border-gray-600 shadow-gray-500 shadow-2xl bg-white hover:bg-gray-200 transition duration-300' to="/addBook">Add a Book</Link>
      </div>
    </nav>
  );
};

export default Navigation;

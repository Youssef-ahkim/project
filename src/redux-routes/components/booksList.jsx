import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../actions/actions';
import { Link } from 'react-router-dom';
import bookImage from "../images/book1.jpg"


const BookList = () => {
  const dispatch = useDispatch();
  const booksArray = useSelector((state) => state.booksArray);

  const [updateMode, setUpdateMode] = useState(false);
  const [updateBookId, setUpdateBookId] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const handleDelete = (id) => {
    const confirmDelete =window.confirm('Are you sure you want to delete this book?');
    if(confirmDelete){
      dispatch(deleteBook(id));
    }
  };

  const handleUpdate = (id) => {
    setUpdateMode(true);
    setUpdateBookId(id);
    const bookToUpdate = booksArray.find((book) => book.id === id);
    if (bookToUpdate) {
      setTitle(bookToUpdate.title);
      setAuthor(bookToUpdate.author);
      setDescription(bookToUpdate.description);
      setStatus(bookToUpdate.status);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(updateBookId, title, author, description, status));
    setUpdateMode(false);
    setTitle('');
    setAuthor('');
    setDescription('');
    setStatus('');
  };

  return (
    <div className='size-full flex justify-center items-center flex-col'>
      <div className='mb-4 w-full flex items-center justify-around'>
          <h1 className='font-mono text-4xl uppercase underline'>Book List</h1>
          <div className='flex items-center'>
            <label htmlFor='search' className='block text-gray-700 text-sm font-bold mr-2'>
              Search:
            </label>
            <input
              type='text'
              id='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search by title'
              className='border border-gray-900 rounded py-2 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500'
            />
          </div>
      </div>


      <ul className='flex flex-wrap justify-center size-full'>
      {booksArray
  .filter((book) =>
    `${book.title}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((book, index) => (
    <li key={index} className='m-10 border-solid border-2 rounded-2xl border-grey p-5 w-1/4 shadow-xl shadow-gray-500 flex flex-col justify-between'>
            <img src={bookImage} alt="book" />
            <span>
              <strong className='inline uppercase tracking-wide text-gray-800 text-lg font-serif mb-2'>Title :</strong>{' '}
              <span className='text-black tracking-wide text-s font-mono'>{book.title}</span> <br />
            </span>
            <span>
              <strong className='inline uppercase tracking-wide text-gray-800 text-lg font-serif mb-2'>Author :</strong>{' '}
              <span className='text-black tracking-wide text-s font-mono'>{book.author}</span> <br />
            </span>
            <span>
              <strong className='inline uppercase tracking-wide text-gray-800 text-lg font-serif mb-2'>Status :</strong>{' '}
              <span className='text-black tracking-wide text-s font-mono'>{book.status}</span> <br />
            </span>
            <span>
              <strong className='inline uppercase tracking-wide text-gray-800 text-lg font-serif mb-2'>Description :</strong>{' '}
              <span className='text-black tracking-wide text-s font-mono'>{book.description}</span> <br />
            </span>
            <div className='m-4 flex justify-around'>
              <button className='bg-blue-600 text-white py-2 w-1/3 rounded hover:bg-blue-500' type='button' onClick={() => handleUpdate(book.id)}>
                Update
              </button>
              <button className='bg-red-600 text-white py-2 w-1/3 rounded hover:bg-red-500' type='button' onClick={() => handleDelete(book.id)}>
                Delete
              </button>
            </div>
          </li>
  ))}
      </ul>



      {updateMode && (
        <div className='fixed top-0 size-full flex justify-center items-center flex-col backdrop-blur-md'>
          <form className='w-2/5 m-4 border-2 rounded-xl p-10 border-gray-300 shadow-gray-500 shadow-2xl bg-white' onSubmit={handleSubmit}>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='title'>Book Title:</label>
            <input
            className="border  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='author'>Book Author:</label>
            <input
            className="border  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
              type='text'
              id='author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='status'>Book Status:</label>
            <input
            className="border w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
              type='text'
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='description'>Book Description:</label>
            <input
            className="border  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
              type='text'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className='flex justify-between items-center'>
              <button className="bg-blue-500 text-white mt-3 py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" type='submit'>Update Book</button>
              <button className="bg-gray-400 text-white mt-3 py-2 px-4 rounded hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray active:bg-gray-800" onClick={() => {setUpdateMode(false)}}>Cancel</button>
            </div>     
          </form>
        </div>
      )}

      <div className='flex gap-10'>
      <Link className='block m-5 text-center text-blue-500 no-underline hover:underline' to='/addBook'>
        Add a Book
      </Link>
      <Link className='block m-5 text-center text-blue-500 no-underline hover:underline' to='/Home'>
        Home
      </Link>
      </div>
    </div>
  );
};

export default BookList;

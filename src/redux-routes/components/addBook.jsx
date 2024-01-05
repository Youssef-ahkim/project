import React, { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/actions';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && description && status) {
      dispatch(addBook(title, author, description, status));
      setIsAdded(true)
      setIsEmpty(false)
    }else{
      setIsEmpty(true)
      return;
    }
    setTitle('');
    setAuthor('');
    setDescription('');
    setStatus('');
  };



  return (
    <div className='flex justify-center items-center flex-col '>
      <h1 className="font-mono  mb-6 text-4xl uppercase underline ">Add a Book</h1>
      <form onSubmit={handleSubmit} className='w-2/5 m-4 border-2 rounded-xl p-10 border-gray-300 shadow-gray-500 shadow-2xl'>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
          Book Title:
        </label>
        <input
          className="border  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Entre the book title here'
        />

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="author">
          Book Author:
        </label>
        <input
          className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Entre the authoe name here'
        />

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
          Book Description:
        </label>
        <input
          className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Entre the description here'

        />

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="status">
          Book Status:
        </label>
        <input
          className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500 "
          type="text"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder='Entre the book status here'

        />

        

        <button
          className="bg-blue-500 text-white mt-3 py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          type="submit"
        >
          Add Book
        </button>
      </form>

      
      <div className='flex gap-10'>
      <Link
        className="block m-9 text-center text-blue-500 no-underline hover:underline"
        to="/BookList"
      >
        Book List
      </Link>
      <Link className='block m-9 text-center text-blue-500 no-underline hover:underline' to='/Home'>
        Home
      </Link>
      </div>

      

      {isAdded && <div className='absolute right-0 bottom-0 p-5 bg-green-300 rounded-lg mb-5'> ✅ The book has been added successfully</div>}
      {isEmpty&& <div className='absolute left-0 bottom-0 p-5 bg-red-300 rounded-lg mb-5'> ❌ Ensure that none of the input fields are left blank</div>}

    </div>
  );
};

export default AddBook;

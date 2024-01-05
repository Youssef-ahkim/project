const initialState = {
    booksArray: [
      {
        id : 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel about the American Dream.',
        status: 'Reading',
      },
      {
        id : 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A classic novel about racial injustice.',
        status: 'Read',
      },
      {
        id : 3,
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel depicting a totalitarian society.',
        status: 'To Read',
      },
      {
        id : 4,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'A coming-of-age novel about teenage angst.',
        status: 'Read',
      },
      {
        id : 5,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'A fantasy novel about a hobbit on an epic journey.',
        status: 'To Read',
      },
    ],
  };


  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            const newBook = {
              id: state.booksArray.length + 1,
              ...action.payload,
            };
            return { ...state, booksArray: [...state.booksArray, newBook] };
      case 'DELETE_BOOK':
        return {
          ...state,
          booksArray: state.booksArray.filter(
            (book) => book.id !== action.payload.id
          ),
        };
      case 'UPDATE_BOOK':
        return {
          ...state,
          booksArray: state.booksArray.map((book) =>
            book.id === action.payload.id
              ? { ...book, ...action.payload }
              : book
          ),
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  
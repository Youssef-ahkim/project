export const addBook = (title, author, description , status) => {
    return {
      type: 'ADD_BOOK',
      payload: { title , author , description , status }
    };
  };

    
  export const deleteBook = (id) => {
    return {
      type: 'DELETE_BOOK',
      payload: { id }
    };
  };

  export const updateBook = (id, title, author, description, status) => {
    return {
      type: 'UPDATE_BOOK',
      payload: { id, title, author, description, status },
    };
  };
export const addProduct = (id, name, price) => {
    return {
      type: 'ADD_PRODUCT',
      payload: { id, name, price }
    };
  };
  
  export const deleteProduct = (id) => {
    return {
      type: 'DELETE_PRODUCT',
      payload: { id }
    };
  };

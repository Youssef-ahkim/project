import React from "react";
import { Hashrouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddBook from "./components/addBook";
import bookList from "./components/booksList";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css"
import LoginPage from "./components/login";

const App = () => {

  return (
    <Provider store={store}>
      
      <Hashrouter>
      <Routes>
        <Route path="/"  exact Component={LoginPage}  />
        <Route path="/Home"  exact Component={Home}  />
        <Route path="/addBook" Component={AddBook} />
        <Route path="/bookList" Component={bookList} />
      </Routes>
    </Hashrouter>
  
       
    </Provider>
  );
};

export default App;
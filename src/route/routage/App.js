import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import AjouterArticle from './AjouterArticle';
import ListeArticles from './ListeArticles';
import DetailArticle from './DetailArticle';

const App = () => {

  return (
    <div className='app'>
      
      <BrowserRouter>
      <Routes>
        <Route path="/"  exact Component={Home}  />
        <Route path="/ajouter-article" Component={AjouterArticle} />
        <Route path="/liste-articles" Component={ListeArticles} />
        <Route path="/detail/:id" Component={DetailArticle} />
      </Routes>
    </BrowserRouter>
  
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components /Home/Home.js';


const App = () => {


  return (

  <BrowserRouter>
    <Home />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )

}

export default App;

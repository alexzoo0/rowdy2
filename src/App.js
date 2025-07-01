import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components /Home/Home.js';
import AboutUs from './components /AboutUs/AboutUs.js';
import Products from './components /Products/Products.js';
import ShopNow from './components /ShopNow/ShopNow.js';
import Terms from './components /TermsConditions/terms.js';
import Questions from './components /FAQ/questions.js';



const App = () => {


  return (

  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/aboutUs' element={<AboutUs />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/shopNow' element={<ShopNow />} />
      <Route exact path='/terms' element={<Terms />} />
      <Route exact path='/questions' element={<Questions />} />
    </Routes>
  </BrowserRouter>
  )

}

export default App;

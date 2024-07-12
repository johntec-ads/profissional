import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';

import Header from './components/Header';


function RouterApp () {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route  path='/'          element={<Home/>} />
        <Route  path='/sobre'     element={ <Sobre/> } />
        <Route  path='/contatos'  element={ <Contatos/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;

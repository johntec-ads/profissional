import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contatos from './pages/Contatos'

function RouterApp () {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Home/> } />
        <Route path='/contatos' element={ <Contatos/> } />

      </Routes>
    </BrowserRouter>
  )
}
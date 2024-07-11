import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Outros from './pages/Outros';

function RoutesApp() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path=  '/'          element={ <Home/> } />
        <Route patch= '/contatos'  element={ <Contatos/> } />
        <Route patch= '/outros'    element={ <Outros/> }  />
      </Routes>    
    </BrowserRouter>
  )
}

export default RoutesApp ;
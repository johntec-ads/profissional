import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';
import Header from './components/header';
import Erro from './pages/Erro';
import Produto from './pages/Produtos';



function RoutesApp () {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sobre' element={ <Sobre /> } />
        <Route path='/contatos' element={ <Contatos /> }/>
        <Route path='/produto/:id' element={ <Produto/> } />
       

        <Route path='*'  element={ <Erro/> } />     
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
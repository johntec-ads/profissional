import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Importando os componentes */
import Home from './pages/Home';
import Outros from './pages/Outros';

/* Declarando a component */
function RoutesApp() {

  return(
    /* Declarando os componentes do react-router-dom */
    <BrowserRouter>{/* Define o roteador com base no histórico do navegador */}
    <Routes>{/* Define as rotas da aplicação */}

      {/* Route = define a rota e associa cada uma a um component específico */}
      <Route path='/' element={ <Home/> } />
      <Route path='/outros' element={ <Outros/> } />

    </Routes>    
    </BrowserRouter>
  )
}

export default RoutesApp ;
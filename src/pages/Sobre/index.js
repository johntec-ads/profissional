import { Link } from 'react-router-dom';

function Sobre ( ) {
  return(
    <div>
      <h1> Bem vindo a Sobre page </h1>
      <br/>
      <Link to='/' >Home</Link> <br/> <br/>
      <Link to='/contatos' >Contatos</Link>

     
    </div>
  )
}

export default Sobre ;
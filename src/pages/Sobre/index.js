import { Link } from 'react-router-dom';

function Sobre ( ) {
  return(
    <div>
      <h1> Informações Sobre a empresa </h1>
      <br/>
      <Link to='/' >Home</Link> <br/>
      <Link to='/contatos' >Contatos</Link>
     
    </div>
  )
}

export default Sobre ;
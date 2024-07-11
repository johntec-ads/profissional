import { Link } from 'react-router-dom';

 function Contatos ( ) {
  return(
    <div>
      <h1> Bem vindo aos Contatos </h1> <br/>
      <Link to='/' >Home</Link><br/><br/>
      <Link to='/sobre' >Sobre</Link>
    </div>
  )
}

export default Contatos ;
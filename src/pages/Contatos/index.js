import { Link } from 'react-router-dom';

 function Contatos ( ) {
  return(
    <div>
      <h1> Contatos </h1> 
      <p>telefone: xxx-xxxx-xxxx</p><br/>
      <Link to='/' >Home</Link><br/>
      <Link to='/sobre' >Sobre</Link>
    </div>
  )
}

export default Contatos ;
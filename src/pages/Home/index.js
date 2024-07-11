import { Link } from 'react-router-dom';

 function Home ( ) {
  return(
    <div>
      <h1> Bem vindo a Home page </h1><br/>
      <Link to='/contatos' >Contatos</Link><br/><br/>
      <Link to='/sobre' >Sobre</Link>
    </div>
  )
}

export default Home ;
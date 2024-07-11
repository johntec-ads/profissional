import { Link } from 'react-router-dom';

 function Home ( ) {
  return(
    <div>
      <h1> Bem vindo a Home page </h1>
      <Link to='/contatos' >Contatos</Link>
    </div>
  )
}

export default Home ;
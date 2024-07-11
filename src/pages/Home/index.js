import {Link} from 'react-router-dom';

function Home () {
  return(
    <div>
      <h1>Bem vindo a Home page</h1>
      <Link to='/contatos' >Contatos</Link> <br/><br/>
      <Link to='/outros' >Outros</Link>
    </div>
  
  )
}

export default Home ;
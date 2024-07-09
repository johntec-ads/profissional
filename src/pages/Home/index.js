import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>
        Bem vindo a Home
      </h1>
      <Link to='/sobre' >Pagina Sobre</Link> <br/>
      <Link to='/contatos' >Pagina Contatos</Link>

    </div>
  )

}

export default Home;
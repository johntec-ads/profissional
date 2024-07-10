import {Link} from 'react-router-dom';


function Home () {
  return(
    <div>
      Bem vindo a Home page <br/>
      <Link to='/outros' >Outros</Link>    

    </div>
  )

}

export default Home ;
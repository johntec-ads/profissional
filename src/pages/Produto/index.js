import { useParams } from 'react-router-dom';

function Produto() {

  const { id } = useParams();


  return(
    <div>
      <h1> Controle de Produto </h1>
      <h2> { id } </h2>

    </div>
  )
}

export default Produto;
import { useParams } from 'react-router-dom'

function Produto () {

  const { id } = useParams()

  return (
    <div>
      <h2>
        Detalhe do produto
      </h2>
      
      <h1>
        { id }
      </h1>

    </div>
  )
}

export default Produto;
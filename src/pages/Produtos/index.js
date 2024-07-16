import { useParams } from 'react-router-dom'

function Produto() {

  let { id } = useParams()

  return(
    <div>
      Produto 123
    </div>
  )
}

export default Produto;
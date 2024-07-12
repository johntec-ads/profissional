import { Link } from 'react-router-dom'
import './style.css'

function Header () {
  return (
    <header>
      <h2> JohnTec </h2>

      <div className='menu'>
        <Link to='/' >Home</Link>
        <Link to='/sobre' >Sobre</Link>
        <Link to='/contatos' >Contatos</Link>
      </div>

    </header>
  )

}

export default Header;
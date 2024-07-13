import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Header () {
  return (
    <header>
      <h1>My Project</h1>

      <div className='menu'>
        <Link to='/' >Home</Link> <br />
        <Link to='/sobre' >Sobre</Link> <br />
        <Link to='/contatos'>Contatos</Link>
      </div>

    </header>
  )
}

export default Header;
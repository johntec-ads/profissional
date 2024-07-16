import React from 'react';
/* importando o componente Link */
import { Link } from 'react-router-dom';
import './style.css'

function Header () {
  return (
    /* Dentro do component Heade
    atribuimos a tag <header> */
    <header>
      <h1> My Project </h1>
      {/* atribuir os links */ }
      <div className='menu'>

        <Link to='/' >        Home</Link>
        <Link to='/sobre' >   Sobre</Link>
        <Link to='/contatos'> Contatos</Link>

      </div>
    </header>

  )
}

export default Header;

/* Após a criação do Component Header, exportamos para
o compomente RouterApp, que está sendo exportado para 
o component App */
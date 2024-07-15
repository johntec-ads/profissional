import React from 'react';
import { Link } from 'react-router-dom';

function Contatos( ) {

  return(
    <div className='links' >
      <h1>Contatos</h1>
      <Link to='/' >Home</Link> <br/>
      <Link to='/sobre' >Sobre</Link>
    </div>
  )
}

export default Contatos;
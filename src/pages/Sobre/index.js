import React from 'react';
import { Link } from 'react-router-dom'

function Sobre( ) {

  return(
    <div>
      <h1>Sobre</h1>
      <Link to='/' >Home</Link> <br/>
      <Link to='/contatos' >Contatos</Link>
    </div>
  )
}

export default Sobre;
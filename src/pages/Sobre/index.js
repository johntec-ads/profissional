import React from 'react';
import { Link } from 'react-router-dom'

function Sobre( ) {

  return(
    <div>
      <h1>Sobre</h1>
      <Link to='/contatos' >Contatos</Link><br/>
      <Link to='/' >Home</Link> 
    </div>
  )
}

export default Sobre;
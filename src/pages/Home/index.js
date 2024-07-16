import React from 'react';
import { Link } from 'react-router-dom';

function Home( ) {

  return(
    <div className='links' >
      <h1>Home</h1>
      <Link to='/sobre' >Sobre</Link> <br/>
      <Link to='/contatos'>Contatos</Link>
      <br/>     
      <hr/>
      <Link to='/produto/id' >Descrição do produto</Link>
     
    </div>
  )
}

export default Home;
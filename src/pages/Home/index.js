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
      <Link to='/produto/12345' >Produto123</Link>
     
    </div>
  )
}

export default Home;
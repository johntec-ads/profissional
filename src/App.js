/* import "react,useState,useEffect" */
import React, { useState, useEffect } from 'react';

/* Declarando component principal */
function App () {
  /* Declarando os estdos */
  const [ tarefas, setTarefas ] = useState( [ '1', '2', '3' ] );/* Array and Function */
  const [ input, setInput ] = useState( '' )


  /* Area de rendetização */
  return (
    <div>
      <h1> Cadastro de clientes </h1>

      {/* simular um array e varrer com o map */ }
      <ul>
        {/* Chaves para JS */ }
        { tarefas.map( ( item, index ) => (
          <li key={ index }  > { item } </li>
        ) ) }
      </ul>


      <input type='input' value={ input }
        onChange={ ( e ) => e.target.value }>
      </input>

      <button>Registro</button>

    </div>
  )
}

export default App;
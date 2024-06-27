/* import "react,useState,useEffect" */
import React, { useState, useEffect } from 'react';

/* Declarando component principal */
function App () {
  /* Declarando os estados */
  const [ tarefas, setTarefas ] = useState( [ '1', '2', '3' ] );/* Array and Function */
  const [ input, setInput ] = useState( '' )

  /* Aqui atualizo o estado */
  function registro() {
    setTarefas([...tarefas, input]);/* Operador spread para juntar os valores
    do array e input para adicionar o novo valor */
    setInput('')
  }


  /* Area de rendetização */
  return (
    <div>
      <h1> Cadastro de clientes </h1>

      {/* Varrendo com o map */ }
      <ul>
        {/* Chaves para JS */ }
        {/* Param para os itens e index para a key */}

        { tarefas.map( ( item, index ) => (
          <li key={ index }  > { item } </li>
        ) ) }
        
      </ul>

      <input  type='text' value={input} onChange={ (e) => setInput(e.target.value)} ></input>      

      <button type='button' onClick={registro}  >Registro</button>

    </div>
  )
}

export default App;
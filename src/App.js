/* import "react,useState,useEffect" */
import React, { useState, useEffect } from 'react';

/* Declarando component principal */
function App () {
  /* Declarando os estados */
  const [ tarefas, setTarefas ] = useState(() => {
    const itensSalvos = localStorage.getItem('tarefas');
    return itensSalvos ? JSON.parse( itensSalvos ) : [] ;
  })


  const [ input, setInput ] = useState( '' )

  /* Aqui atualizo o estado */
  function registro() {
    setTarefas([...tarefas, input]);/* Operador spread para juntar os valores
    do array e input para adicionar o novo valor */
    setInput('')
  }

  function apagar(index) {/* Seleciona se o index da novaLista
    for igual ao index do parametro */
    const novaLista = tarefas.filter((n, i) => i !== index );
    /* Atualizo  array tarefas com a novaLista sem o item 
    filtrado */
    setTarefas(novaLista);
    localStorage.setItem('tarefas', JSON.stringify(novaLista));    
  }

  /* Unsado useEffects para ciclos de vida */
  /* localStorage.setItem() */
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

  },[tarefas])//O primeiro param e a função, o segundo é a tarefa

  /* Area de rendetização */
  return (
    <div>
      <h1> Lista de tarefas  </h1>

      {/* Varrendo com o map */ }
      <ul>
        {/* Chaves para JS */ }
        {/* Param para os itens e index para a key */}

        { tarefas.map( ( item, index ) => (
          <li key={ index }  > { item }          
      
          <button className='botao' type='button' onClick={() => apagar (index) } >x</button> </li>
          
        ) ) }        
      </ul>

      <input  type='text' value={input} onChange={ (e) => setInput(e.target.value)} ></input>      

      <button type='button' onClick={registro}  >Registro</button>

    </div>
  )
}

export default App;
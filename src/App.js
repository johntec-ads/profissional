/* importando os Hooks useState e useEffect */
import React, { useState, useEffect } from 'react';

function App () {

  /* Declarar useState */
  const [nutri, setNutri] = useState([]);
  
  /* Declarar useEffect */  
  useEffect(() => {
    function loadApi() {
      let url =  'https://sujeitoprogramador.com/rn-api/?api=posts'/*Declarando API para á variável */
      fetch(url)/* Obtendo API */
      .then((r) => r.json())/* Converte json para objeto JS */
      .then((param) => {
        console.log(param)/* Imprimindo api no console */
        setNutri(param)/* Atualizando o state 'nutri' com a api */

      })

    }

    /* Instanciar a function */
    loadApi();

  }, []);



  return (
   <div>
    

   </div>
  )
}

export default App;

/* 'https://sujeitoprogramador.com/rn-api/?api=posts' */
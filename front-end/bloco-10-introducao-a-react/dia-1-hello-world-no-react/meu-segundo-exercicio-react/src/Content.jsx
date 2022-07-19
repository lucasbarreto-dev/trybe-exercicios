import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];


// A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:

// O conteúdo é: `Nome do Conteúdo`
// Status: `Status do Conteúdo`
// Bloco: `Bloco do Conteúdo`

class Content extends React.Component {
  render() {
    return (
    conteudos.map((element) => (
      <section>
        <li>O conteúdo é: {element.conteudo}</li> 
        <li>Status: {element.status}</li>
        <li>Bloco: {element.bloco}</li>
      </section>
    )))}
}

export default Content;

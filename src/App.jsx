/*COMPONENTE DE FUNCAO

import React from 'react';
//IMporta as dependencas do react

const Equipe = (props) => {
  return(
    <div>
      <Sobre username={props.nome} cargo ={props.cargo} idade = {props.idade} social= {props.linkedin}/>
      <Social li= {props.linkedin}/>
      <hr/>
    </div> //chama a props
  );
}

const Sobre =(props) => {
  return(
    <div>
      <h2>Ola sou o(a)  {props.username}</h2>
      <h3>Cargo: {props.cargo}</h3> 
      <h3>Idade: {props.idade}</h3>

    </div>
  );
}

function App(){
  return(
    <div>
      <h1> Conheça nossa esquipe:</h1>
      <Equipe nome= "Vitoria" cargo="Progrmadora" idade="19"linkedin="https://google.com"/>
      <Equipe nome= "Veronica" cargo="Designer" idade="32" linkedin="https://google.com"/>
    </div>//define o valor da props
  );
}

const Social =(props) =>{
  return(
    <div>
      <a> Instagram </a>
      <a href={props.li}> Linkedin  </a>
      <a> Youtube </a>
    </div>
  )
}

//exporta o arquivo do codigo
export default App; */

//COMPNENTE CLASS

import React, { Component } from "react";

//cria o component
class Equipe extends Component {
  //render renderiza para ver na tela
  render() {
    return (
      <>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
      </>
    );
  }
}

class Sobre extends Component {
  //render renderiza para ver na tela
  render() {
    return (
      <div>
        <h2>Olá sou a {this.props.nome}</h2>
        <h2> Profissão: {this.props.cargo}</h2>
        <h2> Idade: {this.props.idade} Anos</h2>
      </div> //this faz referencia ao componete clas
    );
  }
}
function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe
        nome="Vitoria "
        cargo="Programadora"
        idade="19"
      />

      <h1>Conheça nossa equipe:</h1>
      <Equipe
        nome="Veronica "
        cargo="Designer"
        idade=""
      />
    </div>
    //aqui chama o component
  );
}

export default App;

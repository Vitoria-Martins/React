//COMPNENTE CLASS

import React, { Component } from "react";

//cria o component
class Equipe extends Component {
  //render renderiza para ver na tela
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <Social />
      </div>
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

const Social = (props) => {
  return (
    <div>
      <a>Facebook</a>
      <a>LinkedIn</a>
    </div>
  );
};

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

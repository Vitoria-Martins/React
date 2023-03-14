//importa o React e o Component do módulo "react".

import React, { Component } from "react";

//define uma classe chamada "Membro" que estende a classe Component do React.

class Membro extends Component {
  // define o estado inicial do componente com uma propriedade "nome"
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.entrar = this.entrar.bind(this);
  }

  //Este método é chamado quando o botão "Entrar"
  entrar() {
    this.setState({ nome: "Vitoria" });
  }
  //retorna o que deve ser renderizado na tela.
  render() {
    return (
      <div>
        <h2>Bem-Vindo {this.state.nome}</h2>
        <button onClick={this.entrar}>Entrar como vitoria</button>
        <button onClick={() => this.setState({ nome: "" })}>Sair</button>
      </div>
    );
  }
}

export default Membro;
//exporta componente para ser usado em outros arquivos.

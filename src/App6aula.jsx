//RENDERIZAÇAO CONDICIONAL

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    //"bind()" permite especificar explicitamente o valor de "this" para um método,
    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  sair() {
    this.setState({ status: false });
  }

  entrar() {
    this.setState({ status: true });
  }

  render() {
    return (
      <div>
        {this.state.status ? ( // ? = if
          <div>
            <h2>Bem vindo ao sistema</h2>
            <button onClick={this.entrar}>sair</button>
          </div>
        ) : (
          // : = else
          <div>
            <h2>Olá visitante, faça o login!</h2>
            <button onClick={this.sair}>Entrar no sistema</button>
          </div>
        )}
      </div>
    );
  }
}
export default App;

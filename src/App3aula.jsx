//STATES

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Vitoria",
      contador: 0,
    };
    //para que exergue a funcao e faça ela funcionar
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    //state recebe mais 1
    state.contador += 1;
    //muda o valor do state de 0 para 1
    this.setState(state);
  }
  diminuir() {
    let state = this.state;
    if (state.contador === 0) {
      alert("Opa chegou a zero");
    }
    state.contador -= 1;
    this.setState(state);
  }
  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;

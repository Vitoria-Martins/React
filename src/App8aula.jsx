//MANIPULACAO DE FORMULARIO
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      sexo: "",
    };

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaSexo(e) {
    let valorDigitado = e.target.value;
    this.setState({ sexo: valorDigitado });
  }

  // o parametro recebe um evento (e)
  trocaEmail(e) {
    // extrai o valor atual do elemento que disparou o evento e o armazena na variável

    let valorDigitado = e.target.value;
    //target refere ao elemento q disparou o evento

    this.setState({ email: valorDigitado });
    //setState altera a state email
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.trocaEmail}></input>
        <br />
        <br />
        Senha:
        <input
          type="text"
          name="senha"
          value={this.state.senha}
          onChange={(e) =>
            this.setState({ senha: e.target.value })
          }></input>{" "}
        <br /> <br />
        Sexo:
        <select
          name="sexo"
          value={this.state.sexo}
          onChange={this.trocaSexo}>
          <option value="Feminino"> Feminino</option>
          <option value="Masculino">Masculino</option>
        </select>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;

//PROJETO BISCOITO DA SORTE
import React, { Component } from "react";
import "./imagens/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "A vida trará coisas boas se tiver paciência",
      " Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
      " Não compense na ira o que lhe falta na razão.",
      "Não há que ser forte. Há que ser flexível.",
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img
          src={require("./imagens/biscoito.png")}
          className="img"
        />
        <Botao
          nome="Abrir biscoito"
          acaoBtn={this.quebraBiscoito}
        />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}
class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;

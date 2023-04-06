//PEOJETO CRONOMETRO

/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./cronometro/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "VAI",
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = "PAUSAR";
    }
    this.setState(state);
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = "VAI";
    this.setState(state);
  }

  render() {
    return (
      <>
        <div className="container">
          <img
            src={require("./cronometro/cronometro.png")}
            className="img"
          />
          <a className="timer">{this.state.numero.toFixed(1)}</a>
        </div>
        <div className="areaBtn">
          <a
            className="botao"
            onClick={this.vai}>
            {this.state.botao}
          </a>
          <a
            className="botao"
            onClick={this.limpar}>
            LIMPAR
          </a>
        </div>
      </>
    );
  }
}

export default App;

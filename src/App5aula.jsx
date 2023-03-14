//EVENTOS (sendo criados em outra pasta)

import React, { Component } from "react";
//importa o react da outra pasta
import Membro from "./components/Membro";

class App extends Component {
  render() {
    return (
      <div>
        <Membro nome="Visitante" />
      </div> //chama o componete q foi criado
    );
  }
}

export default App;

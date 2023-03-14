//ciclo de vida do componente

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "00:00:00",
    };
  }

  //e chamada apos o component ser montado
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
      //toLOcal formata a hora em uma string
    }, 1000);
  }

  //ciclo de vida tualizacao ( toda vez que o state sofrer altercao esse componente sera chamado)
  componentDidUpdate() {
    console.log("Atualizouu!");
  }

  /*
  //componente deve atualizar? retorna true ou false
  shouldComponentUpdate() {}*/

  render() {
    return (
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
    );
  }
}

export default App;

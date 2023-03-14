import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
    };
  }

  render() {
    return (
      <div>{this.state.status === 1 && <h1>Bem vindo ao sistema</h1>}</div>
    );
  }
}
export default App;

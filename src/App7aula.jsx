//UTILIZANDO LISTAS
import React, { Component } from "react";
import Feed from "./2component/feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Vitoria", curtidas: 30, comentarios: 3 },
        { id: 2, username: "vero", curtidas: 120, comentarios: 50 },
        { id: 3, username: "Vinicios", curtidas: 19, comentarios: 2 },
        { id: 3, username: "Vitor", curtidas: 1, comentarios: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

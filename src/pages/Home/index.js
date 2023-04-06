import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina Home</h1>
      <span>ok agora esta pegando</span> <br></br>
      <Link to="/sobre">sobre</Link> <br />
      <Link to="/contato">contato</Link>
    </div>
  );
}

export default Home;

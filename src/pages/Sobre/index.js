import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Pagina sobre a empresa</h1>
      <Link to="/">Pagina Home</Link> <br />
      <Link to="/contato">contato</Link>
    </div>
  );
}

export default Sobre;

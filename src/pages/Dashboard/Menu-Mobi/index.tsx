import { NavLink } from "react-router-dom";

import "./styles.css";

export function MenuMobi() {
  function recarregar() {
    window.location.reload();
  }
  return (
    <header className="menu-mobile">
      <ul className="menu-content">
        <li className="menu-itemB">
          <NavLink to="/Dashboard/Dono">Seus Dados</NavLink>
        </li>
        <li className="menu-itemB">
          <NavLink to="/Dashboard/Pets">Dados do seu Pet</NavLink>
        </li>
        <li className="menu-itemB">
          <NavLink to="/Dashboard/Cadastro">Cadastrar Animais</NavLink>
        </li>
        <button className="buttonB">
          <NavLink to="/">Sair</NavLink>
        </button>
      </ul>
    </header>
  );
}

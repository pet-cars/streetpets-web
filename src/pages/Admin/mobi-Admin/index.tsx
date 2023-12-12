import { NavLink } from "react-router-dom";

import "./styles.css";

export function MobiAdmin() {
  function recarregar() {
    window.location.reload();
  }
  return (
    <header className="menu-mobile color">
      <ul className="menu-content">
        <li className="menu-itemB">
          <NavLink to="/Admin">Usuarios Cadastrados</NavLink>
        </li>
        <li className="menu-itemB">
          <NavLink to="/animaisDomesticos">Animais Cadastrados</NavLink>
        </li>
        <li className="menu-itemB">
          <NavLink to="/AnimaisRua">Animais Abandonados</NavLink>
        </li>
        <button className="buttonB">
          <NavLink to="/">Sair</NavLink>
        </button>
      </ul>
    </header>
  );
}

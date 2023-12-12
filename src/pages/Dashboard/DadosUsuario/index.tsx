import { NavLink } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { MenuMobi } from "../Menu-Mobi";

export default function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    setShowMenu(!showMenu);

    if (!showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <>
      <header className="menu-dashboard">
        <nav className="menu-admin usuario">
          <ul className="menu">
            <li className="item">
              <NavLink to="/Dashboard/Dono">Seus Dados</NavLink>
            </li>
            <li className="item">
              <NavLink to="/Dashboard/Pets">Dados do seu pet</NavLink>
            </li>
            <li className="item">
              <NavLink to="/Dashboard/Cadastro">Cadastrar Pets</NavLink>
            </li>
          </ul>
          <button className="mobile-menu" onClick={openMenu}>
            {showMenu ? <X className="x" /> : <Menu />}
          </button>
        </nav>
        <li className="item sair-dashboard">
          <NavLink to="/">Sair</NavLink>
        </li>

        {showMenu && <MenuMobi />}
      </header>

      <main className="cont">
        <h1 className="titulo-D">
          <em>Seus </em>
          <span>Dados</span>
        </h1>

        <div className="painel">
          <form className="form-D">
            <div className="item-p">
              <label className="item">Nome</label>
              <input className="dados" disabled placeholder="Mateus" />
            </div>

            <div className="item-p">
              <label className="item">RG</label>
              <input className="dados" disabled placeholder="000" />
            </div>

            <div className="item-p">
              <label className="item">CPF</label>
              <input className="dados" disabled placeholder="000" />
            </div>

            <div className="item-p">
              <label className="item">Email</label>
              <input className="dados" disabled placeholder="tcc@gmail.com" />
            </div>

            <div className="item-p">
              <label className="item">Cep</label>
              <input className="dados" disabled placeholder="000" />
            </div>

            <div className="item-p">
              <label className="item">Bairro</label>
              <input className="dados" disabled placeholder="la" />
            </div>

            <div className="item-p">
              <label className="item">Endereço</label>
              <input className="dados" disabled placeholder="la" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

import { NavLink } from "react-router-dom";
import "./styles.css";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { MenuMobi } from "../Menu-Mobi";

export default function DashboardPets() {
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
      <div className="todo">
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
              {showMenu ? <X /> : <Menu />}
            </button>
          </nav>
          <li className="item sair-dashboard">
            <NavLink to="/">Sair</NavLink>
          </li>

          {showMenu && <MenuMobi />}
        </header>

        <main className="cont">
          <h1 className="titulo-D">
            <em>Dados </em> dos <span>Pets</span>
          </h1>

          <div className="painel">
            <form className="form-D">
              <div className="item-p">
                <label className="item">Nome</label>
                <input className="dados" disabled placeholder="tcc" />
              </div>

              <div className="item-p">
                <label className="item">Sexo</label>
                <input className="dados" disabled placeholder="Macho" />
              </div>

              <div className="item-p">
                <label className="item">Porte</label>
                <input className="dados" disabled placeholder="Grande" />
              </div>

              <div className="item-p">
                <label className="item">Vacinado Contra Raiva</label>
                <input className="dados" disabled placeholder="Sim" />
              </div>

              <div className="item-p">
                <label className="item">Castrado</label>
                <input className="dados" disabled placeholder="Não" />
              </div>

              <div className="item-p">
                <label className="item">Especie</label>
                <input className="dados" disabled placeholder="Cachorro" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

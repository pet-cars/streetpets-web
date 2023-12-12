import { NavLink } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { MobileMenu } from "../../../components/Header/Mobile-menu";
import { MenuMobi } from "../Menu-Mobi";

export default function Primeira() {
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

        <main>
          <div className="">
            <h1 className="title-cadastro">
              <span>Escolha</span> Uma <em>Opção</em>{" "}
            </h1>
            <div className="form-cadastro">
              <form action="">
                <div className="escolha">
                  <button className="button button1" type="button">
                    <NavLink to="/Pets">Cadastrar um bichinho de rua</NavLink>
                  </button>

                  <button className="button button1" type="button">
                    <NavLink to="/Question1">Cadastrar meu pet</NavLink>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

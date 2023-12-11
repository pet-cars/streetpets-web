import { NavLink } from "react-router-dom";
import "./styles.css";

export default function DashboardPets() {
  return (
    <>
      <div className="todo">
        <header className="men">
          <nav className="m">
            <div className="aling">
              <ul className="menu-i">
                <li className="i">
                  <NavLink to={"/Dashboard/Dono"}>Área do Dono</NavLink>
                </li>

                <li className="i">
                  <NavLink to={"/Dashboard/Pets"}>Área do Pet</NavLink>
                </li>

                <li className="i">
                  <NavLink to={"/Dashboard/Cadastro"}>Cadastrar Pet</NavLink>
                </li>
              </ul>
              <NavLink to={"/"}>
                <button className="sair" type="button">
                  Sair
                </button>
              </NavLink>
            </div>
          </nav>
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

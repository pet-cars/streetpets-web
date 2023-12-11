import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
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
      </div>
    </>
  );
}

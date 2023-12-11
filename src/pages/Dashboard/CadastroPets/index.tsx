import { NavLink } from "react-router-dom";
import "./style.css";

export default function Primeira() {
  // const isRadioSelected = (value: string): boolean => true;

  // const handleRadioClick = (e:React.ChangeEvent<HTMLInputElement>): void => console.log('click')

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
              <button className="sair" type="submit">
                Sair
              </button>
            </div>
          </nav>
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

import "../styles.css";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../../../components/Header/Mobile-menu";
// import axios from "axios";
import { useEffect, useState } from "react";
import axios from "axios";
import { MobiAdmin } from "../mobi-Admin";

export default function Domesticos() {
  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    setShowMenu(!showMenu);

    if (!showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  axios
    .get("http://localhost:3333")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar os dados", error);
    });

  type Dado = {
    id: number;
    nome: string;
    castrado: string;
    vacinadoContraRaiva: string;
    sexo: string;
    porte: string;
    especie: string;
  };

  function MeuComponente() {
    const [dados, setDados] = useState<any>([]);

    useEffect(() => {
      axios
        .get("http://localhost:3333/PetsDomesticos")
        .then((response) => {
          setDados(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados", error);
        });
    }, []);
    console.log(dados);
    let castrado = 0;
    for (let index = 0; index < dados.length; index++) {
      const element = dados[index];
      if (element.castrado === "sim") {
        castrado += 1;
        console.log("é castrado");
      }
      console.log(castrado);
    }

    let vacinado = 0;
    for (let index = 0; index < dados.length; index++) {
      const element = dados[index];
      if (element.vacinadoContraRaiva === "sim") {
        vacinado += 1;
      }
    }

    return (
      <>
        <header>
          <nav className="menu-admin">
            <ul className="menu">
              <li className="menu-item">
                <NavLink to="/Admin">Usuarios Cadastrados</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/animaisDomesticos">Animais Cadastrados</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/AnimaisRua">Animais Abandonados</NavLink>
              </li>
            </ul>
            <button className="mobile-menu" onClick={openMenu}>
              {showMenu ? <X /> : <Menu />}
            </button>
          </nav>

          {showMenu && <MobiAdmin />}
        </header>

        <main>
          <h1 className="titulo-admin">Usuarios Cadastrados</h1>

          <div className="tudo">
            <div className="s-1">
              <div className="estatisticas">
                <h3 className="total">Total de Animais: {dados.length}</h3>
                <h3 className="total">
                  Total de Animais Castrados: {castrado}
                </h3>
                <h3 className="total">
                  Total de Animais Vacinados: {vacinado}
                </h3>
              </div>

              <div className="tabela">
                <table border={1}>
                  <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Castrado</th>
                    <th>Vaciando contra raiva</th>
                    <th>Sexo</th>
                    <th>Porte</th>
                    <th>Especie</th>
                  </tr>

                  {dados.map((dado: Dado) => (
                    <tr key={dado.id}>
                      <td>{dado.id}</td>
                      <td>{dado.nome}</td>
                      <td>{dado.castrado}</td>
                      <td>{dado.vacinadoContraRaiva}</td>
                      <td>{dado.sexo}</td>
                      <td>{dado.porte}</td>
                      <td>{dado.especie}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return <MeuComponente />;
}

import "../styles.css";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../../../components/Header/Mobile-menu";
// import axios from "axios";
import { useEffect, useState } from "react";
import axios from "axios";
import { MobiAdmin } from "../mobi-Admin";

export default function Rua() {
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
    aparencia: string;
    localizacao: string;
    especie: string;
    sexo: string;
    porte: string;
  };

  function MeuComponente() {
    const [dados, setDados] = useState<any>([]);

    useEffect(() => {
      axios
        .get("http://localhost:3333/petsRua")
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
                <NavLink to="/animaisRua">Animais Abandonados</NavLink>
              </li>
            </ul>
            <button className="mobile-menu" onClick={openMenu}>
              {showMenu ? <X /> : <Menu />}
            </button>
          </nav>

          {showMenu && <MobiAdmin />}
        </header>

        <main>
          <h1 className="titulo-admin">Animais Abandonados</h1>

          <div className="tudo">
            <div className="s-1">
              <div className="estatisticas">
                <h3 className="total">Total de Animais: {dados.length}</h3>
              </div>
              <div className="tabela">
                <table border={1}>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Aparencia</th>
                      <th>Localização</th>
                      <th>Especie</th>
                      <th>Sexo</th>
                      <th>Porte</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dados.map((dado: Dado) => (
                      <tr key={dado.id}>
                        <td>{dado.id}</td>
                        <td>{dado.aparencia}</td>
                        <td>{dado.localizacao}</td>
                        <td>{dado.especie}</td>
                        <td>{dado.sexo}</td>
                        <td>{dado.porte}</td>
                      </tr>
                    ))}
                  </tbody>
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

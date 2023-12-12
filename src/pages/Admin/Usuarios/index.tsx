import "../styles.css";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../../../components/Header/Mobile-menu";
// import axios from "axios";
import { useEffect, useState } from "react";
import axios from "axios";
import { MobiAdmin } from "../mobi-Admin";

export default function Admin() {
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
    rg: string;
    cpf: string;
    email: string;
    cep: string;
    bairro: string;
    endereco: string;
  };

  function MeuComponente() {
    const [dados, setDados] = useState<any>([]);

    useEffect(() => {
      axios
        .get("http://localhost:3333/admin")
        .then((response) => {
          setDados(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados", error);
        });
    }, []);
    console.log(dados);
    // ...

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
          <h1 className="titulo-admin">Usuarios Cadastrados</h1>

          <div className="tudo">
            <div className="s-1">
              <h3 className="total">Total de Usuarios: {dados.length}</h3>

              <div className="tabela">
                <table border={1}>
                  <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>RG</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>CEP</th>
                    <th>Bairro</th>
                    <th>Endereço</th>
                  </tr>

                  {dados.map((dado: Dado) => (
                    <tr key={dado.id}>
                      <td>{dado.id}</td>
                      <td>{dado.nome}</td>
                      <td>{dado.rg}</td>
                      <td>{dado.cpf}</td>
                      <td>{dado.email}</td>
                      <td>{dado.cep}</td>
                      <td>{dado.bairro}</td>
                      <td>{dado.endereco}</td>
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

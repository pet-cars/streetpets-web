import React, { useState } from "react";

import "../style.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const valorFormulario = {
  aparencia: String,
  localizacao: String,
  especie: String,
  sexo: String,
  porte: String,
};

// interface ValorFormulario {
//   nome: String;
//   especie: "cachorro" | "gato" | null;
//   castrado: Boolean | null;
//   vacinadoContraRaiva: Boolean | null;
//   sexo: "macho" | "femea" | null;
//   porte: "pequeno" | "medio" | "grande" | null;
// }
// const valoresIniciais: ValorFormulario = {
//   nome: "",
//   especie: null,
//   castrado: null,
//   vacinadoContraRaiva: null,
//   sexo: null,
//   porte: null,
// };
export default function Rua() {
  const [formValores, setFormValores] = useState(valorFormulario);

  //const { sexo, especie } = valorFormulario;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValores((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function cadastroPets(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValores);
    setFormValores(valorFormulario);

    try {
      const registrar = await axios.post(
        "http://localhost:3333/cadastroPetsRua",
        formValores
      );
      console.log(registrar.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="todo">
        <header className="men fixo">
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
        <main>
          <div className="">
            <h1 className="title-cadastro pets">
              <span>Preencha</span> os <em>Dados</em>
            </h1>
            <div className="cadastro-pets">
              <form onSubmit={cadastroPets}>
                <h1 className="text-form"> Aparencia</h1>
                <div className="teste">
                  <input
                    className="form-campo"
                    required
                    name="aparencia"
                    id="aparencia"
                    type="text"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <h1 className="text-form"> Localização</h1>
                <div className="teste">
                  <input
                    className="form-campo"
                    required
                    name="localizacao"
                    id="localizacao"
                    type="text"
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <h1 className="text-form"> Especie </h1>
                <div className="radio-group">
                  <div>
                    <label htmlFor="cachorro" className="container">
                      <input
                        required
                        onChange={(e) => onChange(e)}
                        type="radio"
                        name="especie"
                        value="cachorro"
                        id="cachorro"
                      />
                      CACHORRO
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <label htmlFor="gato" className="container">
                    <input
                      required
                      onChange={(e) => onChange(e)}
                      type="radio"
                      name="especie"
                      value="gato"
                      id="gato"
                    />
                    GATO
                    <span className="checkmark"></span>
                  </label>
                </div>

                <h1 className="text-form"> Seu bichinho é Macho ou Fêmea?</h1>
                <div className="radio-group">
                  <label htmlFor="macho" className="container">
                    <input
                      required
                      onChange={(e) => onChange(e)}
                      type="radio"
                      name="sexo"
                      value="macho"
                      id="macho"
                    />
                    MACHO
                    <span className="checkmark"></span>
                  </label>

                  <label htmlFor="femea" className="container">
                    <input
                      required
                      onChange={(e) => onChange(e)}
                      type="radio"
                      name="sexo"
                      value="femea"
                      id="femea"
                    />
                    FÊMEA
                    <span className="checkmark"></span>
                  </label>
                </div>

                <h1 className="text-form"> Qual o porte do seu bichinho?</h1>
                <div className="radio-group">
                  <label htmlFor="pequeno" className="container">
                    <input
                      required
                      onChange={(e) => onChange(e)}
                      type="radio"
                      name="porte"
                      value="pequeno"
                      id="pequeno"
                    />
                    PEQUENO
                    <span className="checkmark"></span>
                  </label>

                  <label htmlFor="medio" className="container">
                    <input
                      required
                      onChange={(e) => onChange(e)}
                      type="radio"
                      name="porte"
                      value="medio"
                      id="medio"
                    />
                    MÉDIO
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="grande" className="container">
                    <input
                      required
                      onChange={(e) => onChange(e)}
                      type="radio"
                      name="porte"
                      value="grande"
                      id="grande"
                    />
                    GRANDE
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div>
                  <button className="button button1" type="submit">
                    Cadastrar
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

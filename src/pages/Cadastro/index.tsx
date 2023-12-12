import "./styles.css";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useIsLogadoContext } from "../../context/auth/isLogadoContext";

const valorFormulario = {
  nome: String,
  rg: String,
  cpf: String,
  email: String,
  senha: String,
  Csenha: String,
  cep: String,
  bairro: String,
  endereco: String,
  complemento: String,
};

export default function Cadastro() {
  const [formValores, setFormValores] = useState(valorFormulario);
  const navigate = useNavigate()

  const { setIsLogado } = useIsLogadoContext();


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function Form(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValores);
    setFormValores(valorFormulario);

    try {
      const registrar = await axios.post(
        "http://localhost:3333/register",
        formValores
      );
      if (registrar) {
        localStorage.setItem("token", registrar.data.token)
        setIsLogado(true)
        navigate("/Dashboard/Dono")
      }
      console.log(registrar.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <main className="main-cadastro">
        <div className="">
          <h1 className="title-cadastro">
            <span>Prencha</span> o <em>Formulario</em>{" "}
          </h1>
          <form onSubmit={Form} className="form-cadastro">
            <div className="formulario">
              <div className="part-1">
                <div className="teste">
                  <label htmlFor="nome" className="label-cadastro">
                    Nome:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="nome"
                    id="nome"
                    type="text"
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="RG" className="label-cadastro">
                    RG:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="rg"
                    id="rg"
                    type="text"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="CPF" className="label-cadastro">
                    CPF:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="cpf"
                    id="cpf"
                    type="text"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="email" className="label-cadastro">
                    Email:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="email"
                    id="email"
                    type="email"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="senha" className="label-cadastro">
                    Senha:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="senha"
                    id="senha"
                    type="password"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="part-2">
                <div className="teste">
                  <label htmlFor="Csenha" className="label-cadastro">
                    Confirmar Senha:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="Csenha"
                    id="Csenha"
                    type="password"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="CEP" className="label-cadastro">
                    CEP:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="cep"
                    id="cep"
                    type="text"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="bairro" className="label-cadastro">
                    Bairro:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="bairro"
                    id="bairro"
                    type="text"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="endereco" className="label-cadastro">
                    Endereço:
                  </label>
                  <input
                    className="form-campo"
                    required
                    name="endereco"
                    id="endereco"
                    type="text"
                    onChange={onChange}
                  />
                </div>

                <div className="teste">
                  <label htmlFor="complemento" className="label-cadastro">
                    Complemento:
                  </label>
                  <input
                    className="form-campo"
                    name="complemento"
                    id="complemento"
                    type="text"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            <div className="botao">
              <button type="submit" className="enviar-cadastro">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import detalhe from '../../assets/images/footer-dec.png'
import axios from 'axios'
import { useState } from 'react'

const valorFormulario = {
    email: String,
    senha: String,
}
export default function Login() {
    const [formValores, setFormValores] = useState(valorFormulario);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormValores((prevState)=> ({
             ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    function Form(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(formValores);
        setFormValores(valorFormulario);

        try {
            axios.post("http://localhost:3333/login", formValores)
            .then(() => {
                window.location.href = "/Dashboard"
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header/>
            <main className='main-login'>
                <h1 className='titulo-login'><span>Login</span></h1>
                <form className='form-login' onSubmit={Form}>
                    <div className='conteudo'>
                        <div className='email'>
                            <label className='label-login'>Email:</label>
                            <input className='form-campo-login' type='email' placeholder='Digite seu email' required name='email' id='email' onChange={onChange} />
                        </div>

                        <div className='senha'>
                            <label className='label-login'>Senha:</label>
                            <input className='form-campo-login' type='password' placeholder='Digite sua senha' required name='senha' id='senha' onChange={onChange} />
                        </div>

                        <div className='lembre'>
                            <label className='lembre-de-mim' htmlFor="">Lembre de mim</label>
                            <input type='checkbox' />
                        </div>
                        <div className='botao'>
                            <button className='botao-login' type='submit'>Entrar</button>
                        </div>

                        <div className='cadastrar'>
                            <a className='loginC' href="/cadastro">
                                Não possui uma conta? crie uma agora
                            </a>
                        </div>
                    </div>

                    <img className='detalhe' src={detalhe} />
                </form>
            </main>
            <Footer/>
        </>
    )
}
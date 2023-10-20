import './styles.css'
import detalhe from '../../assets/images/footer-dec.png'
import axios from 'axios'
import { useState } from 'react'
export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormValores((prevState) => ({
    //         ...prevState,
    //         [e.target.id]: e.target.value
    //     }))
    // }

    async function Form(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const params = { email, senha }
        try {
            const response = await axios.get("http://localhost:3333/login", { params })
            console.log({response: response.data});
        } catch (err) {
            console.log(' algo deu errado ')
        }
    }

    return (
        <main className='main-login'>
            <h1 className='titulo-login'><span>Login</span></h1>
            <form className='form-login' onSubmit={Form}>
                <div className='conteudo'>
                    <div className='email'>
                        <label className='label-login'>Email:</label>
                        <input className='form-campo-login' value={email} type='email' placeholder='Digite seu email' required name='email' id='email' onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className='senha'>
                        <label className='label-login'>Senha:</label>
                        <input className='form-campo-login' type='password' value={senha} placeholder='Digite sua senha' required name='senha' id='senha' onChange={e => setSenha(e.target.value)} />
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
    )
}
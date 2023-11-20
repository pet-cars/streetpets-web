import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import detalhe from '../../assets/images/footer-dec.png'
import axios from 'axios'
import { useContext, useState } from 'react'
import { Auntenticacao } from '../../context/Aunt'
import { useNavigate } from 'react-router-dom'

type valorFormulario =  {email: string, senha: string,} 

const valoresIniciais: valorFormulario = {
    email: '',
    senha: '',
};
export default function Login() {
    const [formValores, setFormValores] = useState<valorFormulario>(valoresIniciais);
    const [usuarioLogin,setusuarioLogin] = useState('')
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValores((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    const navigate = useNavigate()
    const {autent, setAutent} =  useContext(Auntenticacao)


    function Form(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(formValores);
        setFormValores(valoresIniciais);

        try {
            axios.post("http://localhost:3333/login", formValores).then((response) => {
                if (response.data.message == 'Usuário encontrado') {
                    setAutent(true)
                    navigate ('/Dashboard/Dono')
                    console.log(autent)
                }
                else setusuarioLogin(response.data.message)
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
                            <label className='label-login'>
                                Email: 

                                <div className='resultado'>
                                    {usuarioLogin}
                                </div>
                            
                            </label>
                            <input className='form-campo-login' type='email' placeholder='Digite seu email' required name='email' value={formValores.email} id='email' onChange={onChange} />
                        </div>

                        <div className='senha'>
                        <label className='label-login'>
                                Senha: 

                                <div className='resultado'>
                                    {usuarioLogin}
                                </div>
                            
                            </label>
                            <input className='form-campo-login' type='password' placeholder='Digite sua senha' required name='senha' value={formValores.senha} id='senha' onChange={onChange} />
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
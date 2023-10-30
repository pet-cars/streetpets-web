import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Dashboard(){
    
    return(
        <>
            <div className='todo'>
                <header className='men'>
                    <nav className='m'>
                        <div className='aling'>
                            <ul className='menu-i'>
                                <li className='i'>
                                    <NavLink to={"/Dono"}>Área do Dono</NavLink>
                                </li>

                                <li className='i'>
                                    <NavLink to={"/Pet"}>Área do Pet</NavLink>
                                </li>

                                <li className='i'>
                                    <NavLink to={"/Pet"}>Cadastrar Pet</NavLink>
                                </li>
                                
                            </ul>
                                <button className='sair' type='submit'>Sair</button>

                        </div> 
                    </nav>
                </header>

                <main className='cont'>
                    <h1 className='titulo-D'><em>Seus </em><span>Dados</span></h1>

                    <div className='painel'>
                        <form className='form-D'>
                            <div className='item-p'>
                                <label className='item'>Nome</label>
                                <input className='dados' disabled placeholder='Leandro Zolotaref Santos'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>RG</label>
                                <input className='dados' disabled placeholder='00-000-000-3'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>CPF</label>
                                <input className='dados' disabled placeholder='000-000-000-00'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Email</label>
                                <input className='dados' disabled placeholder='Leandro@gmail.com'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Telefone</label>
                                <input className='dados' disabled placeholder='(11)40028922'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Cep</label>
                                <input className='dados' disabled placeholder='00000-000'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Bairro</label>
                                <input className='dados' disabled placeholder='Vila Bonita'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Rua</label>
                                <input className='dados' disabled placeholder='R.Solemar'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Numero</label>
                                <input className='dados' disabled placeholder='101'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Complemento</label>
                                <input className='dados' disabled placeholder='Bloco 9 Apto 22'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Ponto de Referencia</label>
                                <input className='dados' disabled placeholder='do lado do campo de futebol'/>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
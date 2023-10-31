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
                                    <NavLink to={"/Dashboard/Dono"}>Área do Dono</NavLink>
                                </li>

                                <li className='i'>
                                    <NavLink to={"/Dashboard/Pet"}>Área do Pet</NavLink>
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
                    <h1 className='titulo-D'><em>Dados </em> dos <span>Pets</span></h1>

                    <div className='painel'>
                        <form className='form-D'>
                            <div className='item-p'>
                                <label className='item'>Espécie</label>
                                <input className='dados' disabled placeholder='Cachorro'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Sexo</label>
                                <input className='dados' disabled placeholder='Macho'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Porte</label>
                                <input className='dados' disabled placeholder='Grande'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Vacinado Contra Raiva</label>
                                <input className='dados' disabled placeholder='Sim'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Castrado</label>
                                <input className='dados' disabled placeholder='Não'/>
                            </div>

                            <div className='item-p'>
                                <label className='item'>Idade Estimativa</label>
                                <input className='dados' disabled placeholder='5 anos'/>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
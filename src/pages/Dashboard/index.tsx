import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Dashboard(){
    
    return(
        <>
            <header className='men'>
                <nav className='m'>
                    <ul className='menu-i'>
                        <li className='i'>
                            <NavLink to={"/Dono"}>Área do Dono</NavLink>
                        </li>

                        <li className='i'>
                            <NavLink to={"/Pet"}>Área do Pet</NavLink>
                        </li>
                        
                        <button className='sair' type='submit'>Sair</button>
                    </ul>
                    
                </nav>
            </header>
        </>
    )
}
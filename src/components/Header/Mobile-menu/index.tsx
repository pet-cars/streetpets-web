import { NavLink } from 'react-router-dom'

import './styles.css'

export function MobileMenu(){

    function recarregar() {
        window.location.reload();
    }
    return(
        <header className='menu-mobile'>
            <ul className="menu-content">
                    <li onClick={recarregar} className="menu-itemB">
                        <NavLink to="/">
                            Início
                        </NavLink>
                    </li>
                    <li onClick={recarregar} className="menu-itemB">
                        <NavLink to="/Sobre">
                            Sobre
                        </NavLink>
                    </li>
                    <li onClick={recarregar}  className="menu-itemB">
                        <NavLink to="/contato">
                            Contato
                        </NavLink>
                    </li>
                    <li onClick={recarregar}  className="menu-itemB">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <button onClick={recarregar}  className="buttonB">
                        <NavLink to="/cadastro">Cadastre-se</NavLink>
                    </button>
            </ul>
        </header>
    )
}
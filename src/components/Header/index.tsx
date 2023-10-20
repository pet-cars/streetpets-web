import "./styles.css"
import logo from "../../assets/images/logo.svg"
import {Menu, X} from 'lucide-react'

import { NavLink } from "react-router-dom"
import { useState } from "react"
import { MobileMenu } from "./Mobile-menu"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    function openMenu(){
        setShowMenu(!showMenu)

        if (!showMenu){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }
    }

    return (
        <header>
            <nav>
                <img className="logo" src={logo}/>
                <ul className="menu">
                    <li className="menu-item">
                        <NavLink to="/">
                            Início
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/Sobre">
                            Sobre
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/contato">
                            Contato
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <button className="button">
                        <NavLink to="/cadastro">Cadastre-se</NavLink>
                    </button>
                </ul>
                <button className="mobile-menu" onClick={openMenu}>
                    {showMenu ? (
                        <X/>
                    ): (
                        <Menu/>
                    )}
                </button>
            </nav>

            {showMenu && (
                <MobileMenu/>
            )}
        </header>
    )
}
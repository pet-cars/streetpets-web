import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Sobre" element={<Sobre/>} />
            <Route path="/Contato" element={<Contato/>} />
        </Routes>
    )
}
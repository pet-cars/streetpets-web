import { Routes, Route, } from "react-router-dom"

import Home from '../pages/Home'
// import {Auntenticacao} from '../context/Aunt'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"
import Dashboard from "../pages/Dashboard/DadosUsuario"
import DashboardPets from "../pages/Dashboard/DadosPet"
import Primeira from "../pages/Dashboard/CadastroPets"
import Admin from "../pages/Admin"
// import DadosPet from "../pages/Dashboard/DadosPet"
import Pets from "../pages/Pets/Pergunta1"
import OptionTwo from "../pages/Pets/Pergunta2"
import OptionThree from "../pages/Pets/Pergunta3"
import OptionFour from "../pages/Pets/Pergunta4"
import OptionFive from "../pages/Pets/Pergunta5"
import Question1 from "../pages/Petsdomesticos/Questao1"
import Question2 from "../pages/Petsdomesticos/Questao2"
import Question3 from "../pages/Petsdomesticos/Questao3"
import Question4 from "../pages/Petsdomesticos/Questao4"
// import DashboardPets from "../pages/Dashboard/DadosPet"


// import { RequireAuth } from "../context/auth/RequireAuth"

// const RotasPrivadas = () => {
//     const {autent} = useContext(Auntenticacao)
//     if (!autent) return <Navigate to='/' replace/>
//     return <Outlet/>
// }
export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Sobre" element={<Sobre/>} />
            <Route path="/Contato" element={<Contato/>} />
            <Route path="/Dashboard/Dono" element={<Dashboard/>} />
            <Route path="/Dashboard/Pets" element={<DashboardPets/>} />
            <Route path="/Dashboard/Cadastro" element={<Primeira/>} />
            <Route path="/Pets" element={<Pets/>}/>
            <Route path="/OptionTwo" element={<OptionTwo/>}/>
            <Route path="/OptionThree" element={<OptionThree/>}/>
            <Route path="/OptionFour" element={<OptionFour/>}/>
            <Route path="/OptionFive" element={<OptionFive/>}/>
            <Route path="/Question1" element={<Question1/>}/>
            <Route path="/Question2" element={<Question2/>}/>
            <Route path="/Question3" element={<Question3/>}/>
            <Route path="/Question4" element={<Question4/>}/>

            <Route path="/Admin" element={<Admin/>} />
        </Routes>
    )
}
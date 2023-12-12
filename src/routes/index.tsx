import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
// import {Auntenticacao} from '../context/Aunt'
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Dashboard from "../pages/Dashboard/DadosUsuario";
import DashboardPets from "../pages/Dashboard/DadosPet";
import AnimaisRua from "../pages/Admin/AnimaisRua";
import Primeira from "../pages/Dashboard/CadastroPets";
import Admin from "../pages/Admin/Usuarios";
import Domesticos from "../pages/Admin/AnimaisCadastrados";
import Rua from "../pages/Pets/Pergunta1";
import Question1 from "../pages/Petsdomesticos/Questao1";
import { useIsLogadoContext } from "../context/auth/isLogadoContext";

// import { RequireAuth } from "../context/auth/RequireAuth"

// const RotasPrivadas = () => {
//     const {autent} = useContext(Auntenticacao)
//     if (!autent) return <Navigate to='/' replace/>
//     return <Outlet/>
// }
export default function AllRoutes() {
  const { isLogado } = useIsLogadoContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Contato" element={<Contato />} />
      {isLogado && (
        <>
          <Route path="/Dashboard/Dono" element={<Dashboard />} />
          <Route path="/Dashboard/Pets" element={<DashboardPets />} />
          <Route path="/Dashboard/Cadastro" element={<Primeira />} />
          <Route path="/Pets" element={<Rua />} />
          <Route path="/Question1" element={<Question1 />} />
        </>
      )}
      <Route path="/Admin" element={<Admin />} />
      <Route path="/animaisDomesticos" element={<Domesticos />} />
      <Route path="/animaisRua" element={<AnimaisRua />} />
    </Routes>
  );
}

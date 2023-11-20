import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {children ?: ReactNode}

type auntContext = {
    autent:boolean;
    setAutent: (newState:boolean) => void
}

const valoresIniciais = {autent: true, setAutent:() => {}}
const Auntenticacao = createContext<auntContext>(valoresIniciais)
const Aunt = ({children}:Props) => {
    const [autent, setAutent] = useState(valoresIniciais.autent)
    return (
        <Auntenticacao.Provider value={{autent, setAutent}} >{children}</Auntenticacao.Provider>
    )
}
export {Auntenticacao, Aunt}
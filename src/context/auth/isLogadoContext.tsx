import {
    Dispatch,
    createContext,
    useState,
    useContext,
    SetStateAction
} from "react";

interface ProviderProps {
    children: React.ReactNode;
}

interface IsLogadoState {
    isLogado: boolean,
    setIsLogado: Dispatch<SetStateAction<boolean>>;
}

export const IsLogadoContext = createContext<IsLogadoState>({
    isLogado: false,
    setIsLogado: () => null,
});

export const IsLogadoProvider = ({
    children
}: ProviderProps) => {
    const [isLogado, setIsLogado] = useState(false);

    return (
        <IsLogadoContext.Provider
            value={{
                isLogado: isLogado,
                setIsLogado: setIsLogado
            }}
        >
            {children}
        </IsLogadoContext.Provider>
    )
}

export const useIsLogadoContext = () => {
    const context = useContext(IsLogadoContext);
    const { isLogado, setIsLogado } = context;
    return { isLogado, setIsLogado };
}
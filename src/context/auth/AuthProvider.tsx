import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Usuario } from "../../types/Usuario";
import { useAPI } from "../hook/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const api = useAPI();

  useEffect(() => {
    const validacaoToken = async () => {
      const tokenStorege = localStorage.getItem("token");
      if (tokenStorege) {
        const data = await api.validacaoToken(tokenStorege);
        if (data.usuario) {
          setUsuario(data.usuario);
        }
      }
    };
  }, []);

  const signin = async (formValores: object) => {
    console.log(formValores);
    const data = await api.signin(formValores);
    console.log(data);

    if (data.usuario && data.token) {
      setUsuario(data.usuario);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    setUsuario(null);
    setToken("");
    localStorage.removeItem("token");
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ usuario, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

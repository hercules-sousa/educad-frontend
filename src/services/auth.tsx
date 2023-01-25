import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthContextProps {
  token: string | null;
  signIn: (
    username: string,
    passoword: string,
    callback?: VoidFunction
  ) => void;
  signOut: (callback?: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextProps>(null!);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const signIn = (
    username: string,
    password: string,
    callback?: VoidFunction
  ) => {
    // Fazer a requisição com o axios e setar o token
    setToken("token");
    if (callback) {
      callback();
    }
  };

  const signOut = (callback?: VoidFunction) => {
    setToken(null);
    if (callback) {
      callback();
    }
  };

  const value = { token, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export { AuthContextProvider, RequireAuth };

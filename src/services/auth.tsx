import { createContext, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { api } from "./api";

interface AuthContextProps {
  signIn: (
    username: string,
    passoword: string,
    callback?: VoidFunction
  ) => void;
  signOut: (callback?: VoidFunction) => void;
  getToken: () => string | null;
}

let AuthContext = createContext<AuthContextProps>(null!);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const signIn = async (
    username: string,
    password: string,
    callback?: VoidFunction
  ) => {
    const response = await api.post("/api/v1/auth", {
      login: username,
      password: password,
    });

    localStorage.setItem("token", response.data.token);

    if (callback) {
      callback();
    }
  };

  const signOut = (callback?: VoidFunction) => {
    localStorage.setItem("token", null!);
    if (callback) {
      callback();
    }
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const value = { signIn, signOut, getToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.getToken()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const RequireNoAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.getToken()) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
};

export { AuthContextProvider, RequireAuth, RequireNoAuth, useAuth };

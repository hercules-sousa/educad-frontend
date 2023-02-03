import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DisciplinasPage from "./pages/DisciplinasPage";

import { AuthContextProvider, RequireAuth, RequireNoAuth } from "./services/auth";

function Router() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireNoAuth>
              <LoginPage />
            </RequireNoAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/disciplinas"
          element={
            <RequireAuth>
              <DisciplinasPage />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default Router;

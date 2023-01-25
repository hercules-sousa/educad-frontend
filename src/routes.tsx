import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { AuthContextProvider, RequireAuth } from "./services/auth";

function Router() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default Router;

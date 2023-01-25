import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hero from "./pages/HeroPage";
import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

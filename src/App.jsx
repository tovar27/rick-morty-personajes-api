import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraNavegacion from "./components/Navbar";
import PaginaBienvenida from "./pages/LandingPage";
import PaginaInicio from "./pages/HomePage";
import PaginaFiltro from "./pages/FilterPage";
import PaginaError from "./pages/ErrorPage";
import PaginaDetallePersonaje from "./pages/CharacterDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBienvenida />} />
        <Route path="/home" element={<><BarraNavegacion /><PaginaInicio /></>} />
        <Route path="/filter" element={<><BarraNavegacion /><PaginaFiltro /></>} />
        <Route path="/character/:id" element={<><BarraNavegacion /><PaginaDetallePersonaje /></>} />
        <Route path="*" element={<PaginaError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
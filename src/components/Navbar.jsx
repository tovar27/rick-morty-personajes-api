import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function BarraNavegacion() {
  const [busqueda, setBusqueda] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navegar = useNavigate();

  const buscarPersonaje = () => {
    if (busqueda.trim()) {
      navegar(`/home?search=${encodeURIComponent(busqueda)}`);
      setMenuAbierto(false);
    }
  };

  const manejarTecla = (e) => {
    if (e.key === "Enter") buscarPersonaje();
  };

  return (
    <nav className="navbar px-4 py-3">
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="navbar-brand">Rick & Morty</span>

        <button
          className="btn-hamburguesa d-lg-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        <div className="d-none d-lg-flex align-items-center gap-3">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/home" className="nav-link">Todos los personajes</Link>
          <Link to="/filter" className="nav-link">Filtrar por especie</Link>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Buscar personaje..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={manejarTecla}
              className="form-control search-input"
              style={{ width: "200px" }}
            />
            <button onClick={buscarPersonaje} className="btn-search">
              Buscar
            </button>
          </div>
        </div>
      </div>

      {menuAbierto && (
        <div className="menu-movil d-lg-none">
          <Link to="/" className="nav-link-movil" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          <Link to="/home" className="nav-link-movil" onClick={() => setMenuAbierto(false)}>Todos los personajes</Link>
          <Link to="/filter" className="nav-link-movil" onClick={() => setMenuAbierto(false)}>Filtrar por especie</Link>
          <div className="d-flex mt-2">
            <input
              type="text"
              placeholder="Buscar personaje..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={manejarTecla}
              className="form-control search-input"
            />
            <button onClick={buscarPersonaje} className="btn-search">
              Buscar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default BarraNavegacion;
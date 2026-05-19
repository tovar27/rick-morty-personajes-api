import { useNavigate } from "react-router-dom";
import { GiAlienStare } from "react-icons/gi";

function PaginaBienvenida() {
  const navegar = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-overlay"></div>

      <div className="landing-content">
        <GiAlienStare className="landing-icono" />

        <h1 className="landing-title">Rick & Morty</h1>
        <p className="landing-subtitle">
          Explora el multiverso y descubre todos los personajes de la serie
        </p>

        <div className="d-flex gap-3 mt-2">
          <button className="btn-enter" onClick={() => navegar("/home")}>
            Explorar personajes
          </button>
          <button className="btn-enter-secondary" onClick={() => navegar("/filter")}>
            Filtrar por especie
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginaBienvenida;
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-overlay"></div>

      <div className="landing-content">
        <div className="portal-wrapper">
          <div className="portal-ring ring-1"></div>
          <div className="portal-ring ring-2"></div>
          <div className="portal-ring ring-3"></div>
          <div className="portal-core">👽</div>
        </div>

        <h1 className="landing-title">Rick & Morty</h1>
        <p className="landing-subtitle">
          Explora el multiverso y descubre todos los personajes de la serie
        </p>

        <div className="d-flex gap-3 mt-2">
          <button className="btn-enter" onClick={() => navigate("/home")}>
            Explorar personajes
          </button>
          <button className="btn-enter-secondary" onClick={() => navigate("/filter")}>
            Mostrar por especie
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
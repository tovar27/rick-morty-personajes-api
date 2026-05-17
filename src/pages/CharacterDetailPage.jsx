import { useParams, useNavigate } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";

function PaginaDetallePersonaje() {
  const { id } = useParams();
  const { personajes, cargando, error } = useCharacters();
  const navegar = useNavigate();

  const personaje = personajes.find((p) => p.id === parseInt(id));

  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <span className="ms-3">Cargando personaje...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4">
        Error: {error}
      </div>
    );
  }

  if (!personaje) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: "80vh" }}>
        <h2 style={{ color: "var(--accent-purple)" }}>Personaje no encontrado</h2>
        <button className="btn-paginar mt-3" onClick={() => navegar("/home")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button className="btn-paginar mb-4" onClick={() => navegar(-1)}>
        ← Volver
      </button>
      <div className="row align-items-center g-4">
        <div className="col-md-4 text-center">
          <img
            src={personaje.image}
            alt={personaje.name}
            className="img-fluid rounded"
            style={{
              border: "3px solid var(--accent-cyan)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)",
              width: "100%",
              maxWidth: "320px"
            }}
          />
        </div>
        <div className="col-md-8">
          <h1 className="page-title">{personaje.name}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ color: "var(--accent-purple)", fontWeight: "bold" }}>Especie</td>
                <td style={{ color: "var(--accent-cyan)" }}>{personaje.species}</td>
              </tr>
              <tr>
                <td style={{ color: "var(--accent-purple)", fontWeight: "bold" }}>Estado</td>
                <td style={{ color: "var(--accent-cyan)" }}>{personaje.status}</td>
              </tr>
              <tr>
                <td style={{ color: "var(--accent-purple)", fontWeight: "bold" }}>Género</td>
                <td style={{ color: "var(--accent-cyan)" }}>{personaje.gender}</td>
              </tr>
              <tr>
                <td style={{ color: "var(--accent-purple)", fontWeight: "bold" }}>Origen</td>
                <td style={{ color: "var(--accent-cyan)" }}>{personaje.origin.name}</td>
              </tr>
              <tr>
                <td style={{ color: "var(--accent-purple)", fontWeight: "bold" }}>Ubicación</td>
                <td style={{ color: "var(--accent-cyan)" }}>{personaje.location.name}</td>
              </tr>
              <tr>
                <td style={{ color: "var(--accent-purple)", fontWeight: "bold" }}>Episodios</td>
                <td style={{ color: "var(--accent-cyan)" }}>{personaje.episode.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaginaDetallePersonaje;
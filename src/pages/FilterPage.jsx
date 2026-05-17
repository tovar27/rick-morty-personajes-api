import { useState } from "react";
import useCharacters from "../hooks/useCharacters";
import GridPersonajes from "../components/CharacterGrid";

const ESPECIES = ["Human", "Alien", "Robot", "Mythological Creature", "Animal", "unknown"];
const ELEMENTOS_POR_PAGINA = 20;

function PaginaFiltro() {
  const { personajes, cargando, error } = useCharacters();
  const [especieSeleccionada, setEspecieSeleccionada] = useState("Human");
  const [paginaActual, setPaginaActual] = useState(1);

  const personajesFiltrados = personajes.filter(
    (personaje) => personaje.species === especieSeleccionada
  );

  const totalPaginas = Math.ceil(personajesFiltrados.length / ELEMENTOS_POR_PAGINA);
  const inicio = (paginaActual - 1) * ELEMENTOS_POR_PAGINA;
  const personajesPagina = personajesFiltrados.slice(inicio, inicio + ELEMENTOS_POR_PAGINA);

  const seleccionarEspecie = (especie) => {
    setEspecieSeleccionada(especie);
    setPaginaActual(1);
  };

  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <span className="ms-3">Cargando personajes...</span>
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

  return (
    <div className="container-fluid px-4 py-4">
      <h2 className="page-title">Filtrar por especie</h2>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {ESPECIES.map((especie) => (
          <button
            key={especie}
            className={`btn-filter ${especieSeleccionada === especie ? "active" : ""}`}
            onClick={() => seleccionarEspecie(especie)}
          >
            {especie}
          </button>
        ))}
      </div>

      {personajesFiltrados.length === 0 ? (
        <p style={{ color: "var(--text-muted)" }}>No hay personajes de esta especie.</p>
      ) : (
        <>
          <GridPersonajes personajes={personajesPagina} />
          <div className="d-flex justify-content-center align-items-center gap-3 mt-4 mb-2">
            <button
              className="btn-paginar"
              onClick={() => setPaginaActual((p) => p - 1)}
              disabled={paginaActual === 1}
            >
              ← Anterior
            </button>
            <span className="pagina-info">
              Página {paginaActual} de {totalPaginas}
            </span>
            <button
              className="btn-paginar"
              onClick={() => setPaginaActual((p) => p + 1)}
              disabled={paginaActual === totalPaginas}
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PaginaFiltro;
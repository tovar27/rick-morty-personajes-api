import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";
import GridPersonajes from "../components/CharacterGrid";

const ELEMENTOS_POR_PAGINA = 20;

function PaginaInicio() {
  const { personajes, cargando, error } = useCharacters();
  const [parametrosBusqueda] = useSearchParams();
  const [paginaActual, setPaginaActual] = useState(1);
  const consulta = parametrosBusqueda.get("search") || "";

  useEffect(() => {
    setPaginaActual(1);
  }, [consulta]);

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(consulta.toLowerCase())
  );

  const totalPaginas = Math.ceil(personajesFiltrados.length / ELEMENTOS_POR_PAGINA);
  const inicio = (paginaActual - 1) * ELEMENTOS_POR_PAGINA;
  const personajesPagina = personajesFiltrados.slice(inicio, inicio + ELEMENTOS_POR_PAGINA);

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
      <h2 className="page-title">
        {consulta ? `Resultados para: "${consulta}"` : "Todos los personajes"}
      </h2>

      {personajesFiltrados.length === 0 ? (
        <p style={{ color: "var(--text-muted)" }}>No se encontró ningún personaje.</p>
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

export default PaginaInicio;
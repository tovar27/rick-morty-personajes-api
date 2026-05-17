import { useNavigate } from "react-router-dom";

function TarjetaPersonaje({ character }) {
  const navegar = useNavigate();

  const claseEstado = {
    Alive: "status-alive",
    Dead: "status-dead",
    unknown: "status-unknown",
  };

  return (
    <div
      className="card h-100"
      style={{ cursor: "pointer" }}
      onClick={() => navegar(`/character/${character.id}`)}
    >
      <img
        src={character.image}
        alt={character.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text mb-1">
          <span className="label">Especie: </span>{character.species}
        </p>
        <p className="card-text mb-1">
          <span className={`status-dot ${claseEstado[character.status] || "status-unknown"}`}></span>
          <span className="label">Estado: </span>{character.status}
        </p>
        <p className="card-text mb-1">
          <span className="label">Género: </span>{character.gender}
        </p>
      </div>
    </div>
  );
}

export default TarjetaPersonaje;
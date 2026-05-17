import TarjetaPersonaje from "./CharacterCard";

function GridPersonajes({ personajes }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {personajes.map((personaje) => (
        <div className="col" key={personaje.id}>
          <TarjetaPersonaje character={personaje} />
        </div>
      ))}
    </div>
  );
}

export default GridPersonajes;
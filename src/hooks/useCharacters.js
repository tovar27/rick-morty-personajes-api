import { useState, useEffect } from "react";
import { getAllCharacters } from "../services/rickAndMortyService";

function useCharacters() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllCharacters()
      .then((datos) => {
        setPersonajes(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  return { personajes, cargando, error };
}

export default useCharacters;
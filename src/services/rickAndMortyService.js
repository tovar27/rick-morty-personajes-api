const URL_BASE = "https://rickandmortyapi.com/api/character";

export async function getAllCharacters() {
  let personajes = [];
  let url = URL_BASE;

  try {
    while (url) {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error("Error al consultar la API");
      }

      const datos = await respuesta.json();
      personajes = [...personajes, ...datos.results];
      url = datos.info.next;
    }

    return personajes;
  } catch (error) {
    throw new Error(error.message);
  }
}
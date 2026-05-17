# Rick & Morty App

Aplicación web desarrollada en React que consume la API pública de Rick and Morty para visualizar y explorar los personajes de la serie.

# Tecnologías usadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) — framework y herramienta de desarrollo
- [React Router DOM](https://reactrouter.com/) — navegación entre vistas
- [Bootstrap 5](https://getbootstrap.com/) — diseño responsivo
- [Rick and Morty API](https://rickandmortyapi.com/) — fuente de datos
- CSS personalizado — paleta espacial propia

# Funcionalidades

- Visualización de todos los personajes en tarjetas
- Filtrado de personajes por especie
- Buscador de personajes por nombre
- Vista detalle de cada personaje
- Paginación
- Diseño responsivo para móvil, tablet y escritorio
- Página de error 404
- Página de bienvenida animada

# Instalación y ejecución

1. Clona el repositorio:
git clone https://github.com/tovar27/rick-morty-personajes-api.git


2. Entra a la carpeta del proyecto:
cd rick-and-morty-app

3. Instala las dependencias:
npm install

4. Corre el proyecto:
npm run dev

5. Abre el navegador en:
http://localhost:5173

# Api utilizada

- [Rick and Morty API](https://rickandmortyapi.com) — endpoint: `https://rickandmortyapi.com/api/character`


# Demo en vivo

[https://rick-morty-personajes-api.vercel.app](https://rick-morty-personajes-api.vercel.app)


# Estructura del proyecto
src/
├── components/
│   ├── Navbar.jsx          # menu de navegación
│   ├── CharacterCard.jsx   # tarjeta individual de personaje
│   └── CharacterGrid.jsx   # tarjetas
├── pages/
│   ├── LandingPage.jsx     # pagina de bienvenida
│   ├── HomePage.jsx        # vista de todos los personajes
│   ├── FilterPage.jsx      # vista al filtrar
│   ├── CharacterDetailPage.jsx # vista detalle personaje
│   └── ErrorPage.jsx       # error 404
├── hooks/
│   └── useCharacters.js    # hook para consumir la API
├── services/
│   └── rickAndMortyService.js # logica de consumo de la API
├── App.jsx                 # configuración de rutas
├── main.jsx                # punto de entrada
└── index.css               # estilos globales
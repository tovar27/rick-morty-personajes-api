import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: "80vh" }}>
      <h1 className="error-code">404</h1>
      <h2 className="mb-3" style={{ color: "var(--text-soft)" }}>¡Página no encontrada!</h2>
      <p className="mb-4" style={{ color: "var(--accent-purple)" }}>
        Parece que te perdiste en el multiverso, o algo anda mal eh... 
      </p>
      <Link to="/" className="btn" style={{ backgroundColor: "var(--accent-cyan)", color: "var(--bg-primary)", fontWeight: "bold" }}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default ErrorPage;
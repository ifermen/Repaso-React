import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      <h1>Bienvenido</h1>
      <Link to="/characters">
        <button className="btn btn-dark">Ver Personajes</button>
      </Link>
    </>

  )
}
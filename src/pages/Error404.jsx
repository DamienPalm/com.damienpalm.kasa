import { Link } from "react-router";
import "../styles/Error404.css";

function Error404() {
  return (
    <section className="main__error-section">
      <h1 className="main__error-section__title">404</h1>
      <p className="main__error-section__text">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className="main__error-section__link">
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  );
}

export default Error404;

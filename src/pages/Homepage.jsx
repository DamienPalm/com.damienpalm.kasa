import Banner from "../components/Banner";
import BannerBackground from "../assets/img/homepage_banner.png";
import AccommodationsList from "../services/api/logements.json";
import { Link } from "react-router";
import "../styles/Card.css";

function Card({ title, cover }) {
  return (
    <div className="main__accommodations-section__card">
      <img
        className="main__accommodations-section__card__image"
        src={cover}
        alt={title}
      />
      <h2 className="main__accommodations-section__card__title">{title}</h2>
    </div>
  );
}

function Homepage() {
  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        picture={BannerBackground}
        alt="photo d'un cap avec une petite plage et une étendue d'arbre"
      />
      <section className="main__accommodations-section">
        {AccommodationsList.map((accommodation) => (
          <Link
            key={accommodation.id}
            to={`/accommodation/${accommodation.id}`}
            className="main__accommodations-section__card-link"
          >
            <Card title={accommodation.title} cover={accommodation.cover} />
          </Link>
        ))}
      </section>
    </>
  );
}

export default Homepage;

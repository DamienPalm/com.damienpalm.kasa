import { useParams } from "react-router";
import Gallery from "../components/Gallery";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Error404 from "./Error404";
import { useLogementById } from "../hooks/useLogements";

function Accommodation() {
  const { AccommodationId } = useParams();
  const Accommodation = useLogementById(AccommodationId);

  if (!Accommodation) {
    return <Error404 />;
  }

  return (
    <>
      <Gallery pictures={Accommodation.pictures} />
      <section className="main__info-section">
        <div className="main__title-location">
          <h1 className="main__title">{Accommodation.title}</h1>
          <p className="main__location">{Accommodation.location}</p>
          <ul className="main__list">
            {Accommodation.tags.map((tag, index) => (
              <li className="main__list__item" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="main__rating-owner">
          <Rating rating={Accommodation.rating} />
          <div className="main__owner-info">
            <p className="main__owner-info__identity">
              {Accommodation.host.name}
            </p>
            <img
              src={Accommodation.host.picture}
              alt={Accommodation.host.name}
              className="main__owner-info__profile-picture"
            />
          </div>
        </div>
      </section>
      <section className="main__collapse-section accommodation-page">
        <Collapse title="Description" text={Accommodation.description} />
        <Collapse
          title="Equipements"
          text={Accommodation.equipments.map((equipment, index) => (
            <li className="main__collapse__collapse-content__list" key={index}>
              {equipment}
            </li>
          ))}
        />
      </section>
    </>
  );
}

export default Accommodation;

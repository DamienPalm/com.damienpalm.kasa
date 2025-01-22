import activeStar from "../assets/img/red-star-solid.svg";
import emptyStar from "../assets/img/grey-star-solid.svg";
import "../styles/Rating.css";

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="main__rating">
      {range.map((rangeElement) =>
        rating >= rangeElement ? (
          <img
            className="main__rating__star"
            src={activeStar}
            alt="étoile selectinné"
            key={rangeElement.toString()}
          />
        ) : (
          <img
            className="main__rating__star"
            src={emptyStar}
            alt="étoile vide"
            key={rangeElement.toString()}
          />
        )
      )}
    </div>
  );
}
export default Rating;

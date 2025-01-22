import { useState } from "react";
import previousChevron from "../assets/img/chevron-left-solid.svg";
import nextChevron from "../assets/img/chevron-right-solid.svg";
import "../styles/Gallery.css";

function Gallery({ pictures }) {
  const length = pictures.length;
  const [curentPicture, setCurentPicture] = useState(0);

  function handlePrev() {
    setCurentPicture((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurentPicture((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="main__carousel">
      <img
        onClick={handlePrev}
        src={previousChevron}
        alt="chevron pointant vers la gauche"
        role="button"
        className="main__carousel__prev-button"
      />
      <img
        src={pictures[curentPicture]}
        alt={`Slide ${curentPicture + 1}`}
        className="main__carousel__image"
      />
      <img
        onClick={handleNext}
        src={nextChevron}
        alt="chevron pointant vers la droite"
        role="button"
        className="main__carousel__next-button"
      />
    </div>
  );
}

export default Gallery;

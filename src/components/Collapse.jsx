import { useState } from "react";
import chevron from "../assets/img/chevron-up-solid.svg";
import "../styles/Collapse.css";

function Collapse({ title, text }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <div className="main__collapse">
        <div
          className="main__collapse__title-content"
          onClick={toggle}
          role="button"
          tabIndex={0}
        >
          <h2 className="main__collapse__title-content__title">{title}</h2>
          <img
            className={
              !open
                ? "main__collapse__title-content__icon"
                : "main__collapse__title-content__icon open"
            }
            src={chevron}
            alt="svg représentant un chevron pointé vers le haut"
          />
        </div>
        {open && (
          <p
            className={`main__collapse__collapse-content ${
              open ? "open" : "closed"
            }`}
          >
            {text}
          </p>
        )}
      </div>
    </>
  );
}

export default Collapse;

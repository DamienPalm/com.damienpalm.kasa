import "../styles/Banner.css";

function Banner({ title, alt, picture }) {
  return (
    <div className="main__banner">
      <img className="main__banner__background" src={picture} alt={alt} />
      <h1 className="main__banner__title">{title}</h1>
    </div>
  );
}

export default Banner;

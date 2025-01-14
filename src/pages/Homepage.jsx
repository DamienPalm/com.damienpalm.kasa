import Banner from "../components/Banner";
import BannerBackground from "../assets/img/homepage_banner.png";

function Homepage() {
  return (
    <Banner
      title="Chez vous, partout et ailleurs"
      picture={BannerBackground}
      alt="photo d'un cap avec une petite plage et une étendue d'arbre"
    />
  );
}

export default Homepage;

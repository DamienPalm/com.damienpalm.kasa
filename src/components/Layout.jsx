import { NavLink, Outlet } from "react-router";
import logo from "../assets/img/kasa_logo.png";
import logoFooter from "../assets/img/kasa_footer.png";
import "../styles/Navbar.css";
import "../styles/Footer.css";

function Layout() {
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <NavLink to="/" end>
            <img
              className="header__navbar__logo"
              src={logo}
              alt="logo kasa navbar"
            />
          </NavLink>
          <div className="header__navbar__items">
            <NavLink to="/" end className={"header__navbar__items__link"}>
              Accueil
            </NavLink>
            <NavLink to="/about" end className={"header__navbar__items__link"}>
              A propos
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <img className="footer__logo" src={logoFooter} alt="logo kasa footer" />
        <p className="footer__text">&copy; 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}

export default Layout;

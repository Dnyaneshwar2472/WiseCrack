import { Link, useLocation } from "react-router-dom";
import logo from "../logo/logo.png"; // <-- Add this

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
        <h1 className="nav-title">WiseCrack</h1>
      </div>

      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>

        <Link
          to="/favorites"
          className={`nav-link ${isActive("/favorites") ? "active" : ""}`}
        >
          ❤️ Favorites
        </Link>

        <Link
          to="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
        >
          ℹ️ About
        </Link>
      </div>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import WaveText from "./WaveText";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        {/* LEFT */}
        <div className="navbar-left">
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Open for any collaborations and offers
          </p>
        </div>

        {/* RIGHT */}
        <ul className="nav-links">
          {[
            { to: "/", label: "About Trinh" },

            { to: "/projects", label: "Projects" },
            { to: "/illustration", label: "Illustration" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className="wave-link">
                <WaveText text={label} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

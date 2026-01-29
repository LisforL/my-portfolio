import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

/* split text into letters for wave motion */
const splitText = (text) =>
  text.split("").map((char, i) => (
    <span
      key={i}
      className="char"
      style={{ "--i": i }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const Navbar = () => {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        {/* LEFT */}
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <p className="availability">
            Open for any <br />
            collaborations and offers
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
                {splitText(label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

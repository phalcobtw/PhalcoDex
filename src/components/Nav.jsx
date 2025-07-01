import { NavLink } from "react-router";
export default function Nav() {
  return (
    <ul className="nav">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} end>
        Home
      </NavLink>
      <NavLink
        to="https://github.com/phalcobtw"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        end
      >
        GitHub
      </NavLink>
    </ul>
  );
}

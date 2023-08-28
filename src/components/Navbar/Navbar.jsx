import CLLogo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <CLLogo />
      <ul style={{paddingLeft: 0}}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) => {
            let baseClass = "navlink ";
            if (isActive) baseClass = baseClass + "active";
            if (isPending) baseClass = baseClass + "pending";
            return baseClass;
          }} 
        >
          Home
        </NavLink>
        <NavLink
          to="/app"
          className={({ isActive, isPending }) => {
            let baseClass = "navlink ";
            if (isActive) baseClass = baseClass + "active";
            if (isPending) baseClass = baseClass + "pending";
            return baseClass;
          }} 
        >
          App
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

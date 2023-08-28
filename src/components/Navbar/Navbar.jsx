import CLLogo from "../Logo/Logo";
import ModifiedNavBar from "../ModifiedNavbar/ModifiedNavbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <CLLogo />
      <ul style={{ paddingLeft: 0 }}>
        <ModifiedNavBar path="/" text="Home" />
        <ModifiedNavBar path="/app" text="App" />
      </ul>
    </nav>
  );
};

export default Navbar;

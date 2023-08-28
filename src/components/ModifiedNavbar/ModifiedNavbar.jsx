import { NavLink } from "react-router-dom";

const ModifiedNavBar = ({path, text}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) => {
        let baseClass = "navlink ";
        if (isActive) baseClass = baseClass + "active";
        if (isPending) baseClass = baseClass + "pending";
        return baseClass;
      }}
    >
      {text}
    </NavLink>
  );
};

export default ModifiedNavBar;

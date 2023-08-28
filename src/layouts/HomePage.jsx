import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePageLayout;

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

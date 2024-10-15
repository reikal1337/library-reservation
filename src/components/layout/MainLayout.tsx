import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="w-full min-h-screen flex flex-col items-center bg-books">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

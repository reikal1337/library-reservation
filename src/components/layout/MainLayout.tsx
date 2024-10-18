import { ToastContainer } from "react-toastify";
import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="w-full min-h-screen flex flex-col items-center bg-books">
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

export default MainLayout;

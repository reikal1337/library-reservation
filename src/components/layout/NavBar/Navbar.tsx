import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="images/logo.png"
            className="h-8"
            alt="Library reservation Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Library Reservation
          </span>
        </Link>

        <MobileNavbar />

        <DesktopNavbar />
      </div>
    </nav>
  );
};

export default Navbar;

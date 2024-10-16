import NavLinks from "./NavLinks";
import ReservationCart from "./ReservationCart";

const DesktopNavbar = () => {
  return (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        <NavLinks
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          activeClassName="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        />
        <ReservationCart />
      </ul>
    </div>
  );
};

export default DesktopNavbar;

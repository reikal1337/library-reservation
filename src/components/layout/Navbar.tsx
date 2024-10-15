import { NavLink } from "react-router-dom";

const navList = [
  {
    href: "/",
    text: "Books",
  },
  {
    href: "/myreservations",
    text: "My Reservations",
  },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full ">
      <ul>
        {navList.map((link) => (
          <NavLink to={link.href}>{link.text}</NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

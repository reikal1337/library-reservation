import { NavLink } from "react-router-dom";
import { navLinkList } from "./navLinksList";

type Props = {
  className: string;
  activeClassName: string;
};

const NavLinks = ({ className, activeClassName }: Props) => {
  return (
    <>
      {navLinkList.map((link, i) => (
        <li key={link.href + i}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClassName : className;
            }}
            to={link.href}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;

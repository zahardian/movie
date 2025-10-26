import { Link } from "react-router-dom";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const { links, open, toggleMenu } = useHeader();

  return (
    <div className="fixed z-50 bg-gray-900 w-full top-0">
      <div className="p-5 flex items-center gap-5">
        <Link to="/" className="font-bold text-xl text-orange-300 mr-10">
          Zaza Movie
        </Link>
        {links.map((link) => (
          <div key={link.id} className="hidden md:flex">
            <Link to={link.tag} className="hover:text-indigo-400">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div
        onClick={toggleMenu}
        className="md:hidden cursor-pointer text-xl absolute right-8 top-5 text-white"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div className={`mobile ${open ? "block" : "hidden"} py-5`}>
        <ul className="md:hidden text-center text-white font-semibold space-y-4">
          {links.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer hover:text-indigo-600"
            >
              <Link to={link.tag} onClick={toggleMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

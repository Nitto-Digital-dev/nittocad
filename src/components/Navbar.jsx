import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { close, logo2, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();
  
  const validPaths = ["/", ...navLinks.map(link => `/${link.id}`)];
  const isBaseURL = validPaths.includes(location.pathname);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY && scrollY > 100) {
        setScrollDirection("down");
      } else if (scrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <nav className={`w-full flex xl:px-16 sm:px-16 px-6 py-2 justify-between items-center navbar ${scrollDirection === "down" ? "navbar--hidden" : "navbar--visible"}`}>
      <img src={logo2} alt="Nitto" className="w-[100px] h-[48px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1"> 
        {isBaseURL ? (
          navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
        ) : (
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite"
            onClick={() => setActive("Home")}
          >
            <Link to="/">Home</Link>
          </li>
        )}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {isBaseURL ? (
              navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))
            ) : (
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite"
                onClick={() => setActive("Home")}
              >
                <Link to="/">Home</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

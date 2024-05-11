import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="height" className="border-gray-700 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="https://www.tickettailor.com/events/nedmbonanza/1056571"
                className="py-2 pl-3 pr-4 text-white md:p-0 hover:text-[#96ff00]"
                target="blank"
              >
                Tickets
              </a>
            </li>

            {/* <li>
              <a
                href="http://www.bonginator.bigcartel.com"
                className="py-2 pl-3 pr-4 text-white md:p-0 hover:text-[#96ff00]"
                target="blank"
              >
                Merch
              </a>
            </li> */}

            <li>
              <NavLink
                to={`/bands`}
                className="py-2 pl-3 pr-4 text-white md:p-0 hover:text-[#96ff00]"
              >
                Bands
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/festinfo`}
                className="py-2 pl-3 pr-4 text-white md:p-0 hover:text-[#96ff00]"
              >
                Fest Info
              </NavLink>
            </li>
            <NavDropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

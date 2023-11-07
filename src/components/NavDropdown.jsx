import { useState } from "react";

const NavDropdown = () => {
  const [dropDownIsOpen, setDropdownIsOpen] = useState(false);

  return (
    <li>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white hover:text-[#96ff00] md:p-0 md:w-auto"
        onClick={() => setDropdownIsOpen(!dropDownIsOpen)}
      >
        Applications
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownNavbar"
        className={`${
          dropDownIsOpen ? "" : "hidden"
        } z-10 font-normal rounded-lg shadow w-44 bg-black absolute`}
      >
        <ul
          className="py-2 text-sm text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <a
              href="https://docs.google.com/forms/d/1Y7Zlew6mDADfhArSU3IYbSpFPZ8dlxFteAc3ZVOIZpw/viewform?edit_requested=true"
              className="block px-4 py-2 text-sm text-white hover:text-[#96ff00]"
              target="blank"
            >
              Submit Your Band
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeU78ZdXIdqoCHjCZg4Ej0XANHVlo0F9GOxwz0Mkx-B47Nqig/viewform"
              className="block px-4 py-2 text-sm text-white hover:text-[#96ff00]"
              target="blank"
            >
              Become a Vendor
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbmEgovHzX-Z077Q_WJ6RC7SSpCWSH6veWA0yRz66hhvMrFw/viewform"
              className="block px-4 py-2 text-sm text-white hover:text-[#96ff00]"
              target="blank"
            >
              Become a Sponsor
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHbD_8iPxP4pDGgkWsT2KQX_FNuDa6BBmceMdCb69Vb_Belg/viewform"
              className="block px-4 py-2 text-sm text-white hover:text-[#96ff00]"
              target="blank"
            >
              Volunteer
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default NavDropdown;

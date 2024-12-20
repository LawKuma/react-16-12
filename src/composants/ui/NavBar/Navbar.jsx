import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-grey-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        <div className="text-lg font-bold">MonSite</div>

  
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex lg:space-x-6">
            <li>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">
                Vêtements
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">
                Accessoires
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

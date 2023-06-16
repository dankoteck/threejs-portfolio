import Logo from "../assets/logos/logo-color.png";
import { navLinks } from "../constants";

export default function Header() {
  const onGoto = () => {
    history.pushState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-transparent">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-16 py-4 mx-auto">
        <div role="button" onClick={onGoto} className="flex items-center">
          <img src={Logo} className="h-16 mr-3" alt="Logo" />

          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Web developer | Three.js Portfolio
          </span>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex flex-col p-4 mt-4 text-xl bg-transparent border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 pl-3 pr-4 text-white rounded cursor-pointer md:bg-transparent md:p-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

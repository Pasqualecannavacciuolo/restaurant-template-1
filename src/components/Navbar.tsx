import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  // State to hold the current path
  const [currentPath, setCurrentPath] = useState("");

  // State to manage mobile drawer
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Update currentPath when location changes
  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  // Toggle mobile drawer
  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  // Function to close mobile drawer
  const closeMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };

  // Effect to handle click outside of the drawer
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-drawer") &&
        !target.closest(".toggle-button")
      ) {
        closeMobileDrawer();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:flex bg-zinc-900 items-center justify-center pt-5">
        <NavLink
          path="/"
          currentPath={currentPath}
          label="Home"
          baseClass="nav-link text-white text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
        <NavLink
          path="/cocktails"
          currentPath={currentPath}
          label="Cocktails"
          baseClass="nav-link text-white text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
        <NavLink
          path="/ristorante"
          currentPath={currentPath}
          label="Ristorante"
          baseClass="nav-link text-white text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
        <NavLink
          path="/storia"
          currentPath={currentPath}
          label="Storia"
          baseClass="nav-link text-white text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
      </div>

      {/* Mobile Navbar (Drawer) */}
      <div className="xl:hidden bg-zinc-900 flex justify-between items-center py-4 px-2">
        <button
          aria-label="mobile-menu-button"
          className="text-gray-500 hover:text-gray-600 toggle-button"
          onClick={toggleMobileDrawer}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileDrawerOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Content */}
      <div
        className={`xl:hidden bg-zinc-800 text-white w-56 min-h-screen overflow-y-auto fixed top-0 left-0 transform transition-transform duration-300 ease-in-out mobile-drawer ${
          isMobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold page-title">Menu</h1>
            {isMobileDrawerOpen && (
              <button
                className="text-gray-500 hover:text-gray-600 toggle-button"
                onClick={toggleMobileDrawer}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <ul className="mt-4">
            <NavLink
              path="/"
              currentPath={currentPath}
              label="Home"
              baseClass="nav-link text-white text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
            <NavLink
              path="/cocktails"
              currentPath={currentPath}
              label="Cocktails"
              baseClass="nav-link text-white text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
            <NavLink
              path="/ristorante"
              currentPath={currentPath}
              label="Ristorante"
              baseClass="nav-link text-white text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
            <NavLink
              path="/storia"
              currentPath={currentPath}
              label="Storia"
              baseClass="nav-link text-white text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
          </ul>
        </div>
      </div>

      {/* Content */}
      <Outlet />
    </>
  );
};

// NavLink component for individual link
const NavLink = ({
  path,
  currentPath,
  label,
  baseClass,
  activeClass,
  onClick,
}: {
  path: string;
  currentPath: string;
  label: string;
  baseClass: string;
  activeClass: string;
  isMobileDrawerOpen: boolean;
  onClick?: () => void;
}) => {
  const isCurrentPath = currentPath === path;

  return (
    <li className="mb-2">
      <Link
        to={path}
        className={`${baseClass}  ${isCurrentPath ? activeClass : ""}`}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;

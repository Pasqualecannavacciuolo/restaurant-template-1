import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  const closeMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };

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
      <div className="hidden md:flex bg-zinc-900 items-center justify-center pt-5 gap-5">
        <NavLink
          path="/"
          currentPath={currentPath}
          label="Home"
          baseClass="nav-link text-xl"
          activeClass="active-nav-link"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
        <NavLink
          path="/cocktails"
          currentPath={currentPath}
          label="Cocktails"
          baseClass="nav-link text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
        <NavLink
          path="/ristorante"
          currentPath={currentPath}
          label="Ristorante"
          baseClass="nav-link text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
        <NavLink
          path="/storia"
          currentPath={currentPath}
          label="Storia"
          baseClass="nav-link text-xl"
          activeClass="text-[#FF6922]"
          isMobileDrawerOpen={isMobileDrawerOpen}
          onClick={closeMobileDrawer}
        />
      </div>

      {/* Mobile Navbar (Drawer) */}
      <div className="md:hidden bg-zinc-900 flex justify-between items-center py-4 px-2">
        <button
          aria-label="mobile-menu-open-button"
          className="text-gray-500 hover:text-gray-600"
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
        className={`md:hidden bg-zinc-800 text-white w-56 min-h-screen overflow-y-auto fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
          isMobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold mb-3 page-title">Menu</h1>
            {isMobileDrawerOpen && (
              <button
                aria-label="mobile-menu-close-button"
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
          <div className="flex flex-col gap-5">
            <NavLink
              path="/"
              currentPath={currentPath}
              label="Home"
              baseClass="nav-link text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
            <NavLink
              path="/cocktails"
              currentPath={currentPath}
              label="Cocktails"
              baseClass="nav-link text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
            <NavLink
              path="/ristorante"
              currentPath={currentPath}
              label="Ristorante"
              baseClass="nav-link text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
            <NavLink
              path="/storia"
              currentPath={currentPath}
              label="Storia"
              baseClass="nav-link text-xl"
              activeClass="text-[#FF6922]"
              isMobileDrawerOpen={isMobileDrawerOpen}
              onClick={closeMobileDrawer}
            />
          </div>
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
    <Link
      to={path}
      className={`${baseClass} ${isCurrentPath ? activeClass : "text-white"}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;

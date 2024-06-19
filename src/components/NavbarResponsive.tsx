import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavbarResponsive: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform ${
          isSidebarOpen ? "" : "transform -translate-x-full"
        } ease-in-out duration-300`}
      >
        {/* Your Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Sidebar</h1>
          <ul className="mt-4">
            <Link to="/" className="block hover:text-indigo-400">
              Home
            </Link>

            <Link to="/cocktails" className="block hover:text-indigo-400">
              Cocktails
            </Link>
            <Link to="/ristorante" className="block hover:text-indigo-400">
              Ristorante
            </Link>
            <Link to="/storia" className="block hover:text-indigo-400">
              Storia
            </Link>
          </ul>
        </div>
      </div>

      {/* Content */}

      {/* Navbar */}
      <div className="bg-white shadow">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-2">
            <h1 className="text-xl font-semibold">Menu</h1>
            <button
              className="text-gray-500 hover:text-gray-600"
              onClick={toggleSidebar}
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Content Body */}

      <Outlet />

      {/* Close sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default NavbarResponsive;

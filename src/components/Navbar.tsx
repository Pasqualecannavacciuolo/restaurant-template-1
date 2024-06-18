import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  // State to hold the current path
  const [currentPath, setCurrentPath] = useState("");

  // Update currentPath when location changes
  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  // Base and active classes
  const base_class = "nav-link text-white text-xl";
  const active_class =
    "nav-link text-white text-xl underline decoration-[#FF6922] decoration-2 underline-offset-8";

  return (
    <>
      <div className="bg-zinc-900 flex gap-5 items-center justify-center pt-5">
        <NavLink
          path="/"
          currentPath={currentPath}
          label="Home"
          baseClass={base_class}
          activeClass={active_class}
        />
        <NavLink
          path="/cocktails"
          currentPath={currentPath}
          label="Cocktails"
          baseClass={base_class}
          activeClass={active_class}
        />
        <NavLink
          path="/ristorante"
          currentPath={currentPath}
          label="Ristorante"
          baseClass={base_class}
          activeClass={active_class}
        />
        <NavLink
          path="/storia"
          currentPath={currentPath}
          label="Storia"
          baseClass={base_class}
          activeClass={active_class}
        />
      </div>
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
}: {
  path: string;
  currentPath: string;
  label: string;
  baseClass: string;
  activeClass: string;
}) => {
  const isCurrentPath = currentPath === path;

  return (
    <Link className={isCurrentPath ? activeClass : baseClass} to={path}>
      {label}
      {isCurrentPath && (
        <div
          className="underline"
          style={{ backgroundColor: "#FF6922", height: "4px", width: "100%" }}
        />
      )}
    </Link>
  );
};

export default Navbar;

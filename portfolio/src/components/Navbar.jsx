import { Link, useLocation } from "react-router-dom";
import { Book, Package, Star, Menu, Search, Bell, Plus } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#161b22] border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="text-white p-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src="https://github.com/github.png"
                alt="Profile"
              />
              <span className="font-semibold text-white">Dheeraj</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/" current={location.pathname === "/"}>
              <Book className="w-4 h-4" />
              <span>Overview</span>
            </NavLink>
            <NavLink to="/projects" current={location.pathname === "/projects"}>
              <Book className="w-4 h-4" />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/packages" current={location.pathname === "/packages"}>
              <Package className="w-4 h-4" />
              <span>Packages</span>
            </NavLink>
            <NavLink
              to="/education"
              current={location.pathname === "/educcation"}
            >
              <Star className="w-4 h-4" />
              <span>Education</span>
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white ">
              <Bell size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Plus size={20} />
            </button>
            <img
              className="h-8 w-8 rounded-full"
              src="https://github.com/github.png"
              alt="Profile"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <MobileNavLink to="/" current={location.pathname === "/"}>
                <Book className="w-4 h-4" />
                <span>Overview</span>
              </MobileNavLink>
              <MobileNavLink
                to="/projects"
                current={location.pathname === "/projects"}
              >
                <Book className="w-4 h-4" />
                <span>Projects</span>
              </MobileNavLink>
              <MobileNavLink
                to="/packages"
                current={location.pathname === "/packages"}
              >
                <Package className="w-4 h-4" />
                <span>Packages</span>
              </MobileNavLink>
              <MobileNavLink
                to="/stars"
                current={location.pathname === "/stars"}
              >
                <Star className="w-4 h-4" />
                <span>Stars</span>
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, current }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
      current
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, current }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
      current
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;

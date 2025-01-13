import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaBook,
  FaCode,
  FaStar,
  FaBox,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Layout({ children }) {
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <header className={`border-b ${theme.border}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaGithub className={`h-8 w-8 ${theme.text}`} />
              <span className={`ml-4 ${theme.text} font-semibold`}>
                Your Name
              </span>
            </div>
            <button
              onClick={() => theme.setIsDark(!theme.isDark)}
              className={`p-2 rounded-md ${theme.border} border ${theme.text}`}
            >
              {theme.isDark ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaBook className="mr-2" />
              Overview
            </Link>
            <Link
              to="/education"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/education")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaBox className="mr-2" />
              Education
            </Link>
            <Link
              to="/skills"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/skills")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaStar className="mr-2" />
              Skills
            </Link>

            <Link
              to="/projects"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/projects")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaCode className="mr-2" />
              Projects{" "}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  theme.isDark ? "bg-github-border-dark" : "bg-gray-100"
                }`}
              >
                16
              </span>
            </Link>
            <Link
              to="/experience"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/experience")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaStar className="mr-2" />
              Experience
            </Link>
            <Link
              to="/certificates"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/certificates")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaStar className="mr-2" />
              Certificates
            </Link>
            <Link
              to="/contact"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/contact")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <FaBox className="mr-2" />
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={`border-t ${theme.border} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className={`text-gray-400 ${theme.hover}`}>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className={`text-gray-400 ${theme.hover}`}>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className={`text-gray-400 ${theme.hover}`}>
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className={`text-gray-400 ${theme.hover}`}>
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

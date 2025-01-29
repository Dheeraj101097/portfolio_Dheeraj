import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaStar,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { TbSchool } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import { PiCertificateLight } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext";
import { IoIosContact } from "react-icons/io";
import logo from "../assets/logo1.png";
export default function Layout({ children }) {
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`min-h-screen ${theme.bg} `}>
      <header
        className={`border-b ${theme.border} sticky top-0 z-50 ${theme.bg} `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={logo}
                className="h-10 w-10 object-fill rounded-full"
              ></img>
              <Link to="/">
                <span className={`ml-2 ${theme.text} font-semibold`}>
                  Dheeraj
                  <span className={`${theme.text} text-opacity-55 text-sm`}>
                    @05
                  </span>
                </span>
              </Link>
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
          <div className="flex space-x-1 overflow-x-auto">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 ${theme.text} ${
                isActive("/")
                  ? "border-b-2 border-github-btn"
                  : `hover:border-b-2 ${theme.border}`
              }`}
            >
              <IoBookOutline className="mr-2" />
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
              <TbSchool className="mr-2" />
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
              <GoProjectSymlink className="mr-2" />
              Projects{" "}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  theme.isDark ? "bg-github-border-dark" : "bg-gray-100"
                }`}
              >
                6
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
              <GrUserExpert className="mr-2" />
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
              <PiCertificateLight className="mr-2" />
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
              <IoIosContact className="mr-2 text-lg" />
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={`border-t ${theme.border} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Dheeraj101097"
              className={`text-gray-400 ${theme.hover}`}
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className={`text-gray-400 ${theme.hover}`}>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dheerajpatnaik10/"
              className={`text-gray-400 ${theme.hover}`}
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:dheerajap6@gmail.com"
              className={`text-gray-400 ${theme.hover}`}
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-400">
            © {new Date().getFullYear()} Dheeraj Portfolio. All rights reserved.
            <br />
            <span>
              <a href="tel:9051290512">Get in touch with me : +91 9337656566</a>
            </span>
            <br />
            <span>
              Images & Icons :
              <a
                target="_blank"
                href="https://www.freepik.com"
                className="mx-2 hover:underline-offset-2 hover:underline"
              >
                Freepik
              </a>
              <>|</>
              <a
                target="_blank"
                href="https://icons8.com"
                className="ml-2 hover:underline-offset-2 hover:underline"
              >
                Icons8
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

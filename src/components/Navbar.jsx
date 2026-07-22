import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/findjobs",
    text: "Find Jobs",
  },
  {
    path: "/freelancers",
    text: "Freelancers",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-amber-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link
          to="/"
          className="text-3xl lg:text-4xl font-bold outfit tracking-wide"
        >
          SkillBridge
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8 outfit">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg transition ${
                  isActive
                    ? "font-semibold text-black border-b-2 border-black pb-1"
                    : "text-gray-700 hover:text-black"
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-3">
          <button className="border border-black px-5 py-2 rounded-xl hover:bg-black hover:text-white transition">
            Login
          </button>

          <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
            Register
          </button>
        </div>

        {/* Mobile Hamburger */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-amber-400 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4 outfit">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-black" : "text-gray-700"
                }
              >
                {link.text}
              </NavLink>
            ))}

            <hr className="border-gray-400" />

            <button className="border border-black py-2 rounded-xl">
              Login
            </button>

            <button className="bg-black text-white py-2 rounded-xl">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

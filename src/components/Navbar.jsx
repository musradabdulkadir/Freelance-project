import { NavLink } from "react-router-dom";

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
  return (
    <nav className="bg-amber-500 p-3 flex items-center justify-between">
      <div>
        <p className="text-4xl font-bold outfit">SkillBridge</p>
      </div>

      <div className="flex items-center justify-center gap-6 outfit">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "font-bold text-black underline underline-offset-4"
                  : "text-gray-600"
              } `
            }
            to={link.path}
            key={link.path}
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <div>
        <button className="bg-black text-white px-4 py-1 text-lg rounded-3xl mr-3 outfit">
          Login
        </button>
        <button className="bg-black text-white px-4 py-1 text-lg rounded-3xl mr-3 outfit">
          Register
        </button>
      </div>
    </nav>
  );
}

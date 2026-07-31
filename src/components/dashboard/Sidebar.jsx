import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

import {
  adminMenu,
  clientMenu,
  freelancerMenu,
  logoutMenu,
} from "../../data/dashboardMenu";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const role = user?.role;

  let menu = [];

  if (role === "admin") {
    menu = adminMenu;
  } else if (role === "client") {
    menu = clientMenu;
  } else if (role === "freelancer") {
    menu = freelancerMenu;
  }

  const LogoutIcon = logoutMenu.icon;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");

    navigate("/login");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden bg-black text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 transition"
      >
        <FaBars size={20} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          w-72 min-h-screen
          bg-black text-white
          p-6
          flex flex-col justify-between
          outfit
          z-50
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div>
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <h1 className="text-3xl font-bold">SkillBridge</h1>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition"
            >
              <FaTimes size={22} />
            </button>
          </div>

          <h1 className="hidden lg:block text-4xl font-bold mb-10">
            SkillBridge
          </h1>

          <nav className="space-y-2">
            {menu.map((item) => (
              <div key={item.path} onClick={() => setIsOpen(false)}>
                <SidebarItem item={item} />
              </div>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition"
        >
          <LogoutIcon className="text-lg" />

          <span className="font-medium">{logoutMenu.title}</span>
        </button>
      </aside>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";

import {
  adminMenu,
  clientMenu,
  freelancerMenu,
  logoutMenu,
} from "../../data/dashboardMenu";

export default function Sidebar() {
  const navigate = useNavigate();

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
    <aside className="w-72 min-h-screen bg-black text-white p-6 flex flex-col justify-between outfit">
      <div>
        <h1 className="text-4xl font-bold mb-10">SkillBridge</h1>

        <nav className="space-y-2">
          {menu.map((item) => (
            <SidebarItem key={item.path} item={item} />
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
  );
}

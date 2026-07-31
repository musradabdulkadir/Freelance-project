import { NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `outfit flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive
            ? "bg-amber-500 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`
      }
    >
      <Icon className="text-lg" />

      <span className="font-medium">{item.title}</span>
    </NavLink>
  );
}

import { FaBell } from "react-icons/fa";

export default function Topbar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const role = user?.role.charAt(0).toUpperCase() + user?.role.slice(1);

  return (
    <header className="bg-white border-b shadow-sm px-8 py-5 flex justify-between items-center outfit">
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>

        <p className="text-gray-500">{role} Dashboard</p>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <FaBell className="text-2xl text-gray-600 hover:text-amber-500 transition" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] px-1.5 py-0.5">
            0
          </span>
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-lg font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

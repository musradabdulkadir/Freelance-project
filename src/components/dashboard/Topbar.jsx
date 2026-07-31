import { useState } from "react";
import { FaBell, FaChevronDown, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser } from "../../services/authService";

export default function Topbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const user = getLoggedInUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Welcome, {user?.name}</h2>

        <p className="text-gray-500 capitalize">{user?.role}</p>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-2xl text-gray-600 hover:text-black">
          <FaBell />
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3"
          >
            <FaUserCircle className="text-4xl text-gray-600" />

            <FaChevronDown />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg overflow-hidden border">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                My Profile
              </button>

              <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

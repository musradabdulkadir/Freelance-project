import { useEffect, useMemo, useState } from "react";
import { getAllUsers, deleteUser } from "../../services/userService";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const loadUsers = () => {
    setUsers(getAllUsers());
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole = roleFilter === "all" || user.role === roleFilter;

      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this user?")) return;

    deleteUser(id);
    loadUsers();
  };

  return (
    <div className="p-2 sm:p-4 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Manage Users</h1>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow p-5 mb-6 flex flex-col lg:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border rounded-lg px-4 py-2 flex-1 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2 w-full lg:w-60"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4">{user.name}</td>

                <td className="p-4">{user.email}</td>

                <td className="p-4 capitalize">{user.role}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4 text-center">
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow p-5">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Name</p>
                <p className="font-semibold">{user.name}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="break-all">{user.email}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Role</p>
                <p className="capitalize">{user.role}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Status</p>

                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
                    user.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              {user.role !== "admin" && (
                <button
                  onClick={() => handleDelete(user.id)}
                  className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                  Delete User
                </button>
              )}
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center py-10 text-gray-500">No users found.</div>
        )}
      </div>
    </div>
  );
}

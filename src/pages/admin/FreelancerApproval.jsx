import { useEffect, useState } from "react";

import {
  approveFreelancer,
  deleteUser,
  getPendingFreelancers,
} from "../../services/userService";

export default function FreelancerApproval() {
  const [freelancers, setFreelancers] = useState([]);

  const loadFreelancers = () => {
    setFreelancers(getPendingFreelancers());
  };

  useEffect(() => {
    loadFreelancers();
  }, []);

  const handleApprove = (id) => {
    approveFreelancer(id);
    loadFreelancers();
  };

  const handleReject = (id) => {
    if (!window.confirm("Reject this freelancer?")) return;

    deleteUser(id);
    loadFreelancers();
  };

  return (
    <div className="p-2 sm:p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Freelancer Approval
      </h1>

      {freelancers.length === 0 ? (
        <div className="bg-white rounded-xl p-6 shadow">
          No pending freelancers.
        </div>
      ) : (
        <>
          <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {freelancers.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="p-4">{user.name}</td>

                    <td className="p-4">{user.email}</td>

                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        Pending
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleApprove(user.id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(user.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden space-y-4">
            {freelancers.map((user) => (
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
                    <p className="text-xs text-gray-500">Status</p>

                    <span className="inline-block mt-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => handleApprove(user.id)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(user.id)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {freelancers.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No pending freelancers.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

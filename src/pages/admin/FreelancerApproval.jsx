import { useEffect, useState } from "react";

import {
  approveFreelancer,
  deleteUser,
  getPendingFreelancers,
} from "../../services/authService";

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
    <div>
      <h1 className="text-3xl font-bold mb-6">Freelancer Approval</h1>

      {freelancers.length === 0 ? (
        <div className="bg-white rounded-xl p-6 shadow">
          No pending freelancers.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
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

                  <td className="p-4 flex justify-center gap-3">
                    <button
                      onClick={() => handleApprove(user.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

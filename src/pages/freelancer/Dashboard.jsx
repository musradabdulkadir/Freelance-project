import { useEffect, useState } from "react";
import { getFreelancerApplications } from "../../services/applicationService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });

  useEffect(() => {
    const applications = getFreelancerApplications();

    setStats({
      total: applications.length,
      pending: applications.filter((app) => app.status === "pending").length,
      accepted: applications.filter((app) => app.status === "accepted").length,
      rejected: applications.filter((app) => app.status === "rejected").length,
    });
  }, []);

  return (
    <div className="p-6 outfit">
      <h1 className="text-3xl font-bold mb-8">Freelancer Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Total Applications</h2>
          <p className="text-3xl font-bold mt-2">{stats.total}</p>
        </div>

        <div className="bg-yellow-50 shadow rounded-xl p-6">
          <h2 className="text-yellow-700">Pending</h2>
          <p className="text-3xl font-bold mt-2">{stats.pending}</p>
        </div>

        <div className="bg-green-50 shadow rounded-xl p-6">
          <h2 className="text-green-700">Accepted</h2>
          <p className="text-3xl font-bold mt-2">{stats.accepted}</p>
        </div>

        <div className="bg-red-50 shadow rounded-xl p-6">
          <h2 className="text-red-700">Rejected</h2>
          <p className="text-3xl font-bold mt-2">{stats.rejected}</p>
        </div>
      </div>
    </div>
  );
}

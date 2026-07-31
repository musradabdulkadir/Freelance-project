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
    <div className="p-4 sm:p-6 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">
        Freelancer Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm sm:text-base">
            Total Applications
          </h2>

          <p className="text-3xl sm:text-4xl font-bold mt-3">{stats.total}</p>
        </div>

        <div className="bg-yellow-50 shadow rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-yellow-700 text-sm sm:text-base">Pending</h2>

          <p className="text-3xl sm:text-4xl font-bold mt-3 text-yellow-700">
            {stats.pending}
          </p>
        </div>

        <div className="bg-green-50 shadow rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-green-700 text-sm sm:text-base">Accepted</h2>

          <p className="text-3xl sm:text-4xl font-bold mt-3 text-green-700">
            {stats.accepted}
          </p>
        </div>

        <div className="bg-red-50 shadow rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-red-700 text-sm sm:text-base">Rejected</h2>

          <p className="text-3xl sm:text-4xl font-bold mt-3 text-red-700">
            {stats.rejected}
          </p>
        </div>
      </div>
    </div>
  );
}

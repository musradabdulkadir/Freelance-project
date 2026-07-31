import { useEffect, useState } from "react";
import { getCurrentClientJobs } from "../../services/jobService";
import { getClientApplications } from "../../services/applicationService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    pendingJobs: 0,
    approvedJobs: 0,
    applications: 0,
  });

  useEffect(() => {
    const jobs = getCurrentClientJobs();
    const applications = getClientApplications();

    setStats({
      totalJobs: jobs.length,
      pendingJobs: jobs.filter((job) => job.status === "pending").length,
      approvedJobs: jobs.filter((job) => job.status === "approved").length,
      applications: applications.length,
    });
  }, []);

  return (
    <div className="p-6 outfit">
      <h1 className="text-3xl font-bold mb-8">Client Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Jobs Posted</h2>
          <p className="text-3xl font-bold mt-2">{stats.totalJobs}</p>
        </div>

        <div className="bg-yellow-50 shadow rounded-xl p-6">
          <h2 className="text-yellow-700">Pending Jobs</h2>
          <p className="text-3xl font-bold mt-2">{stats.pendingJobs}</p>
        </div>

        <div className="bg-green-50 shadow rounded-xl p-6">
          <h2 className="text-green-700">Approved Jobs</h2>
          <p className="text-3xl font-bold mt-2">{stats.approvedJobs}</p>
        </div>

        <div className="bg-blue-50 shadow rounded-xl p-6">
          <h2 className="text-blue-700">Applications Received</h2>
          <p className="text-3xl font-bold mt-2">{stats.applications}</p>
        </div>
      </div>
    </div>
  );
}

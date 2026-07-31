import { useEffect, useState } from "react";
import { getUsers } from "../../services/authService";
import { getJobs } from "../../services/jobService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFreelancers: 0,
    pendingFreelancers: 0,
    totalJobs: 0,
    pendingJobs: 0,
    approvedJobs: 0,
  });

  useEffect(() => {
    const users = getUsers();
    const jobs = getJobs();

    setStats({
      totalUsers: users.length,

      totalFreelancers: users.filter((user) => user.role === "freelancer")
        .length,

      pendingFreelancers: users.filter(
        (user) => user.role === "freelancer" && user.status === "pending",
      ).length,

      totalJobs: jobs.length,

      pendingJobs: jobs.filter((job) => job.status === "pending").length,

      approvedJobs: jobs.filter((job) => job.status === "approved").length,
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Total Users</h2>
          <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
        </div>

        <div className="bg-blue-50 rounded-xl shadow p-6">
          <h2 className="text-blue-700">Freelancers</h2>
          <p className="text-3xl font-bold mt-2">{stats.totalFreelancers}</p>
        </div>

        <div className="bg-yellow-50 rounded-xl shadow p-6">
          <h2 className="text-yellow-700">Pending Freelancer Approvals</h2>
          <p className="text-3xl font-bold mt-2">{stats.pendingFreelancers}</p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h2 className="text-gray-700">Total Jobs</h2>
          <p className="text-3xl font-bold mt-2">{stats.totalJobs}</p>
        </div>

        <div className="bg-orange-50 rounded-xl shadow p-6">
          <h2 className="text-orange-700">Pending Jobs</h2>
          <p className="text-3xl font-bold mt-2">{stats.pendingJobs}</p>
        </div>

        <div className="bg-green-50 rounded-xl shadow p-6">
          <h2 className="text-green-700">Approved Jobs</h2>
          <p className="text-3xl font-bold mt-2">{stats.approvedJobs}</p>
        </div>
      </div>
    </div>
  );
}

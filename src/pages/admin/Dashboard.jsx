import { useEffect, useState } from "react";
import { FaUsers, FaUserTie, FaUserCheck, FaUserClock } from "react-icons/fa";

import StatCard from "../../components/dashboard/StatCard";
import { getDashboardStats } from "../../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalClients: 0,
    totalFreelancers: 0,
    pendingFreelancers: 0,
    approvedFreelancers: 0,
  });

  useEffect(() => {
    setStats(getDashboardStats());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<FaUsers className="text-white text-2xl" />}
          color="bg-blue-500"
        />

        <StatCard
          title="Clients"
          value={stats.totalClients}
          icon={<FaUsers className="text-white text-2xl" />}
          color="bg-green-500"
        />

        <StatCard
          title="Freelancers"
          value={stats.totalFreelancers}
          icon={<FaUserTie className="text-white text-2xl" />}
          color="bg-purple-500"
        />

        <StatCard
          title="Pending"
          value={stats.pendingFreelancers}
          icon={<FaUserClock className="text-white text-2xl" />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Approved"
          value={stats.approvedFreelancers}
          icon={<FaUserCheck className="text-white text-2xl" />}
          color="bg-emerald-500"
        />
      </div>
    </div>
  );
}

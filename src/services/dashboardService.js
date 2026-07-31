import { getUsers } from "./authService";

export function getDashboardStats() {
  const users = getUsers();

  const totalUsers = users.length;

  const totalClients = users.filter((user) => user.role === "client").length;

  const totalFreelancers = users.filter(
    (user) => user.role === "freelancer",
  ).length;

  const pendingFreelancers = users.filter(
    (user) => user.role === "freelancer" && user.status === "pending",
  ).length;

  const approvedFreelancers = users.filter(
    (user) => user.role === "freelancer" && user.status === "approved",
  ).length;

  return {
    totalUsers,
    totalClients,
    totalFreelancers,
    pendingFreelancers,
    approvedFreelancers,
  };
}

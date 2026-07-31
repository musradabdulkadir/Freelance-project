import { getUsers, saveUsers } from "./authService";

export function getAllUsers() {
  return getUsers();
}

export function deleteUser(id) {
  const users = getUsers();

  const updatedUsers = users.filter((user) => user.id !== id);

  saveUsers(updatedUsers);
}

export function approveFreelancer(id) {
  const users = getUsers();

  const updatedUsers = users.map((user) =>
    user.id === id ? { ...user, status: "approved" } : user,
  );

  saveUsers(updatedUsers);
}

export function getPendingFreelancers() {
  return getUsers().filter(
    (user) => user.role === "freelancer" && user.status === "pending",
  );
}

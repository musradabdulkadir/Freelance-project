const USERS_KEY = "users";

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(data) {
  const users = getUsers();

  // Create default admin
  if (!users.find((user) => user.role === "admin")) {
    users.push({
      id: 1,
      name: "Admin",
      email: "admin@skillbridge.com",
      password: "admin123",
      role: "admin",
      status: "approved",
    });
  }

  // Duplicate email check
  if (
    users.find((user) => user.email.toLowerCase() === data.email.toLowerCase())
  ) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  const newUser = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
    status: data.role === "freelancer" ? "pending" : "approved",
  };

  users.push(newUser);

  saveUsers(users);

  return {
    success: true,
    user: newUser,
  };
}

export function getPendingFreelancers() {
  const users = getUsers();

  return users.filter(
    (user) => user.role === "freelancer" && user.status === "pending",
  );
}

export function approveFreelancer(id) {
  const users = getUsers();

  const updatedUsers = users.map((user) =>
    user.id === id ? { ...user, status: "approved" } : user,
  );

  saveUsers(updatedUsers);
}

export function deleteUser(id) {
  const users = getUsers();

  const updatedUsers = users.filter((user) => user.id !== id);

  saveUsers(updatedUsers);
}

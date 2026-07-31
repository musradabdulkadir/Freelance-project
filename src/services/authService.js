const USERS_KEY = "users";

export function isStrongPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  return regex.test(password);
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(data) {
  if (!isStrongPassword(data.password)) {
    return {
      success: false,
      message:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",
    };
  }
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

export function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password,
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  if (user.role === "freelancer" && user.status !== "approved") {
    return {
      success: false,
      message: "Your account is waiting for Admin approval.",
    };
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", "true");

  return {
    success: true,
    user,
  };
}

export function logoutUser() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("isLoggedIn");
}

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

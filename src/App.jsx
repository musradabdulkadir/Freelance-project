import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import FindJobs from "./pages/public/FindJobs";
import JobDetails from "./pages/public/JobDetails";
import Freelancers from "./pages/public/Freelancers";
import FreelancerDetails from "./pages/public/FreelancerDetails";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import FreelancerApproval from "./pages/admin/FreelancerApproval";
import JobApproval from "./pages/admin/JobApproval";
import ManageUsers from "./pages/admin/ManageUsers";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";

// Client Pages
import ClientDashboard from "./pages/client/Dashboard";

// Freelancer Pages
import FreelancerDashboard from "./pages/freelancer/Dashboard";

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="findjobs" element={<FindJobs />} />
        <Route path="jobs/:id" element={<JobDetails />} />
        <Route path="freelancers" element={<Freelancers />} />
        <Route path="freelancers/:id" element={<FreelancerDetails />} />
      </Route>

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <RoleProtectedRoute allowedRole="admin">
            <DashboardLayout />
          </RoleProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="freelancer-approval" element={<FreelancerApproval />} />
        <Route path="job-approval" element={<JobApproval />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Client Dashboard */}
      <Route
        path="/client"
        element={
          <RoleProtectedRoute allowedRole="client">
            <DashboardLayout />
          </RoleProtectedRoute>
        }
      >
        <Route index element={<ClientDashboard />} />
      </Route>

      {/* Freelancer Dashboard */}
      <Route
        path="/freelancer"
        element={
          <RoleProtectedRoute allowedRole="freelancer">
            <DashboardLayout />
          </RoleProtectedRoute>
        }
      >
        <Route index element={<FreelancerDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

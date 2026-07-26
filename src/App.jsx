import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindJobs from "./pages/FindJobs";
import JobDetails from "./pages/JobDetails";
import Freelancers from "./pages/Freelancers";
import FreelancerDetails from "./pages/FreelancerDetails";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="findjobs" element={<FindJobs />} />
        <Route path="jobs/:id" element={<JobDetails />} />
        <Route path="freelancers" element={<Freelancers />} />
        <Route path="freelancers/:id" element={<FreelancerDetails />} />
        <Route
          path="client"
          element={
            <RoleProtectedRoute allowedRole="client">
              <ClientDashboard />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="freelancer"
          element={
            <RoleProtectedRoute allowedRole="freelancer">
              <FreelancerDashboard />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <RoleProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </RoleProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

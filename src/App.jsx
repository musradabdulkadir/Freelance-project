import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindJobs from "./pages/FindJobs";
import JobDetails from "./pages/JobDetails";

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
      </Route>
    </Routes>
  );
}

export default App;

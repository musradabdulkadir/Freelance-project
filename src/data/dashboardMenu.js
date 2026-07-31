import {
  FaHome,
  FaUserCheck,
  FaBriefcase,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaClipboardList,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

export const adminMenu = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: FaHome,
  },
  {
    title: "Freelancer Approval",
    path: "/admin/freelancer-approval",
    icon: FaUserCheck,
  },
  {
    title: "Job Approval",
    path: "/admin/job-approval",
    icon: FaBriefcase,
  },
  {
    title: "Manage Users",
    path: "/admin/manage-users",
    icon: FaUsers,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: FaChartBar,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: FaCog,
  },
];

export const clientMenu = [
  {
    title: "Dashboard",
    path: "/client/dashboard",
    icon: FaHome,
  },
  {
    title: "Post Job",
    path: "/client/post-job",
    icon: FaBriefcase,
  },
  {
    title: "My Jobs",
    path: "/client/my-jobs",
    icon: FaClipboardList,
  },
  {
    title: "Applications",
    path: "/client/applications",
    icon: FaUsers,
  },
  {
    title: "Payments",
    path: "/client/payments",
    icon: FaMoneyBillWave,
  },
  {
    title: "Profile",
    path: "/client/profile",
    icon: FaUser,
  },
];

export const freelancerMenu = [
  {
    title: "Dashboard",
    path: "/freelancer/dashboard",
    icon: FaHome,
  },
  {
    title: "Browse Jobs",
    path: "/freelancer/browse-jobs",
    icon: FaBriefcase,
  },
  {
    title: "Applied Jobs",
    path: "/freelancer/applied-jobs",
    icon: FaClipboardList,
  },
  {
    title: "Accepted Jobs",
    path: "/freelancer/accepted-jobs",
    icon: FaUserCheck,
  },
  {
    title: "Payments",
    path: "/freelancer/payments",
    icon: FaMoneyBillWave,
  },
  {
    title: "Profile",
    path: "/freelancer/profile",
    icon: FaUser,
  },
];

export const logoutMenu = {
  title: "Logout",
  path: "/login",
  icon: FaSignOutAlt,
};

import { closeJob } from "./jobService";

const APPLICATIONS_KEY = "applications";

export function getApplications() {
  return JSON.parse(localStorage.getItem(APPLICATIONS_KEY)) || [];
}

export function saveApplications(applications) {
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
}

export function createApplication(job) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) return null;

  const applications = getApplications();

  const alreadyApplied = applications.find(
    (application) =>
      application.jobId === job.id &&
      application.freelancerId === loggedInUser.id,
  );

  if (alreadyApplied) {
    return {
      success: false,
      message: "You have already applied for this job.",
    };
  }

  const newApplication = {
    id: Date.now(),

    jobId: job.id,
    jobTitle: job.title,
    company: job.company,

    clientId: job.clientId,
    clientName: job.clientName,

    freelancerId: loggedInUser.id,
    freelancerName: loggedInUser.name,

    status: "pending",

    appliedAt: new Date().toISOString(),

    // Work Submission
    workStatus: "accepted",
    projectUrl: "",
    githubUrl: "",
    message: "",
    submittedAt: "",

    rejectionReason: "",
  };

  applications.push(newApplication);

  saveApplications(applications);

  return {
    success: true,
    application: newApplication,
  };
}

export function getFreelancerApplications() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) return [];

  return getApplications().filter(
    (application) => application.freelancerId === loggedInUser.id,
  );
}

export function getClientApplications() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) return [];

  return getApplications().filter(
    (application) => application.clientId === loggedInUser.id,
  );
}

export function updateApplicationStatus(id, status) {
  const applications = getApplications().map((application) =>
    application.id === id ? { ...application, status } : application,
  );

  saveApplications(applications);
}

export function acceptApplication(id) {
  const applications = getApplications();

  const selectedApplication = applications.find(
    (application) => application.id === id,
  );

  if (!selectedApplication) {
    return false;
  }

  const updatedApplications = applications.map((application) => {
    // Accept selected freelancer
    if (application.id === id) {
      return {
        ...application,
        status: "accepted",
        workStatus: "accepted",
      };
    }

    // Reject every other pending application for the same job
    if (
      application.jobId === selectedApplication.jobId &&
      application.status === "pending"
    ) {
      return {
        ...application,
        status: "rejected",
        rejectionReason:
          "This job has already been assigned to another freelancer.",
      };
    }

    return application;
  });

  saveApplications(updatedApplications);

  // Close the job
  closeJob(selectedApplication.jobId);

  return true;
}

export function rejectApplication(id) {
  updateApplicationStatus(id, "rejected");
}

// Work Submission Functions

export function submitWork(applicationId, projectUrl, githubUrl, message) {
  const applications = getApplications();

  const application = applications.find((app) => app.id === applicationId);

  if (!application) return false;

  application.workStatus = "submitted";
  application.projectUrl = projectUrl;
  application.githubUrl = githubUrl;
  application.message = message;
  application.submittedAt = new Date().toLocaleString();

  saveApplications(applications);

  return true;
}

export function approveWork(applicationId) {
  const applications = getApplications();

  const application = applications.find((app) => app.id === applicationId);

  if (!application) return false;

  application.workStatus = "completed";

  saveApplications(applications);

  return true;
}

export function requestRevision(applicationId) {
  const applications = getApplications();

  const application = applications.find((app) => app.id === applicationId);

  if (!application) return false;

  application.workStatus = "revision_requested";

  saveApplications(applications);

  return true;
}

const JOBS_KEY = "jobs";

export function getJobs() {
  return JSON.parse(localStorage.getItem(JOBS_KEY)) || [];
}

export function saveJobs(jobs) {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
}

export function createJob(jobData) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const jobs = getJobs();

  const newJob = {
    id: Date.now(),

    title: jobData.title,
    company: jobData.company,
    category: jobData.category,
    location: jobData.location,
    experience: jobData.experience,
    jobType: jobData.jobType,
    salary: Number(jobData.salary),
    vacancies: Number(jobData.vacancies),
    deadline: jobData.deadline,
    skills: jobData.skills,
    description: jobData.description,

    clientId: loggedInUser.id,
    clientName: loggedInUser.name,

    status: "pending",

    createdAt: new Date().toISOString(),
  };

  jobs.push(newJob);
  saveJobs(jobs);

  return newJob;
}

export function getClientJobs(clientId) {
  return getJobs().filter((job) => job.clientId === clientId);
}

export function getCurrentClientJobs() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) return [];

  return getJobs().filter((job) => job.clientId === loggedInUser.id);
}

export function getPendingJobs() {
  return getJobs().filter((job) => job.status === "pending");
}

export function getApprovedJobs() {
  return getJobs().filter((job) => job.status === "approved");
}

export function approveJob(id) {
  const jobs = getJobs().map((job) =>
    job.id === id
      ? {
          ...job,
          status: "approved",
        }
      : job,
  );

  saveJobs(jobs);
}

export function closeJob(jobId) {
  const jobs = getJobs().map((job) =>
    job.id === jobId
      ? {
          ...job,
          status: "closed",
        }
      : job,
  );

  saveJobs(jobs);
}

export function reopenJob(jobId) {
  const jobs = getJobs().map((job) =>
    job.id === jobId
      ? {
          ...job,
          status: "approved",
        }
      : job,
  );

  saveJobs(jobs);
}

export function deleteJob(id) {
  const jobs = getJobs().filter((job) => job.id !== id);

  saveJobs(jobs);
}

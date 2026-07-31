import { Link, useParams } from "react-router-dom";
import { getApprovedJobs } from "../../services/jobService";
import { createApplication } from "../../services/applicationService";
import { getLoggedInUser } from "../../services/authService";

export default function JobDetails() {
  const { id } = useParams();

  const jobs = getApprovedJobs();
  const user = getLoggedInUser();

  const backLink =
    user?.role === "freelancer" ? "/freelancer/browse-jobs" : "/findjobs";

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Job Not Found</h1>
      </div>
    );
  }

  const handleApply = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
      alert("Please login first.");
      return;
    }

    if (user.role !== "freelancer") {
      alert("Only freelancers can apply for jobs.");
      return;
    }

    const result = createApplication(job);

    if (result.success) {
      alert("Application submitted successfully.");
    } else {
      alert(result.message);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10 outfit">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to={backLink}
          className="text-amber-600 font-semibold hover:underline"
        >
          ← Back to Jobs
        </Link>

        <div className="bg-white shadow-lg rounded-2xl mt-6 p-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-3">{job.title}</h1>

              <p className="text-xl text-gray-600 mb-5">{job.company}</p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  {job.location}
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  {job.category}
                </span>

                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  {job.experience}
                </span>

                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  {job.jobType}
                </span>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 text-center min-w-[240px]">
              <h2 className="text-lg font-semibold mb-2">Salary</h2>

              <p className="text-4xl font-bold text-amber-600">
                ₹{job.salary.toLocaleString()}
              </p>

              <p className="mt-4 text-gray-600">
                <strong>Vacancies:</strong> {job.vacancies}
              </p>

              <p className="text-gray-600">
                <strong>Deadline:</strong> {job.deadline}
              </p>

              <button
                onClick={handleApply}
                className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Apply Now
              </button>
            </div>
          </div>

          <hr className="my-10" />

          <div>
            <h2 className="text-2xl font-bold mb-4">Job Description</h2>

            <p className="text-gray-600 leading-8">{job.description}</p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">Required Skills</h2>

            <div className="flex flex-wrap gap-3">
              {job.skills?.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">Posted By</h2>

            <div className="bg-gray-100 rounded-xl p-5">
              <p>
                <strong>Client:</strong> {job.clientName}
              </p>

              <p>
                <strong>Posted On:</strong>{" "}
                {new Date(job.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

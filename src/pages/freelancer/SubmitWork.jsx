import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { submitWork } from "../../services/applicationService";

export default function SubmitWork() {
  const location = useLocation();
  const navigate = useNavigate();

  const application = location.state;

  const [projectUrl, setProjectUrl] = useState(application?.projectUrl || "");
  const [githubUrl, setGithubUrl] = useState(application?.githubUrl || "");
  const [message, setMessage] = useState(application?.message || "");

  if (!application) {
    return (
      <div className="p-4 sm:p-6">
        <h2 className="text-xl font-semibold">No Application Found</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    submitWork(application.id, projectUrl, githubUrl, message);

    alert("Project submitted successfully!");

    navigate("/freelancer/accepted-jobs");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 outfit">
      <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8">
        <div className="border-b pb-5 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {application.workStatus === "revision_requested"
              ? "Resubmit Project"
              : "Submit Project"}
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            {application.workStatus === "revision_requested"
              ? "The client requested changes. Update your work and submit it again."
              : "Send your completed work to the client for review."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Job</p>
            <h3 className="font-semibold break-words">
              {application.jobTitle}
            </h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Company</p>
            <h3 className="font-semibold break-words">{application.company}</h3>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Client</p>
            <h3 className="font-semibold break-words">
              {application.clientName}
            </h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Live Project URL</label>

              <input
                type="url"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://www.project.com"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                GitHub Repository
              </label>

              <input
                type="url"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://github.com/username/repository"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Message to Client</label>

            <textarea
              rows={6}
              className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Describe what you have completed, include login credentials if required, or mention anything the client should know."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              {application.workStatus === "revision_requested"
                ? "Resubmit Project"
                : "Submit Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFreelancerApplications } from "../../services/applicationService";

export default function AcceptedJobs() {
  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    const accepted = getFreelancerApplications().filter(
      (application) => application.status === "accepted",
    );

    setAcceptedJobs(accepted);
  };

  return (
    <div className="outfit">
      <h1 className="text-3xl font-bold mb-6">Accepted Projects</h1>

      {acceptedJobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          No accepted projects yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Project</th>
                <th className="text-left p-4">Company</th>
                <th className="text-left p-4">Client</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {acceptedJobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="p-4">{job.jobTitle}</td>

                  <td className="p-4">{job.company}</td>

                  <td className="p-4">{job.clientName}</td>

                  <td className="p-4">
                    {job.workStatus === "accepted" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Ready to Submit
                      </span>
                    )}

                    {job.workStatus === "submitted" && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Submitted
                      </span>
                    )}

                    {job.workStatus === "revision_requested" && (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                        Revision Requested
                      </span>
                    )}

                    {job.workStatus === "completed" && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        Completed
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-center">
                    {(job.workStatus === "accepted" ||
                      job.workStatus === "revision_requested") && (
                      <button
                        onClick={() =>
                          navigate("/freelancer/submit-work", {
                            state: job,
                          })
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        {job.workStatus === "revision_requested"
                          ? "Resubmit"
                          : "Submit Work"}
                      </button>
                    )}

                    {job.workStatus === "submitted" && (
                      <button
                        disabled
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                      >
                        Waiting for Review
                      </button>
                    )}

                    {job.workStatus === "completed" && (
                      <button
                        disabled
                        className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                      >
                        Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

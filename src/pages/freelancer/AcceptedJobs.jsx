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
    <div className="p-2 sm:p-4 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Accepted Projects</h1>

      {acceptedJobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          No accepted projects yet.
        </div>
      ) : (
        <>
          <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
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
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          Ready to Submit
                        </span>
                      )}

                      {job.workStatus === "submitted" && (
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          Submitted
                        </span>
                      )}

                      {job.workStatus === "revision_requested" && (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          Revision Requested
                        </span>
                      )}

                      {job.workStatus === "completed" && (
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
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
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
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

          <div className="lg:hidden space-y-4">
            {acceptedJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow p-5">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Project</p>
                    <p className="font-semibold">{job.jobTitle}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Company</p>
                    <p>{job.company}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Client</p>
                    <p>{job.clientName}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Status</p>

                    {job.workStatus === "accepted" && (
                      <span className="inline-block mt-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Ready to Submit
                      </span>
                    )}

                    {job.workStatus === "submitted" && (
                      <span className="inline-block mt-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Submitted
                      </span>
                    )}

                    {job.workStatus === "revision_requested" && (
                      <span className="inline-block mt-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        Revision Requested
                      </span>
                    )}

                    {job.workStatus === "completed" && (
                      <span className="inline-block mt-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        Completed
                      </span>
                    )}
                  </div>

                  <div className="pt-2">
                    {(job.workStatus === "accepted" ||
                      job.workStatus === "revision_requested") && (
                      <button
                        onClick={() =>
                          navigate("/freelancer/submit-work", {
                            state: job,
                          })
                        }
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                      >
                        {job.workStatus === "revision_requested"
                          ? "Resubmit Work"
                          : "Submit Work"}
                      </button>
                    )}

                    {job.workStatus === "submitted" && (
                      <button
                        disabled
                        className="w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed"
                      >
                        Waiting for Review
                      </button>
                    )}

                    {job.workStatus === "completed" && (
                      <button
                        disabled
                        className="w-full bg-green-600 text-white py-2 rounded-lg cursor-not-allowed"
                      >
                        Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {acceptedJobs.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No accepted projects.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

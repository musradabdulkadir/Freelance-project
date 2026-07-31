import { useEffect, useState } from "react";
import {
  getClientApplications,
  acceptApplication,
  rejectApplication,
  approveWork,
  requestRevision,
} from "../../services/applicationService";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const loadApplications = () => {
    setApplications(getClientApplications());
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const handleAccept = (id) => {
    acceptApplication(id);
    loadApplications();
  };

  const handleReject = (id) => {
    rejectApplication(id);
    loadApplications();
  };

  const handleApproveWork = (id) => {
    approveWork(id);
    loadApplications();
    setSelectedApplication(null);
  };

  const handleRevision = (id) => {
    requestRevision(id);
    loadApplications();
    setSelectedApplication(null);
  };

  return (
    <div className="p-2 sm:p-4 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Job Applications</h1>

      {applications.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          No applications received yet.
        </div>
      ) : (
        <>
          <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Job</th>
                  <th className="text-left p-4">Freelancer</th>
                  <th className="text-left p-4">Applied On</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id} className="border-t">
                    <td className="p-4">{application.jobTitle}</td>

                    <td className="p-4">{application.freelancerName}</td>

                    <td className="p-4">
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          application.status === "accepted"
                            ? "bg-green-100 text-green-700"
                            : application.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center">
                        {application.status === "pending" ? (
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleAccept(application.id)}
                              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                            >
                              Accept
                            </button>

                            <button
                              onClick={() => handleReject(application.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                              Reject
                            </button>
                          </div>
                        ) : application.workStatus === "submitted" ? (
                          <button
                            onClick={() => setSelectedApplication(application)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                          >
                            View Submission
                          </button>
                        ) : application.workStatus === "completed" ? (
                          <span className="text-green-600 font-semibold">
                            Project Completed
                          </span>
                        ) : application.workStatus === "revision_requested" ? (
                          <span className="text-yellow-600 font-semibold">
                            Revision Requested
                          </span>
                        ) : application.status === "rejected" ? (
                          <span className="text-red-600 font-semibold">
                            Rejected
                          </span>
                        ) : (
                          <span className="text-gray-500">
                            Waiting for Submission
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="bg-white rounded-xl shadow p-5"
              >
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Job</p>
                    <p className="font-semibold">{application.jobTitle}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Freelancer</p>
                    <p>{application.freelancerName}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Applied On</p>
                    <p>
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Status</p>

                    <span
                      className={`inline-block mt-1 px-3 py-1 rounded-full text-sm ${
                        application.status === "accepted"
                          ? "bg-green-100 text-green-700"
                          : application.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {application.status}
                    </span>
                  </div>

                  <div className="pt-2">
                    {application.status === "pending" ? (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleAccept(application.id)}
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                        >
                          Accept
                        </button>

                        <button
                          onClick={() => handleReject(application.id)}
                          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                        >
                          Reject
                        </button>
                      </div>
                    ) : application.workStatus === "submitted" ? (
                      <button
                        onClick={() => setSelectedApplication(application)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                      >
                        View Submission
                      </button>
                    ) : application.workStatus === "completed" ? (
                      <span className="text-green-600 font-semibold">
                        Project Completed
                      </span>
                    ) : application.workStatus === "revision_requested" ? (
                      <span className="text-yellow-600 font-semibold">
                        Revision Requested
                      </span>
                    ) : application.status === "rejected" ? (
                      <span className="text-red-600 font-semibold">
                        Rejected
                      </span>
                    ) : (
                      <span className="text-gray-500">
                        Waiting for Submission
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedApplication && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl sm:text-2xl font-bold">
                Submitted Project
              </h2>

              <button
                onClick={() => setSelectedApplication(null)}
                className="text-3xl text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Job</p>
                  <p className="font-semibold break-words">
                    {selectedApplication.jobTitle}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Freelancer</p>
                  <p className="font-semibold">
                    {selectedApplication.freelancerName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Live Project</p>

                  <a
                    href={selectedApplication.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    {selectedApplication.projectUrl}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    GitHub Repository
                  </p>

                  <a
                    href={selectedApplication.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    {selectedApplication.githubUrl}
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Message</p>

                <div className="bg-gray-100 rounded-xl p-4 whitespace-pre-wrap break-words">
                  {selectedApplication.message}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500">Submitted On</p>

                <p className="font-medium break-words">
                  {selectedApplication.submittedAt}
                </p>
              </div>
            </div>

            <div className="border-t p-5">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="w-full sm:w-auto px-5 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Close
                </button>

                <button
                  onClick={() => handleRevision(selectedApplication.id)}
                  className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg"
                >
                  Request Revision
                </button>

                <button
                  onClick={() => handleApproveWork(selectedApplication.id)}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                >
                  Approve Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

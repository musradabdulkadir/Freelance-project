import { useEffect, useState } from "react";
import { getFreelancerApplications } from "../../services/applicationService";

export default function AppliedJobs() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    setApplications(getFreelancerApplications());
  }, []);

  return (
    <div className="p-2 sm:p-4 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Applied Jobs</h1>

      {applications.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          You haven't applied for any jobs yet.
        </div>
      ) : (
        <>
          <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Job</th>
                  <th className="text-left p-4">Company</th>
                  <th className="text-left p-4">Client</th>
                  <th className="text-left p-4">Applied On</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id} className="border-t">
                    <td className="p-4">{application.jobTitle}</td>

                    <td className="p-4">{application.company}</td>

                    <td className="p-4">{application.clientName}</td>

                    <td className="p-4">
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
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
                    <p className="text-xs text-gray-500">Company</p>
                    <p>{application.company}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Client</p>
                    <p>{application.clientName}</p>
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
                      className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
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
                </div>
              </div>
            ))}

            {applications.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No applications found.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

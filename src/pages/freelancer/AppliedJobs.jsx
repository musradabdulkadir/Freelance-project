import { useEffect, useState } from "react";
import { getFreelancerApplications } from "../../services/applicationService";

export default function AppliedJobs() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    setApplications(getFreelancerApplications());
  }, []);

  return (
    <div className="outfit">
      <h1 className="text-3xl font-bold mb-6">Applied Jobs</h1>

      {applications.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          You haven't applied for any jobs yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
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
      )}
    </div>
  );
}

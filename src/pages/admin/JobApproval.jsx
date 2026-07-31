import { useEffect, useState } from "react";
import {
  getPendingJobs,
  approveJob,
  deleteJob,
} from "../../services/jobService";

export default function JobApproval() {
  const [jobs, setJobs] = useState([]);

  const loadJobs = () => {
    setJobs(getPendingJobs());
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleApprove = (id) => {
    approveJob(id);
    loadJobs();
  };

  const handleReject = (id) => {
    if (!window.confirm("Reject this job?")) return;

    deleteJob(id);
    loadJobs();
  };

  return (
    <div className="p-2 sm:p-4 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Job Approval</h1>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">No pending jobs.</div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Company</th>
                  <th className="text-left p-4">Client</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-t">
                    <td className="p-4">{job.title}</td>

                    <td className="p-4">{job.company}</td>

                    <td className="p-4">{job.clientName}</td>

                    <td className="p-4">{job.location}</td>

                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleApprove(job.id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(job.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow p-5">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Job Title</p>
                    <p className="font-semibold">{job.title}</p>
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
                    <p className="text-xs text-gray-500">Location</p>
                    <p>{job.location}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => handleApprove(job.id)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(job.id)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {jobs.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No pending jobs.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

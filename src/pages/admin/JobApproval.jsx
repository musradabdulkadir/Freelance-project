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
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Approval</h1>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">No pending jobs.</div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
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

                  <td className="p-4 flex justify-center gap-3">
                    <button
                      onClick={() => handleApprove(job.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(job.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Reject
                    </button>
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

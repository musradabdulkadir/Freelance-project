import { useEffect, useState } from "react";
import {
  getCurrentClientJobs,
  deleteJob,
} from "../../services/jobService";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  const loadJobs = () => {
    setJobs(getCurrentClientJobs());
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this job?")) return;

    deleteJob(id);
    loadJobs();
  };

  return (
    <div className="outfit">
      <h1 className="text-3xl font-bold mb-6">
        My Jobs
      </h1>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          You haven't posted any jobs yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Company</th>
                <th className="text-left p-4">Location</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="p-4">{job.title}</td>

                  <td className="p-4">{job.company}</td>

                  <td className="p-4">{job.location}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
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
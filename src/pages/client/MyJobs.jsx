import { useEffect, useState } from "react";
import { getCurrentClientJobs, deleteJob } from "../../services/jobService";

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
    <div className="p-2 sm:p-4 outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">My Jobs</h1>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          You haven't posted any jobs yet.
        </div>
      ) : (
        <>
          <div className="hidden lg:block bg-white rounded-xl shadow overflow-x-auto">
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
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
                    <p className="text-xs text-gray-500">Location</p>
                    <p>{job.location}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Status</p>

                    <span
                      className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
                        job.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDelete(job.id)}
                    className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                  >
                    Delete Job
                  </button>
                </div>
              </div>
            ))}

            {jobs.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No jobs found.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

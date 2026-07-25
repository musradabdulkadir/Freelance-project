export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-semibold">{job.title}</h2>

          <p className="text-gray-500">{job.company}</p>
        </div>

        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
          {job.location}
        </span>
      </div>

      <div className="space-y-2 text-gray-600 mb-5">
        <p>
          <strong>Category:</strong> {job.category}
        </p>

        <p>
          <strong>Experience:</strong> {job.experience}
        </p>

        <p>
          <strong>Budget:</strong> {job.budget}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
          View Details
        </button>

        <button className="border border-black px-5 py-2 rounded-xl hover:bg-black hover:text-white transition">
          Apply
        </button>
      </div>
    </div>
  );
}

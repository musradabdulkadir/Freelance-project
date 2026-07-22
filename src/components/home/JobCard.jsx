export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>

          <p className="text-gray-500">{job.company}</p>
        </div>

        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
          {job.location}
        </span>
      </div>

      <p className="text-lg font-bold text-gray-800 mb-4">{job.budget}</p>

      <div className="flex flex-wrap gap-2 mb-5">
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
        <p className="text-gray-500 text-sm">Posted {job.posted}</p>

        <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl transition">
          Apply
        </button>
      </div>
    </div>
  );
}

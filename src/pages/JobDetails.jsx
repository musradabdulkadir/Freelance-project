import { Link, useParams } from "react-router-dom";
import jobs from "../data/jobs";

export default function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Job Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-10 outfit">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/findjobs"
          className="text-amber-600 font-semibold hover:underline"
        >
          ← Back to Jobs
        </Link>

        <div className="bg-white shadow-lg rounded-2xl mt-6 p-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-3">{job.title}</h1>

              <p className="text-xl text-gray-600 mb-5">{job.company}</p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                   {job.location}
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  {job.category}
                </span>

                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  {job.experience}
                </span>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 text-center min-w-[220px]">
              <h2 className="text-lg font-semibold mb-2">Project Budget</h2>

              <p className="text-4xl font-bold text-amber-600">
                ${job.budget.toLocaleString()}
              </p>

              <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                Apply Now
              </button>
            </div>
          </div>

          <hr className="my-10" />

          <div>
            <h2 className="text-2xl font-bold mb-4">Job Description</h2>

            <p className="text-gray-600 leading-8">
              We are looking for a talented professional to join our team and
              help us deliver high-quality work. The ideal candidate should have
              strong communication skills, attention to detail, and experience
              working with modern technologies. You will collaborate with
              designers, developers, and project managers to build scalable and
              user-friendly solutions.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">Required Skills</h2>

            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">Requirements</h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Excellent communication skills.</li>

              <li>Ability to meet deadlines.</li>

              <li>Experience with the required technologies.</li>

              <li>Team player with problem-solving skills.</li>

              <li>Passion for delivering quality work.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

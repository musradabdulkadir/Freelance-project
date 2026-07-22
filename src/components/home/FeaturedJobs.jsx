import JobCard from "./JobCard";
import jobs from "../../data/jobs";

export default function FeaturedJobs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 outfit">
            Featured Jobs
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto outfit">
            Explore exciting freelance opportunities from companies around the
            world and find the perfect project that matches your skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 outfit">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl transition outfit">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
}

import SearchBar from "../components/jobs/SearchBar";
import Filters from "../components/jobs/Filters";
import JobList from "../components/jobs/JobList";

export default function FindJobs() {
  return (
    <section className="bg-amber-50 min-h-screen py-12 outfit">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold outfit mb-4">
            Find Your Dream Job
          </h1>

          <p className="text-gray-600">
            Search thousands of freelance opportunities.
          </p>
        </div>

        <SearchBar />

        <Filters />

        <JobList />
      </div>
    </section>
  );
}

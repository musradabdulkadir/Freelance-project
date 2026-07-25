import jobs from "../../data/jobs";
import JobCard from "./JobCard";

export default function JobList() {
  return (
    <section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}

      </div>

    </section>
  );
}
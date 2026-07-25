import jobs from "../../data/jobs";
import JobCard from "./JobCard";

export default function JobList({ category, location, experience, budget }) {
  const filteredJobs = jobs.filter((job) => {
    const categoryMatch = category === "" || job.category === category;

    const locationMatch = location === "" || job.location === location;

    const experienceMatch = experience === "" || job.experience === experience;

    let budgetMatch = true;

    if (budget === "0-500") {
      budgetMatch = job.budget >= 0 && job.budget <= 500;
    } else if (budget === "501-1000") {
      budgetMatch = job.budget >= 501 && job.budget <= 1000;
    } else if (budget === "1001-2000") {
      budgetMatch = job.budget >= 1001 && job.budget <= 2000;
    } else if (budget === "2000+") {
      budgetMatch = job.budget > 2000;
    }

    return categoryMatch && locationMatch && experienceMatch && budgetMatch;
  });

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

import jobs from "../../data/jobs";
import JobCard from "./JobCard";

export default function JobList({
  category,
  location,
  experience,
  budget,
  search,
  sortBy,
}) {
  // Filter Jobs
  const filteredJobs = jobs.filter((job) => {
    // Category
    const categoryMatch = category === "" || job.category === category;

    // Location
    const locationMatch = location === "" || job.location === location;

    // Experience
    const experienceMatch = experience === "" || job.experience === experience;

    // Budget
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

    // Search
    const searchMatch =
      search === "" ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase()),
      );

    return (
      categoryMatch &&
      locationMatch &&
      experienceMatch &&
      budgetMatch &&
      searchMatch
    );
  });

  // Sort Jobs
  const sortedJobs = [...filteredJobs];

  if (sortBy === "budget-high") {
    sortedJobs.sort((a, b) => b.budget - a.budget);
  } else if (sortBy === "budget-low") {
    sortedJobs.sort((a, b) => a.budget - b.budget);
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

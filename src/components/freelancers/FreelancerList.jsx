import freelancers from "../../data/freelancers";
import FreelancerCard from "./FreelancerCard";

export default function FreelancerList({
  search,
  location,
  experience,
  skill,
  sortBy,
}) {
  const filteredFreelancers = freelancers.filter((freelancer) => {
    // Search
    const searchMatch =
      search === "" ||
      freelancer.name.toLowerCase().includes(search.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(search.toLowerCase()) ||
      freelancer.skills.some((item) =>
        item.toLowerCase().includes(search.toLowerCase()),
      );

    // Location
    const locationMatch = location === "" || freelancer.location === location;

    // Experience
    const experienceMatch =
      experience === "" || freelancer.experience === experience;

    // Skill
    const skillMatch = skill === "" || freelancer.skills.includes(skill);

    return searchMatch && locationMatch && experienceMatch && skillMatch;
  });

  const sortedFreelancers = [...filteredFreelancers];

  if (sortBy === "rate-high") {
    sortedFreelancers.sort((a, b) => b.hourlyRate - a.hourlyRate);
  } else if (sortBy === "rate-low") {
    sortedFreelancers.sort((a, b) => a.hourlyRate - b.hourlyRate);
  } else if (sortBy === "rating") {
    sortedFreelancers.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedFreelancers.map((freelancer) => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </section>
  );
}

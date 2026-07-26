import { useState } from "react";

import SearchBar from "../components/freelancers/SearchBar";
import Filters from "../components/freelancers/Filters";
import FreelancerList from "../components/freelancers/FreelancerList";

export default function Freelancers() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [skill, setSkill] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <section className="bg-gray-50 min-h-screen py-10 outfit">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">
          <h1 className="text-5xl font-bold outfit">Find Freelancers</h1>

          <p className="text-gray-600 mt-3">
            Discover talented professionals from around the world and hire the
            perfect freelancer for your next project.
          </p>
        </div>


        <SearchBar search={search} setSearch={setSearch} />


        <Filters
          location={location}
          setLocation={setLocation}
          experience={experience}
          setExperience={setExperience}
          skill={skill}
          setSkill={setSkill}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />


        <FreelancerList
          search={search}
          location={location}
          experience={experience}
          skill={skill}
          sortBy={sortBy}
        />
      </div>
    </section>
  );
}

import SearchBar from "../../components/jobs/SearchBar";
import Filters from "../../components/jobs/Filters";
import JobList from "../../components/jobs/JobList";
import { useState } from "react";

export default function FindJobs() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [budget, setBudget] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
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

        <SearchBar search={search} setSearch={setSearch} />

        <Filters
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          experience={experience}
          setExperience={setExperience}
          budget={budget}
          setBudget={setBudget}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <JobList
          category={category}
          location={location}
          experience={experience}
          budget={budget}
          sortBy={sortBy}
          search={search}
        />
      </div>
    </section>
  );
}

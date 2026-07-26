export default function Filters({
  category,
  setCategory,
  location,
  setLocation,
  experience,
  setExperience,
  budget,
  setBudget,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-10 outfit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Content Writing">Content Writing</option>
          <option value="Video Editing">Video Editing</option>
          <option value="App Development">App Development</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="DevOps">DevOps</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="South Korea">South Korea</option>
        </select>

        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="Junior">Junior</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior">Senior</option>
        </select>

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Budgets</option>
          <option value="0-500">$0 - $500</option>
          <option value="501-1000">$501 - $1,000</option>
          <option value="1001-2000">$1,001 - $2,000</option>
          <option value="2000+">Above $2,000</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Sort By</option>
          <option value="budget-high">Budget: High to Low</option>
          <option value="budget-low">Budget: Low to High</option>
        </select>
      </div>
    </div>
  );
}

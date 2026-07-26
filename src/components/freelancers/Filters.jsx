export default function Filters({
  location,
  setLocation,
  experience,
  setExperience,
  skill,
  setSkill,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="UK">United Kingdom</option>
        </select>


        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Experience</option>
          <option value="Junior">Junior</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior">Senior</option>
        </select>


        <select
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">All Skills</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Flutter">Flutter</option>
          <option value="Java">Java</option>
          <option value="Laravel">Laravel</option>
          <option value="Vue.js">Vue.js</option>
          <option value="SEO">SEO</option>
          <option value="Figma">Figma</option>
        </select>


        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Sort By</option>
          <option value="rate-high">Highest Hourly Rate</option>
          <option value="rate-low">Lowest Hourly Rate</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>
    </div>
  );
}

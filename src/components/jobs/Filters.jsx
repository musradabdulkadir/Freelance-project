export default function Filters() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-10 outfit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Category */}

        <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500">
          <option value="">All Categories</option>
          <option value="web">Web Development</option>
          <option value="design">Graphic Design</option>
          <option value="marketing">Digital Marketing</option>
          <option value="writing">Content Writing</option>
          <option value="video">Video Editing</option>
        </select>

        {/* Location */}

        <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500">
          <option value="">All Locations</option>
          <option value="remote">Remote</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">United Kingdom</option>
        </select>

        {/* Experience */}

        <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500">
          <option value="">Experience</option>
          <option value="fresher">Fresher</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior</option>
        </select>

        {/* Budget */}

        <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500">
          <option value="">Budget</option>
          <option value="0-500">$0 - $500</option>
          <option value="500-1000">$500 - $1,000</option>
          <option value="1000-5000">$1,000 - $5,000</option>
          <option value="5000+">$5,000+</option>
        </select>

        {/* Sort */}

        <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500">
          <option value="">Sort By</option>
          <option value="latest">Latest</option>
          <option value="budget-high">Budget: High to Low</option>
          <option value="budget-low">Budget: Low to High</option>
        </select>
      </div>
    </div>
  );
}

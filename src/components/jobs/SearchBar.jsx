import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8 outfit">
      <form className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search jobs by title, skill or company..."
          className="flex-1 border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl transition flex items-center justify-center gap-2"
        >
          <FaSearch />
          Search
        </button>
      </form>
    </div>
  );
}

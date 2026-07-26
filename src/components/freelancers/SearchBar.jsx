import { FaSearch } from "react-icons/fa";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row gap-4"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by freelancer name, title or skill..."
          className="flex-1 border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        <button
          type="submit"
          className="bg-amber-500 text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-600 transition"
        >
          <FaSearch />
          Search
        </button>
      </form>
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function FreelancerCard({ freelancer }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      <div className="flex justify-center pt-8">
        <img
          src={freelancer.image}
          alt={freelancer.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-amber-400"
        />
      </div>


      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold outfit">{freelancer.name}</h2>

        <p className="text-gray-500 mt-1">{freelancer.title}</p>


        <div className="flex justify-center items-center gap-2 mt-4">
          <FaStar className="text-yellow-500" />

          <span className="font-semibold">{freelancer.rating}</span>
        </div>


        <div className="flex justify-center items-center gap-2 mt-3 text-gray-600">
          <FaMapMarkerAlt />

          <span>{freelancer.location}</span>
        </div>


        <div className="flex justify-center items-center gap-2 mt-3 text-gray-600">
          <FaBriefcase />

          <span>{freelancer.completedProjects} Projects</span>
        </div>


        <div className="mt-5">
          <span className="text-3xl font-bold text-amber-600">
            ${freelancer.hourlyRate}
          </span>

          <span className="text-gray-500"> /hr</span>
        </div>


        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {freelancer.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>


        <Link
          to={`/freelancers/${freelancer.id}`}
          className="block mt-8 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

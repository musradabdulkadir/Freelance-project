import { Link, useParams } from "react-router-dom";
import freelancers from "../data/freelancers";

export default function FreelancerDetails() {
  const { id } = useParams();

  const freelancer = freelancers.find(
    (freelancer) => freelancer.id === Number(id),
  );

  if (!freelancer) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Freelancer Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-10 outfit">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/freelancers"
          className="text-amber-600 font-semibold hover:underline"
        >
          ← Back to Freelancers
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3 flex flex-col items-center">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-amber-400"
              />

              <h1 className="text-3xl font-bold mt-6">{freelancer.name}</h1>

              <p className="text-gray-500 mt-2">{freelancer.title}</p>

              <button className="w-full mt-8 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                Hire Now
              </button>
            </div>

            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6">
                About Freelancer
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-5 rounded-xl">
                  <h3 className="font-semibold">Location</h3>
                  <p>{freelancer.location}</p>
                </div>

                <div className="bg-gray-100 p-5 rounded-xl">
                  <h3 className="font-semibold">Experience</h3>
                  <p>{freelancer.experience}</p>
                </div>

                <div className="bg-gray-100 p-5 rounded-xl">
                  <h3 className="font-semibold">Hourly Rate</h3>
                  <p>${freelancer.hourlyRate}/hr</p>
                </div>

                <div className="bg-gray-100 p-5 rounded-xl">
                  <h3 className="font-semibold">Rating</h3>
                  <p> {freelancer.rating}</p>
                </div>

                <div className="bg-gray-100 p-5 rounded-xl md:col-span-2">
                  <h3 className="font-semibold">Completed Projects</h3>
                  <p>{freelancer.completedProjects} Projects</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p>{freelancer.about}</p>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>

                <div className="flex flex-wrap gap-3">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

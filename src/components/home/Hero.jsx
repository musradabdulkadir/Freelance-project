import heroImage from "../../assets/images/heroimg.jpg";

export default function Hero() {
  return (
    <section className="bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="outfit">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6 outfit">
              Connect.
              <br />
              Collaborate.
              <br />
              Create.
            </h1>

            <p className="text-gray-600 text-sm leading-8 max-w-xl mb-10">
              Connect with skilled freelancers or discover exciting
              opportunities. SkillBridge helps businesses and professionals work
              together, build amazing projects, and grow their careers.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Freelancer working on laptop"
              className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

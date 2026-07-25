export default function CallToAction() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-10 lg:p-16 text-center text-white shadow-xl">

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 outfit">
            Ready to Start Your Freelancing Journey?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-amber-100 mb-10 outfit">
            Join thousands of freelancers and businesses using SkillBridge
            to build amazing projects, discover opportunities, and grow
            together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button className="outfit bg-white text-amber-600 hover:bg-gray-100 transition px-8 py-3 rounded-xl font-semibold">
              Join as Freelancer
            </button>

            <button className="border-2 outfit border-white hover:bg-white hover:text-amber-600 transition px-8 py-3 rounded-xl font-semibold">
              Hire Talent
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
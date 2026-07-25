import {
  FaUserPlus,
  FaBriefcase,
  FaHandshake,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: FaUserPlus,
    title: "Create an Account",
    description:
      "Sign up as a client or freelancer and build your professional profile.",
  },
  {
    id: 2,
    icon: FaBriefcase,
    title: "Post or Find Jobs",
    description:
      "Clients post projects while freelancers explore opportunities that match their skills.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Collaborate",
    description:
      "Discuss project requirements, communicate, and work together seamlessly.",
  },
  {
    id: 4,
    icon: FaMoneyCheckAlt,
    title: "Get Paid",
    description:
      "Complete the project successfully and receive secure payments.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 outfit">
            How SkillBridge Works
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto outfit">
            Getting started is simple. Follow these four easy steps and begin
            your freelancing journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 outfit cursor-pointer">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-200"
              >
                <div className="bg-amber-100 w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-amber-600 text-4xl" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

                <p className="text-gray-600 leading-7">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

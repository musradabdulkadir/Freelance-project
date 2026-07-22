import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 p-8">

      <div className="flex items-center gap-4 mb-5">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-xl">
            {testimonial.name}
          </h3>

          <p className="text-gray-500">
            {testimonial.role}
          </p>
        </div>

      </div>

      <div className="flex gap-1 text-amber-500 mb-5">

        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}

      </div>

      <p className="text-gray-600 leading-7 italic">
        "{testimonial.review}"
      </p>

    </div>
  );
}
export default function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer border border-gray-200">
      <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-5">
        <Icon className="text-amber-600 text-3xl" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {category.name}
      </h3>

      <p className="text-gray-500">
        {category.jobs}+ Jobs Available
      </p>
    </div>
  );
}
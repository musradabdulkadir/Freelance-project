import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 outfit">
            Browse Categories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto outfit">
            Discover opportunities across different industries and
            choose the category that matches your skills.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 outfit">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
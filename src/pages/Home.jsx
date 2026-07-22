import Categories from "../components/home/Categories";
import FeaturedJobs from "../components/home/featuredJobs";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <Categories />
    </div>
  );
}

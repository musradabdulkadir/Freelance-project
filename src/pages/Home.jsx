import CallToAction from "../components/home/CallToAction";
import Categories from "../components/home/Categories";
import FeaturedJobs from "../components/home/featuredJobs";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItsWorks";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

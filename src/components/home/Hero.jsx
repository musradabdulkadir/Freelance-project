import heroImage from "../../assets/images/heroimg.jpg";

export default function Hero() {
  return (
    <section className="bg-amber-100 flex flex-col lg:flex-row rounded-2xl justify-between items-center m-10 max-w-7xl mx-auto px-5 py-10 ">
      <div className="bg-amber-300 rounded-2xl flex-1 p-8 lg:p-20  flex flex-col justify-center">
        <h1 className="text-4xl lg:text-7xl leading-tight mb-3 outfit">
          Connect.
          <br />
          Collaborate.
          <br />
          Create.
        </h1>
        <p className="outfit text-sm leading-6">
          Connect with skilled freelancers or discover exciting opportunities.
          SkillBridge brings clients and professionals together to build amazing
          projects with confidence.
        </p>
      </div>

      <div className=" rounded-2xl flex-1 p-8 lg:p-20 flex flex-col justify-center">
        <img
          className="w-full rounded-3xl object-cover shadow-lg"
          src={heroImage}
          alt="Freelancer working on laptop"
        />
      </div>
    </section>
  );
}

export default function Navbar() {
  return (
    <div className="bg-amber-100 p-3 flex justify-between">
      <div>
        <p className="text-4xl font-bold outfit">SkillBridge</p>
      </div>
      <div className="items-center justify-center outfit">
        <a className="ml-3 mr-3 text-lg" href="#">
          Home
        </a>
        <a className="ml-3 mr-3 text-lg" href="#">
          Job Finds
        </a>
        <a className="ml-3 mr-3 text-lg" href="#">
          Freelance
        </a>
        <a className="ml-3 mr-3 text-lg" href="#">
          About
        </a>
      </div>
      <div>
        <button className="bg-black text-white px-4 py-1 text-lg rounded-3xl mr-3 outfit">Login</button>
        <button className="bg-black text-white px-4 py-1 text-lg rounded-3xl mr-3 outfit">Register</button>
      </div>
    </div>
  );
}

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 outfit">
          <h2 className="text-3xl font-bold text-amber-400 mb-4 outfit">
            SkillBridge
          </h2>

          <p className="text-gray-400 leading-7 max-w-md">
            Connecting talented freelancers with businesses around the world.
            Build projects, discover opportunities, and grow together with
            SkillBridge.
          </p>
        </div>

        <div className="outfit">
          <h3 className="font-semibold text-xl mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-amber-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-amber-400 cursor-pointer transition">
              Find Jobs
            </li>

            <li className="hover:text-amber-400 cursor-pointer transition">
              Categories
            </li>

            <li className="hover:text-amber-400 cursor-pointer transition">
              About
            </li>
          </ul>
        </div>

        <div className="outfit">
          <h3 className="font-semibold text-xl mb-5">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-amber-400 cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-amber-400 cursor-pointer transition">
              Careers
            </li>

            <li className="hover:text-amber-400 cursor-pointer transition">
              Contact
            </li>

            <li className="hover:text-amber-400 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="outfit">
          <h3 className="font-semibold text-xl mb-5 ">Follow Us</h3>

          <div className="flex gap-4">
            <div className="bg-gray-800 hover:bg-amber-500 transition w-11 h-11 rounded-full flex justify-center items-center cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="bg-gray-800 hover:bg-amber-500 transition w-11 h-11 rounded-full flex justify-center items-center cursor-pointer">
              <FaInstagram />
            </div>

            <div className="bg-gray-800 hover:bg-amber-500 transition w-11 h-11 rounded-full flex justify-center items-center cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="bg-gray-800 hover:bg-amber-500 transition w-11 h-11 rounded-full flex justify-center items-center cursor-pointer">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 text-center">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between ">
          <p className="text-gray-400 text-sm outfit">
            © 2026 SkillBridge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

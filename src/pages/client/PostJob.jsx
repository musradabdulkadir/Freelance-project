import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createJob } from "../../services/jobService";

export default function PostJob() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.salary = Number(data.salary);
    data.vacancies = Number(data.vacancies);

    data.skills = data.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    createJob(data);

    alert("Job submitted successfully.\nWaiting for Admin approval.");

    navigate("/client/my-jobs");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 outfit">
      <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Job Title */}
        <div>
          <label className="block mb-2 font-medium">Job Title</label>

          <input
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Frontend React Developer"
            {...register("title", {
              required: "Job title is required",
            })}
          />

          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Company & Category */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Company</label>

            <input
              className="w-full border rounded-lg px-4 py-3"
              {...register("company", {
                required: "Company is required",
              })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Category</label>

            <select
              className="w-full border rounded-lg px-4 py-3"
              {...register("category")}
            >
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>UI/UX Design</option>
              <option>Graphic Design</option>
              <option>Digital Marketing</option>
              <option>Content Writing</option>
            </select>
          </div>
        </div>

        {/* Location & Experience */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Location</label>

            <input
              className="w-full border rounded-lg px-4 py-3"
              {...register("location", {
                required: "Location is required",
              })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Experience</label>

            <select
              className="w-full border rounded-lg px-4 py-3"
              {...register("experience")}
            >
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
        </div>

        {/* Job Type & Salary */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Job Type</label>

            <select
              className="w-full border rounded-lg px-4 py-3"
              {...register("jobType")}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Remote</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Salary (₹)</label>

            <input
              type="number"
              className="w-full border rounded-lg px-4 py-3"
              {...register("salary", {
                required: "Salary is required",
              })}
            />
          </div>
        </div>

        {/* Vacancies & Deadline */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Vacancies</label>

            <input
              type="number"
              className="w-full border rounded-lg px-4 py-3"
              {...register("vacancies")}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Application Deadline
            </label>

            <input
              type="date"
              className="w-full border rounded-lg px-4 py-3"
              {...register("deadline")}
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-2 font-medium">
            Skills (comma separated)
          </label>

          <input
            className="w-full border rounded-lg px-4 py-3"
            placeholder="React, JavaScript, Tailwind CSS"
            {...register("skills")}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Job Description</label>

          <textarea
            rows={6}
            className="w-full border rounded-lg px-4 py-3"
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
          Post Job
        </button>
      </form>
    </div>
  );
}

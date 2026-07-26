import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please register first.");
      return;
    }

    if (data.email === user.email && data.password === user.password) {
      // Store login status
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      alert("Login Successful!");

      if (user.role === "client") {
        navigate("/client");
      } else if (user.role === "freelancer") {
        navigate("/freelancer");
      }
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section className="min-h-screen bg-amber-50 flex justify-center items-center px-6 py-12 outfit">
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2">Welcome Back</h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your SkillBridge account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="#" className="text-amber-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-amber-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

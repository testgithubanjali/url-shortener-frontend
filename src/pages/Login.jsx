import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../services/auth";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      localStorage.setItem("token", response.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.error || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}

      <div className="hidden lg:flex items-center justify-center bg-blue-600 text-white">
        <div className="max-w-md px-8">
          <h1 className="text-5xl font-bold">
            URL Shortener
          </h1>

          <p className="mt-6 text-lg leading-8">
            Shorten, manage and analyze your URLs using Go,
            PostgreSQL, Redis and Kubernetes.
          </p>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">

          <h2 className="text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="mt-2 text-gray-500">
            Login to continue
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              error={errors.password}
            />

            <Button>
              Login
            </Button>

          </form>

          <p className="mt-6 text-center text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
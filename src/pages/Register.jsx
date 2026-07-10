import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../services/auth";

function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {

            await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            });

            toast.success("Registration Successful");

            navigate("/");

        } catch (error) {

            toast.error(
                error.response?.data?.error || "Registration Failed"
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
                        Create your account to shorten, manage and analyze
                        your URLs with a secure, production-ready platform.
                    </p>

                </div>

            </div>

            {/* Right Side */}

            <div className="flex items-center justify-center bg-white">

                <div className="w-full max-w-md p-8">

                    <h2 className="text-3xl font-bold">
                        Create Account
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Register to get started
                    </p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 space-y-5"
                    >

                        <Input
                            label="Full Name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            register={register}
                            error={errors.name}
                        />

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
                            placeholder="Create password"
                            register={register}
                            error={errors.password}
                        />

                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            register={register}
                            error={errors.confirmPassword}
                        />

                        <Button>
                            Register
                        </Button>

                    </form>

                    <p className="mt-6 text-center text-gray-600">

                        Already have an account?{" "}

                        <Link
                            to="/"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default Register;
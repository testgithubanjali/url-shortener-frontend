import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../components/Input";
import Button from "../components/Button";

function Login() {

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return(

        <div className="min-h-screen grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="hidden lg:flex items-center justify-center bg-blue-600 text-white">

                <div className="max-w-md">

                    <h1 className="text-5xl font-bold">
                        URL Shortener
                    </h1>

                    <p className="mt-6 text-lg leading-8">

                        Shorten, manage and analyze your URLs with a production-ready platform built using Go, PostgreSQL, Redis and Kubernetes.

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
                            placeholder="Enter email"
                            register={register}
                            error={errors.email}
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            register={register}
                            error={errors.password}
                        />

                        <Button>

                            Login

                        </Button>

                    </form>

                    <p className="mt-6 text-center">

                        Don't have an account?{" "}

                        <Link
                            to="/register"
                            className="font-semibold text-blue-600"
                        >

                            Register

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    )

}

export default Login;
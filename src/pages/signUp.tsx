import auth from "@/firebase/firebase.auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

type SignupFormValues = {
  email: string;
  password: string;
};

function Signup() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const onSubmit = async (data: SignupFormValues) => {
    // Handle form submission here if needed
    createUserWithEmailAndPassword(data.email, data.password);
  };

  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center mb-3">Already have account</p>
          <Link
            href="/login"
            className="hover:bg-slate-400 text-center block px-4 py-2 text-gray-900 bg-gray-200 dark:text-white dark:hover:bg-gray-800"
          >
            login
          </Link>
          <br />
          <p className="text-center text-gray-700"> sign up with:</p>
          <div className="flex justify-center mt-2 gap-5">
            <button
              onClick={() =>
                signIn("github", { callbackUrl: "http://localhost:3000/" })
              }
            >
              <Image
                src="/github-logo.png"
                width={50}
                height={50}
                alt="GitHub"
              />
            </button>

            <button
              onClick={() =>
                signIn("google", { callbackUrl: "http://localhost:3000/" })
              }
            >
              <Image src="/google.png" width={50} height={50} alt="Google" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

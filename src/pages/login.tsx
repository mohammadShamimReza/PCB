import { signIn } from "next-auth/react";
import Image from "next/image";

function login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-gray-700">Or sign in with:</p>
          <div className="flex justify-center mt-2 gap-5">
            <button
              onClick={() =>
                signIn("github", { callbackUrl: "http://localhost:3000/" })
              }
            >
              <Image src="/github-logo.png" width={50} height={50} alt="" />
            </button>

            <button>
              <Image
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000/" })
                }
                src="/google.png"
                width={50}
                height={50}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

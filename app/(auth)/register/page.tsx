"use client"
import Link from "next/link";
import { useActionState } from "react";
import register from "@/app/actions/auth";

export default function RegisterPage() {
    const [state,action,isPending]=useActionState(register,undefined);
    return (
        <div className="w-3/5 m-auto flex justify-center items-cener bg-white rounded shadow-full mt-8 p-4">
       
        <form action={action}className="space-y-6">
            <div> <h1 className="text-2xl font-extralight">Register here</h1></div>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                autoComplete="name"
                required
              />
              <p className="text-red">{state?.errors?.name?.[0]}</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
              </label>
              <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              autoComplete="email"
              required
              />
                          <p className="text-red">{state?.errors?.email?.[0]}</p>
            </div>
            </div>
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              autoComplete="new-password"
              required
            />
             <p className="text-red">{state?.errors?.password?.[0]}</p>
            </div>
            <div>
            <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              autoComplete="new-password"
              required
            />
                        <p className="text-red">{state?.errors?.confirm?.[0]}</p>
            </div>
            <div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-5 shadow-2xl w-full rounded-2xl"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Register"}
            </button>
            <br />
            <h4 className="text-slate-600 font-extralight">
              Already have an account?{" "}
              <Link href="/">
              <span className="text-blue-800 p-4">Login here</span>
              </Link>
            </h4>
            </div>
        </form>
        </div>
    );
}


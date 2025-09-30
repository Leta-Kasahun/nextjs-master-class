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
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text"name="name" />
          </div>
   <div>
            <label htmlFor="email">Email: </label>
            <input type="email"name="email" />
          </div>
   <div>
            <label htmlFor="password">Password: </label>
            <input type="password"name="password" />
          </div>
   <div>
            <label htmlFor="confirm">Confirm: </label>
            <input type="paswword" name="confirm" />
          </div>
    <div>
        <button type="submit" className="bg-blue-600 p-5 shadow-2x w-full rounded-2xl"disabled={isPending}>{isPending ? "Loading...":"Register"}<span className="text-white text-center">Register</span></button><br />
        <h4 className="text-slate-600 font-extralight">Already have an account ? <Link href="/"><span className="text-blue-800 p-4">Login here</span></Link></h4>
    </div>
        </form>
        </div>
    );
}


"use server"

import { promises } from "dns";
import { resolve } from "path";
import { registrationFormSchema } from "../lib/rules";

export default async function register(state: unknown, formData: FormData){
    
    // await new Promise(resolve=>setTimeout(resolve,3000));
    const validatedField=registrationFormSchema.safeParse({
    name:formData.get("name"),
    email:formData.get("email"),
    password:formData.get("password"),
    confirm:formData.get("confirm"),

    });
    if(!validatedField.success){
        return {
            errors:validatedField.error.flatten().fieldErrors,
        }
    }
    console.log(validatedField);
  
}
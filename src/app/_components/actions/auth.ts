"use server"

import { UserType } from "@/app/_types/user";
import axios from "axios";
import { redirect } from "next/navigation"; 
const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/user?email=${formData.get("email")}&password=${formData.get("password")}`
    );
    const user: UserType = response.data[0]; 

    if (!user) throw new Error("Invalid password or email");
    
    redirect("/contact"); 
  } catch (error) {
   console.log("login failed: ",error)
  }
}

export const logoutAction = async () => {
  redirect("/login"); }
import { cookies } from "next/headers";
import { UserType } from "../_types/user";

//set session cokie
export const setSession=async(user:UserType)=>{
   const cookieStore=await cookies()
    cookieStore.set("session",JSON.stringify(user),{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        maxAge:60*60*24*7,
        path:"/"
    })
}

//get session cokie

export const getSession=async(): Promise<UserType | null>=>{
   const cookieStore=await cookies()
   const session=cookieStore.get("session")?.value;
   if(!session)return null;
   const user=JSON.parse(session) as UserType;
   return user; 
}

// delete session cokie

export const deleteSession=async()=>{
    const cookieStore=await cookies()
    cookieStore.delete("session")
}
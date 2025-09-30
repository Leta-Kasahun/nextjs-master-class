import {email, z} from 'zod'
export const registrationFormSchema=z.object({
name: z.string().trim().min(1, { message: "Name field is required" }),
email: z.string().email({ message: "Invalid email address" }),
password:z.string().min(8,{message:"password at list 8 character"}).regex(/a-zA-Z/,{message:"password must be contains at least one character"}).regex(/[0-9]/,{message:"password must be contains one number"}).regex(/[^a-zA-Z0-9]/,{message:"password must contains one specail chacter"}),
confirm:z.string().trim(),

}).superRefine((val,ctx)=>{
    if(val.password!==val.confirm){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            message:"password is not matched",
            path:["confirm"]
        })
    }
})
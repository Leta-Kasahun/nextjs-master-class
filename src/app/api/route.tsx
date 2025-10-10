import { NextResponse } from "next/server";
import React from "react";
export const GET=()=>{
    return NextResponse.json(
        {
            message:"Hellow this is the API route from next js routing concepts",
            status:"congratulation success"
        }
    )
}
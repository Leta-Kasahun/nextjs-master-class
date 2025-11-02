"use client"
export default function Error({error}:{error:Error}){
    return (
        <div className="text-red-500">
            ⚠️ Error fetching products: {error.message}

        </div>
    )
}
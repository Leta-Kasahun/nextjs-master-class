import { Card,CardContent,CardHeader } from "@/components/ui/card";
export default async function AlbumLists(){
const res=await fetch("https://jsonplaceholder.typicode.com/albums");
if(!res.ok)throw new Error("Failed to fetch data");
const albums=await res.json();
return(
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
    {albums.map((album:{id:number,title:string})=>(
         <Card key={album.id} className="p-4 transition rounded shadow-md">

        <CardHeader>
  <h1 className="text-lg font-bold mb-2">{album.title}</h1>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600">{album.id}</p>
        </CardContent>
    </Card>
    ))}
   </div>
)


}
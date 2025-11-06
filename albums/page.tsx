import { Suspense } from "react";
import AlbumLists from "./AlbumLists";

export default function albuming(){
    return (
        <Suspense fallback={<div>Loading albums....</div>}>
            <AlbumLists/>

        </Suspense>
    )
}


//import the unsplash api key
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";

// function to fetch the unsplashed api
export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.json();

    // defining the width and height of the image
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <Image
                    src={image.urls.raw}
                    width={width}
                    height={height}
                    alt={image.description}
                />
            </div>
        </>
    );
}
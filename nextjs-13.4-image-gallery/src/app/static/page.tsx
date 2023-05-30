//import the unsplash api key
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";

// function to fetch the unsplashed api data as json & return an image
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
                    className="rounded shadow mw-100 h-100"
                />
                by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
            </div>
        </>
    );
}
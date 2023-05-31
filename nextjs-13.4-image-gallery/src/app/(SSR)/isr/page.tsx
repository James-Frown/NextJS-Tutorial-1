//import the unsplash api key
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

// defines the metadata of a webpage
export const metadata = {
    // This is the global Title & the fallback
    // can set different titles in sub pages later
    title: "Incremental Static Regeneration - NextJS Image Gallery",
}

// this tells next js how often to refresh the page
export const revalidate = 15;

// function to fetch the unsplashed api data as json & return an image
export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, 
    {
        // can also use the example below
        // next: { revalidate: 0 }
    });
    const image: UnsplashImage = await response.json();

    // defining the width and height of the image
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <Alert>
                    This page <strong>fetches incremental static regeneration </strong>
                     Only after 15 seconds you refresh the page, you get a new image from the Unspalsh API, otherwise it will be the same in the cache.
                </Alert>
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
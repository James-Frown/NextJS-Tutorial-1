//import the unsplash api key
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

// defines the metadata of a webpage
export const metadata = {
    // This is the global Title & the fallback
    // can set different titles in sub pages later
    title: "Static Fetching - NextJS Image Gallery",
}

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
                <Alert>
                    This page <strong>fetches and cashes data at build time</strong>
                    Even though the Unsplash API always returns a new image we see the same image after refreshing the page until we complie the project again.
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
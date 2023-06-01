import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

// export const revalidate = 0;

// stops you from getting any other key words
// export const dynamicParams = false;

// getting the values as props of this pages function
interface PageProps {
    params: { topic: string },
    // searchParams: { [key: string]: string | string[] | undefined }
}

export function generateStaticParams() {
    return ["health", "fitness", "coding"].map(topic => ({ topic }));
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
    return {
        title: topic + " - NextJS Image Gallery"
    }
}

// getting the content from the url's value
export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const images: UnsplashImage[] = await response.json();

    return (
        <>
            <div>
                <Alert>
                    This page uses <strong>generateStaticParams </strong>
                    to render and cashe static pages at build time, even tho the url has a dynamic parameter.
                    Pages that are not included in the generateStaticParams will be fetched and rendered on first access
                    and then <strong>cached for subsequent requests </strong> this can also be disbaled.
                </Alert>
                <h1>
                    {topic}
                </h1>
                {
                    images.map(image => (
                        <Image
                            src={image.urls.raw}
                            width={250}
                            height={250}
                            alt={image.description}
                            key={image.urls.raw}
                            className={styles.image}
                        />
                    ))
                }
            </div>
        </>
    )
}
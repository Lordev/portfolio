import { ProjectImage } from "@/lib/types";
import ShowcaseImageItem from "./ShowcaseImageItem";

export default function ShowcaseImageList({ images }: { images: ProjectImage[] }) {
    return (
        <>
            {images.map((image) => (
                <ShowcaseImageItem key={image.src} image={image} />
            ))}
        </>
    );
}
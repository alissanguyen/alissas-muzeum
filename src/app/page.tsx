/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

export interface ImageResponse {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
}



function Images({ images }: { images: ImageResponse[] }) { // Correct the type annotation for the images parameter
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
      {images.map((image) =>
        <div className="mx-auto text-center flex flex-col" key={image.id}>
          <img src={image.url} alt="" />
          <span>{image.name}</span>
        </div>)}
    </div>
  )
}
export default async function HomePage() {

  const images = await getMyImages()

  return (
    <main className="p-10 w-full">

      <SignedOut>
        <p>Please sign in above</p>
      </SignedOut>
      <SignedIn>
        <Images images={images} />
      </SignedIn>
    </main>
  );
}

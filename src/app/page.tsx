
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

export interface ImageResponse {
  id: number;
  name: string;
  userId: string;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
}



function Images({ images }: { images: ImageResponse[] }) { // Correct the type annotation for the images parameter
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-y-20 gap-5 w-full justify-center p-10 pb-20">

      {images.map((image) =>
        <div className="mx-auto text-center flex flex-col gap-2" key={image.id}>
          <Link href={`/img/${image.id}`} className="w-full h-full">
            <Image src={image.url} alt="" height={800} width={600} className="Image rounded-lg"/>
          </Link>
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

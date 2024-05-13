/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

interface ImageResponse {
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
          <img src={image.url} alt="" className="w-full" />
          <span>{image.name}</span>
        </div>)}
      {images.map((image) =>
        <div className="mx-auto text-center flex flex-col" key={image.id}>
          <img src={image.url} alt="" className="w-full" />
          <span>{image.name}</span>
        </div>)}
      {images.map((image) =>
        <div className="mx-auto text-center flex flex-col" key={image.id}>
          <img src={image.url} alt="" className="w-full" />
          <span>{image.name}</span>
        </div>)}
    </div>
  )
}
export default async function HomePage() {

  /**
   * The function (model, { desc }) => desc(model.id) is a callback function 
   * passed to orderBy. Here, model represents each image record and { desc } 
   * is a destructured object that contains sorting functions. The desc 
   * function is used to sort in descending order.
   * The desc function comes from the Prisma Client API. Prisma provides asc 
   * and desc functions for ascending and descending sorting respectively. 
   * In this case, desc(model.id) means "sort by the id field of the model 
   * in descending order".
   */
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });



  console.log(images)

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

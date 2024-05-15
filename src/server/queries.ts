import "server-only";
import { db } from "./db";
import { type ImageResponse } from "~/app/page";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages(): Promise<ImageResponse[]> {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

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
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export async function getImageById(id: number): Promise<ImageResponse> {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");

  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
}

export async function deleteImage(id: number): Promise<void> {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      image_id: id,
    }
  });

  redirect("/");
}

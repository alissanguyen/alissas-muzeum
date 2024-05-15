import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImageById } from "~/server/queries";
import { Button } from "../components/ui/button"
import Image from "next/image";
import { toast } from "sonner";

export default async function FullPageImageView(props: { id: number }) {


    const image = await getImageById(props.id);

    const uploaderInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex w-full h-full p-10">
            <div className="flex max-w-screen-xl mx-auto h-full bg-slate-50 p-20 gap-10 rounded-xl">
                <Image src={image.url} alt={image.name} width={800} height={1200} className="h-full w-fit rounded-lg object-contain" />
                <div className="flex flex-col gap-3">
                    <p className="text-2xl text-black font-semibold">{image.name}</p>
                    <div className="flex flex-row items-center gap-2 text-slate-800">
                        <span>Uploaded by:</span>
                        <span>{uploaderInfo.fullName}</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-slate-800">
                        <span>Created on:</span>
                        <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                    </div>
                    <form className="mt-2" action={async () => {
                        "use server"
                        await deleteImage(props.id)
                    }}>
                        <Button variant="destructive" type="submit">Delete</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}


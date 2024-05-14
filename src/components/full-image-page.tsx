import { clerkClient } from "@clerk/nextjs/server";
import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {


    const image = await getImageById(props.id);

    const uploaderInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex w-full h-full p-10">
            <div className="flex max-w-screen-xl mx-auto h-full bg-gray-200 p-20 gap-10 rounded-xl">
                <img src={image.url} alt={image.name} className="max-w-[1/2] rounded-lg object-contain" />
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
                </div>
            </div>
        </div>
    );
}
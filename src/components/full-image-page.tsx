import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {


    const image = await getImageById(props.id);

    return (
        <div className="flex w-full h-full p-10">
            <div className="flex max-w-screen-xl mx-auto h-full bg-gray-200 p-20 gap-10 rounded-xl">
                <img src={image.url} alt={image.name} className="max-w-[1/2] rounded-lg object-contain" />
                <div className="flex flex-col">
                    <p className="text-2xl text-black font-semibold">{image.name}</p>
                </div>
            </div>
        </div>
    );
}
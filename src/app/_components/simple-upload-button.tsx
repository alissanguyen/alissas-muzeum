"use client";

import { useUploadThing } from "~/utils/uploadthing";
import { useRouter } from 'next/navigation';
import { Spinner } from '@chakra-ui/react'
import { toast } from "sonner"



// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        const result = await $ut.startUpload(selectedFiles);

        console.log("uploaded files", result);
        // TODO: persist result in state maybe?
    };

    return {
        inputProps: {
            onChange,
            multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
    };
};

export default function SimpleUploadButton() {
    const router = useRouter();

    const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
        onUploadBegin() {
            toast("Uploading image(s)...", {
                duration: 100000,
                id: 'upload-begin'
            });
        },
        onClientUploadComplete(res) {
            toast.dismiss('upload-begin');
            toast("Upload complete!");
            router.refresh()
        }
    });

    return (
        <div>
            {
                isUploading ?
                    <Spinner size='xl' thickness='4px' speed='0.65s' color='blue.500' className="w-6 h-6" /> :
                    <label htmlFor="upload-button" className="hover:text-cyan-400 ease-in-out duration-150">Upload</label>
            }
            <input id="upload-button" type="file" className="sr-only" {...inputProps}></input>
        </div>
    )
}
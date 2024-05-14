"use client";

import { useUploadThing } from "~/utils/uploadthing";
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import { usePostHog } from "posthog-js/react";



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

    const posthog = usePostHog();

    const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
        onUploadBegin() {
            posthog.capture('upload_begin');
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
                    <SVGSpinner />
                    : <label htmlFor="upload-button" className="hover:text-cyan-400 ease-in-out duration-150">Upload</label>
            }
            <input id="upload-button" type="file" className="sr-only" {...inputProps}></input>
        </div>
    )
}

function SVGSpinner() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <circle className="spinner_nOfF" cx="4" cy="12" r="3" /><circle className="spinner_nOfF spinner_fVhf" cx="4" cy="12" r="3" />
            <circle className="spinner_nOfF spinner_piVe" cx="4" cy="12" r="3" /><circle className="spinner_nOfF spinner_MSNs" cx="4" cy="12" r="3" /></svg>
    )

}
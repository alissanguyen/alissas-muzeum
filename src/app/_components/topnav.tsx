"use client"
/* eslint-disable react/no-unescaped-entities */
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import * as React from 'react';
// import { UploadButton } from '~/utils/uploadthing';
import SimpleUploadButton from './simple-upload-button';


const NavBar: React.FC = ({ }) => {

    return (
        <nav className="nav flex w-full flex-row justify-between items-center py-4 px-10 font-semibold border-b-2 border-cyan-400/60">
            <Link href="/" prefetch><span className='flex'>Alissa's Museum</span></Link>
            <div className="flex flex-row items-center justify-start gap-10 max-w-1/2">

                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <SimpleUploadButton />
                    {/* <UploadButton endpoint="imageUploader" onClientUploadComplete={() => { router.refresh() }} /> */}
                    <UserButton />
                    <SignOutButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default NavBar
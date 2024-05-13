/* eslint-disable react/no-unescaped-entities */
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import * as React from 'react';


const NavBar: React.FC = ({ }) => {
    return (
        <nav className="nav flex w-full flex-row justify-between py-4 px-10 font-semibold border-b-2 border-cyan-400/60">
            <span className='flex'>Alissa's Museum</span>
            <div className="flex flex-row items-center justify-start gap-10 max-w-1/2">
                
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                    <SignOutButton/>
                </SignedIn>
            </div>
        </nav>
    )
}

export default NavBar
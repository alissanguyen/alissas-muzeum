/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import * as React from 'react';


const links = [
    {
        name: "home",
        href: "/"
    },
    {
        name: "upload",
        href: "/upload"
    },

    {
        name: "sign in",
        href: "/signin"
    },

    {
        name: "register",
        href: "/register"
    }
]

const NavBar: React.FC = ({ }) => {
    return (
        <nav className="nav flex w-full flex-row justify-between py-4 px-10 font-semibold border-b-2 border-cyan-400/60">
            <span className='flex'>Alissa's Museum</span>
            <ul className="flex flex-row items-center justify-start gap-10 max-w-1/2">
                {links.map((link) =>
                    <li key={link.name}><Link href={link.href}>{link.name}</Link></li>)}
            </ul>
        </nav>
    )
}

export default NavBar
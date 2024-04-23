'use client';

import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

const Navbar: React.FC = async () => {
    const user = await currentUser();
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex flex-wrap justify-between items-center">
                    <div className=''>
                        <Link className='text-3xl italic text-white p-3 text-shadow:_0_1px_0_rgb(0_0_0_/_40%)' href="/">Vacad</Link>
                    </div>
                    <div className='flex justify-between items-center'>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/">
                                HOME
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/schedule">
                                EVENTS
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/speakers">
                                CONTACT US
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/venue">
                                VENUE
                            </Link>
                        </li>
                        {!user ? (
                            ""
                        ) : (
                            <li className="mx-2">
                                <Link className="text-white hover:text-gray-300" href="/dashboard">
                                    DASHBOARD
                                </Link>
                            </li>

                        )}
                    </div>
                    <div className='flex gap-3'>
                        <header>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </header>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

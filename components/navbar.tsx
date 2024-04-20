import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex flex-wrap justify-between items-center">
                    <div className=''>
                        {/* <img src="/logo.png" alt="logo" className="w-10 h-10" /> */}
                        VACAD EVENT TICKETING PLATFORM
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
                        {/* <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/venue">
                                Venue
                            </Link>
                        </li> */}
                        {/* <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/register">
                                Register
                            </Link>
                        </li> */}
                    </div>
                    <div className=''>
                        <header>
                            <SignedOut>
                                <SignInButton />
                                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            SIGN IN
                        </button> */}
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

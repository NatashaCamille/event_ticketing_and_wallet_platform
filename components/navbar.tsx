import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };
    
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex flex-wrap justify-between items-center">
                    <div className=''>
                        <Link href="/">Logo</Link>
                    </div>
                    <div className='flex justify-between items-center'>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/schedule">
                                Schedule
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/speakers">
                                Speakers
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/venue">
                                Venue
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/register">
                                Register
                            </Link>
                        </li>
                    </div>
                    <div className=''>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Connect wallet
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

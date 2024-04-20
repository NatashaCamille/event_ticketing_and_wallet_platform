import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='bg-gray-900 text-white h-screen w-1/5'>
            <div className='flex flex-col items-center justify-center gap-12 h-full'>
                <Link href="/" className="text-white hover:text-gray-300 py-2 px-4">Home</Link>
                <Link href="/create-event-page" className="text-white hover:text-gray-300 py-2 px-4">Create Event</Link>
                <Link href="/list-events-page" className="text-white hover:text-gray-300 py-2 px-4">List Events</Link>
            </div>
        </div>
    );
};

export default Sidebar;

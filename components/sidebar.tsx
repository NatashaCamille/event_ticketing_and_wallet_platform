import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (

        <div className='bg-black/45'>
            <div className='flex flex-col items-center gap-4 h-screen m-4'>
                {/* <Link href="#" className="text-white/50 hover:text-white">Home</Link>
                <Link href="/create-event" className="text-white/50 hover:text-white">CREATE EVENT</Link>
                <Link href="#" className="text-white/50 hover:text-white">Explore DAPP</Link>
                <Link href="#" className="text-white/50 hover:text-white">Explore DAPP</Link>
                <Link href="#" className="text-white/50 hover:text-white">Explore DAPP</Link> */}

        <div className='bg-gray-900 text-white w-1/5 h-full'>
            <div className='flex flex-col items-center justify-center gap-12 h-full'>
                {/* <Link href="/dashboard" className="text-white hover:text-gray-300 py-2 px-4">Home</Link> */}
                <Link href="/create-event-page" className="text-white hover:text-gray-300 py-2 px-4">Create Event</Link>
                <Link href="/list-events-page" className="text-white hover:text-gray-300 py-2 px-4">List Events</Link>
            </div>
        </div>
        </div>
     </div>   
    );
}

export default Sidebar;

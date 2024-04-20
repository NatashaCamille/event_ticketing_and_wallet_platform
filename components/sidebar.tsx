import Link from 'next/link';
import React from 'react';


const Sidebar = () => {
    return (
        <div className='bg-black/45'>
            <div className='flex flex-col items-center gap-4 h-screen m-4'>
                <Link href="#" className="text-white/50 hover:text-white">Home</Link>
                <Link href="/create-event" className="text-white/50 hover:text-white">CREATE EVENT</Link>
                <Link href="#" className="text-white/50 hover:text-white">Explore DAPP</Link>
                <Link href="#" className="text-white/50 hover:text-white">Explore DAPP</Link>
                <Link href="#" className="text-white/50 hover:text-white">Explore DAPP</Link>
            </div>
        </div>
    )
}

export default Sidebar;
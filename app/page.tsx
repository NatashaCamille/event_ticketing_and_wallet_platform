
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/footer'
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col p-2
    // bg-[url('/weare.jpg')] 
    bg-gradient-to-r from-[#e5e7eb] to-[#f3f4f6]
    "
    >
      {/* <Navbar /> */}

      <div className="mt-4 flex grow flex-col md:flex-row">
        <div className="flex flex-col justify-center rounded-lg bg-gray-100 px-2 py-2 md:w-2/5 md:px-10">
          <p
            className={`
            //
            text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>E-Ticketing.</strong> A place for you{' '}
            <Link
              href="https://decentracode.xyz/dashboard"
              className="text-blue-400 md:text-md"
            >
              to purchase tickets for web3 events.{' '}
            </Link>
            Click on the link below.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Explore</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            className="block md:hidden"
            src="/hero-anima.gif"
            width={560}
            height={620}
            alt="For mobile"
          />
        </div>
      
      </div>
      {/* <section
        id="about"
        className="mt-2 w-full flex relative items-center justify-center p-4"
      >
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Image
            src="/whirl.svg"
            fill
            className="absolute object-cover w-full overflow-visible sm:rotate-90"
            alt="Background Whirl"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className="text-3xl md:text-5xl font-bo <Footer />ld text-slate-950">
            Buidler Forcused!
          </h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard: { id: Key | null | undefined; icon: any; title: string; bodyText: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => {
            return (<div>Search.</div>)
          </div>
        </div>
      </section> */}
    </main>
  )
}

interface IInfoCardProps {
  title: string
  // Icon: LucideIcon
  children: ReactElement<any, any>
}

function InfoCard({ title, children }: IInfoCardProps) {
  return (
    <div className="w-full h-60 flex flex-col justify-around items-center p-4 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 bg-blue-400 rounded-full">{/* <Icon /> */}</div>
      <div>
        <h3 className="text-md font-bold sm:text-xl">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

function Navbar() {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-10 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <h6 className="font-bold">Yo Ticket</h6>
        <ul className="flex gap-8">
          <li>
            <Link
              className="hover:text-blue-400 transition-colors text-xs sm:text-base"
              href="#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400 transition-colors text-xs sm:text-base"
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400 transition-colors text-xs sm:text-base"
              href="#pricing"
            >
              Explore DAPP
            </Link>
          </li>
        </ul>
       </div>
      </div>
  )
}


 

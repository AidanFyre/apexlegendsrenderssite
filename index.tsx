import Link from 'next/link';
import Image from 'next/image';
import 'app/globals.css'

export default function index() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <header className="header flex justify-between items-center p-8">
        <h1 className="pb-6 pt-4 text-2xl text-left lg:w-auto lg:p-4">
          Apex Legends Renders
        </h1>
        <nav className="pb-6 pt-4 text-xl text-right lg:w-auto lg:p-4">
        <Link href="/"><a className="p-2">Home</a></Link>
        <Link href="/about"><a className="p-2">About</a></Link>
        <Link href="/requests"><a className="p-2">Requests</a></Link>
        </nav>
      </header>
      <div className="flex items-center ml-20">
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'> {/* Add Tailwind classes for responsive text size */}
          <strong>Welcome.</strong>
        </div>
          <img src="/images/Gilded_Radiance1.png"/>
      </div>
    </main>
  )
}
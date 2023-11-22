import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'app/globals.css'

export default function index() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = isOpen ? { fontSize: '0.875rem' } : { fontSize: '1.25rem' };
  const linkSpacing = isOpen ? {} : { marginRight: '1rem' };
  const navPadding = isOpen ? { paddingTop: '0', paddingBottom: '0' } : { paddingTop: '0', paddingBottom: '0' };

  return (
    <main className="flex flex-col justify-between h-screen">
      <header className="header h-35">
        <h1 className="pb-6 pt-4 text-3xl text-left lg:w-auto lg:p-4 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sm:text-2xl">
          Apex Legends Renders
        </h1>
        <div className="flex items-center">
          <nav className={`nav text-xl text-right lg:w-auto lg:p-4 flex flex-col sm:flex-row transition-transform duration-500 ${isOpen ? 'block' : 'hidden'} sm:block`} style={navPadding}>
            <Link href="/" style={{...linkStyle, ...linkSpacing}}>HOME</Link>
            <Link href="/about" style={{...linkStyle, ...linkSpacing}}>ABOUT</Link>
            <Link href="/requests" style={{...linkStyle, ...linkSpacing}}>REQUESTS</Link>
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className={`ml-10 block sm:hidden transform transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} style={{ fontSize: '2rem' }}>
            {/* Simple text-based hamburger icon */}
            ☰
          </button>
        </div>
      </header>
      <div className="flex items-center justify-center">
        <div className='text-8xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'> {/* Add Tailwind classes for responsive text size */}
          <strong>Welcome.</strong>
        </div>
        <div className="justify-center">
          <Image src="/images/Gilded_Radiance1.png" alt="Conduit" width={1000} height={2160}/>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          button {
            display: none;
          }
          nav {
            display: block !important;
          }
        }
      `}</style>
    </main>
  )
}
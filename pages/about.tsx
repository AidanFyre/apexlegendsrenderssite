import Link from 'next/link';
import Image from 'next/image';
import 'app/globals.css'

export default function index() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <header className="header">
        <h1 className="pb-6 pt-4 text-2xl text-left lg:w-auto lg:p-4">
          Apex Legends Renders
        </h1>
        <nav className="pb-6 pt-4 text-xl text-right lg:w-auto lg:p-4">
          <Link href="/" className="p-2">Home</Link>
          <Link href="/about" className="p-2">About</Link>
          <Link href="/requests" className="p-2">Requests</Link>
        </nav>
      </header>
    </main>
  )
}

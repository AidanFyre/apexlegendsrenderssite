import 'app/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <main className="flex flex-col justify-between p-20">
      <div className="flex justify-between items-center">
        <h1 className="pb-6 pt-4 text-2xl text-left lg:w-auto lg:p-4">
          About
        </h1>
        <nav className="pb-6 pt-4 text-xl text-right lg:w-auto lg:p-4">
        <Link href="/"><a className="p-2">Home</a></Link>
        <Link href="/about"><a className="p-2">About</a></Link>
        <Link href="/requests"><a className="p-2">Requests</a></Link>
        </nav>
      </div>
    </main>
  )
}

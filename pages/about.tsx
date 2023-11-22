import 'app/globals.css'
import Image from 'next/image'

export default function index() {
  return (
    <main className="flex flex-col justify-between p-20">
      <div className="flex justify-between items-center">
        <h1 className="pb-6 pt-4 text-2xl text-left lg:w-auto lg:p-4">
          About
        </h1>
        <nav className="pb-6 pt-4 text-xl text-right lg:w-auto lg:p-4">
          <a href="/" className="p-2">Home</a>
          <a href="/about" className="p-2">About</a>
          <a href="/requests" className="p-2">Requests</a>
        </nav>
      </div>
    </main>
  )
}

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="h-16 w-full drop-shadow-lg sticky top-0 bg-white z-30 text-gray-600">
        <div className="flex flex-row">
            <div className="basis-1/4">
                <Link href="/">
                    <a>
                        <h2 className="font-semibold text-4xl text-center font-pally antialiased translate-y-3 ease-in-out duration-150 hover:rotate-3 hover:scale-110"><span className="text-green-500">Dino</span><span className="text-blue-500">store</span><span className="text-red-500">us</span></h2>
                    </a>
                </Link>
            </div>
            <div className="basis-1/2 flex justify-around font-semibold translate-y-1/2 text-lg">
                <Link href="/">
                    <a className="ease-in-out duration-150 hover:rotate-6 hover:scale-110">Home</a>
                </Link>
                <Link href="/catalogue">
                    <a className="ease-in-out duration-150 hover:rotate-6 hover:scale-110">Catalogue</a>
                </Link>
                <Link href="/about">
                    <a className="ease-in-out duration-150 hover:rotate-6 hover:scale-110">About</a>
                </Link>
            </div>
            <div className="basis-1/4 translate-y-1/2 flex justify-center">
                <a className="ease-in-out duration-150 hover:rotate-6 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </nav>
  )
}

// import Link from "next/link";

// export default function navbar(){
//     return(
//        <div className=" relative text-white backdrop-blur-8xl bg-[#241f1f] grid grid-cols-2 w-full h-20 items-center">
//            <div className=" col-span-1 pl-4 font-medium font-serif text-xl">
//            <h1> Sharifi Rastutrant</h1>
//            </div>
//            <div className="col-span-1 flex gap-20 font-medium font-serif ">
//             <Link href=''>Home</Link>
//             <Link href=''>menu</Link>
//             <Link href=''>contact</Link>
//             <Link href=''>about</Link>
//            </div>
//        </div>
//     );
// }
"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          Restaurant
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  )
}
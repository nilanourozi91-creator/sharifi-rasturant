// import Orders from "../orders/page"
"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
         Sharifi Restaurant
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
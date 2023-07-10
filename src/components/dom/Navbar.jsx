'use client'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="inline-flex justify-between w-full fixed top-0">
      <Link href="/about">O Nas</Link>
      <Link href="/">OLSZAR</Link>
      <Link href="/contact">Kontakt</Link>
    </nav>
  )
}

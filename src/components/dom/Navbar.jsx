'use client'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="inline-flex justify-between w-full fixed top-0">
      <Link href="/">OLSZAR</Link>
      <div className="flex gap-5">
        <Link href="/scroll">Ring</Link>
        <Link href="/blob">Blob</Link>
        <Link href="#">Kontakt</Link>
      </div>
    </nav>
  )
}

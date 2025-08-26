"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(11,15,20,0.7)] backdrop-blur">
      <div className="container-edge flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="KoncoWeb"
            width={24}
            height={24}
            className="h-6 w-6"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src.endsWith("logo.png")) return;
              target.src = "/logo.png";
            }}
          />
          <span className="font-semibold tracking-tight">KoncoWeb</span>
        </Link>
        <button onClick={() => setOpen((v) => !v)} className="sm:hidden p-2 rounded-md border border-[rgba(255,255,255,0.08)] text-kw-muted">Menu</button>
        <nav className={`sm:flex gap-6 items-center ${open ? "block" : "hidden"} sm:block`}>
          <Link href="/pelatihan-ai" className="block py-2 text-kw-text hover:text-white">Pelatihan AI</Link>
          <Link href="/layanan" className="block py-2 text-kw-text hover:text-white">Layanan</Link>
          <Link href="/konsultan-ai" className="block py-2 text-kw-text hover:text-white">Konsultan AI</Link>
          <Link href="/blog" className="block py-2 text-kw-text hover:text-white">Blog</Link>
          <Link href="/kontak" className="block py-2 sm:py-1 px-4 rounded-lg bg-kw-neon text-black hover:opacity-90">Hubungi</Link>
        </nav>
      </div>
    </header>
  );
}



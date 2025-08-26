export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container-edge py-8 text-sm text-kw-muted">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>&copy; {new Date().getFullYear()} KoncoWeb. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://neon.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Referensi gaya: Neon</a>
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            <a href="/robots.txt" className="hover:text-white">Robots</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



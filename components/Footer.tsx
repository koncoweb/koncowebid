export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container-edge py-8 text-sm text-kw-muted">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div>&copy; {new Date().getFullYear()} KoncoWeb. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="/sitemap.xml" className="hover:text-white lowercase">sitemap</a>
              <a href="/robots.txt" className="hover:text-white lowercase">robots</a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="https://www.linkedin.com/in/mmbilly" target="_blank" rel="noopener noreferrer" className="hover:text-kw-neon lowercase">linkedin</a>
            <a href="https://www.youtube.com/@mohmbilly" target="_blank" rel="noopener noreferrer" className="hover:text-kw-neon lowercase">youtube</a>
            <a href="https://koncowebportal.vercel.app/landing/MembershipKoncoweb" target="_blank" rel="noopener noreferrer" className="hover:text-kw-neon lowercase">pelatihan ai perorangan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



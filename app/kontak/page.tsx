import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Kontak", description: "Hubungi KoncoWeb untuk demo dan penawaran pelatihan/konsultasi AI." };

export default function Page() {
  return (
    <>
      <Nav />
      <main className="container-edge py-10">
        <h1 className="text-3xl font-semibold">Kontak</h1>
        <p className="mt-2 text-kw-muted max-w-3xl">Silakan hubungi kami melalui kanal berikut. Kami siap membantu kebutuhan pelatihan, pembuatan aplikasi, atau konsultasi implementasi AI.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="card p-5">
            <h2 className="font-semibold">Informasi Kontak</h2>
            <ul className="mt-3 space-y-2 text-sm text-kw-muted">
              <li><span className="text-white">Alamat</span>: New Citra Harmoni A19 / B35<br />Rowobelang - Batang<br />Jawa Tengah 51216</li>
              <li><span className="text-white">Telepon/WhatsApp</span>: <a className="text-kw-neon underline" href="https://wa.me/6285150731986" target="_blank" rel="noopener noreferrer">0851-5073-1986</a></li>
              <li><span className="text-white">Email</span>: <a className="text-kw-neon underline" href="mailto:koncoweb@gmail.com">koncoweb@gmail.com</a></li>
              <li><span className="text-white">Website</span>: <a className="text-kw-neon underline" href="https://koncoai.tech" target="_blank" rel="noopener noreferrer">koncoai.tech</a></li>
              <li><span className="text-white">Pelatihan Perorangan</span>: <a className="text-kw-neon underline" href="https://koncowebportal.vercel.app/landing/MembershipKoncoweb" target="_blank" rel="noopener noreferrer">Membership KoncoWeb</a></li>
            </ul>
          </div>

          <form className="card p-5 grid gap-4">
            <input className="bg-transparent border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2" placeholder="Nama" />
            <input className="bg-transparent border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2" placeholder="Email" type="email" />
            <textarea className="bg-transparent border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2" placeholder="Kebutuhan Anda" rows={5} />
            <button className="rounded-lg bg-kw-neon text-black px-5 py-3 font-medium">Kirim</button>
          </form>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6285150731986" target="_blank" rel="noopener noreferrer" className="btn-primary">Chat WhatsApp</a>
          <a href="mailto:koncoweb@gmail.com" className="btn-outline">Kirim Email</a>
        </div>
      </main>
      <Footer />
    </>
  );
}



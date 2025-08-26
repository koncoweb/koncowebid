import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background-size:24px_24px] bg-grid" />
      <div className="container-edge relative py-12 sm:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-kw-muted">
            Trending: Pelatihan AI untuk Developer & Corporate
            <span className="h-2 w-2 rounded-full bg-kw-neon shadow-neon" />
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            Bangun Produk Lebih Cepat dengan <span className="text-kw-neon">AI</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-kw-muted">
            KoncoWeb membantu Anda membuat aplikasi dan web dengan AI, mengadakan pelatihan AI yang relevan,
            dan konsultasi implementasi AI untuk corporate atau instansi pemerintah.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/pelatihan-ai" className="text-center rounded-lg bg-kw-neon text-black px-5 py-3 font-medium hover:opacity-90">
              Lihat Kurikulum Pelatihan
            </Link>
            <Link href="/konsultan-ai" className="text-center rounded-lg border border-kw-neon px-5 py-3 text-kw-neon hover:bg-[rgba(60,228,122,0.12)]">
              Konsultasi Implementasi AI
            </Link>
          </div>
          <p className="mt-4 text-[13px] text-kw-muted">
            Layout terinspirasi dari desain Neon, dioptimalkan mobile-first dan SEO-friendly. Lihat Neon untuk referensi gaya.
          </p>
        </div>
      </div>
    </section>
  );
}



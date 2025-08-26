import Link from "next/link";

export default function CTA() {
  return (
    <section className="container-edge py-12">
      <div className="card p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-[rgba(44,244,160,0.08)] to-transparent blur-2xl" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-semibold">Siap Memulai dengan AI?</h2>
          <p className="mt-2 text-kw-muted">Buat demo dalam hitungan hari. Pelatihan tim Anda minggu ini.</p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link href="/kontak" className="text-center rounded-lg bg-kw-neon text-black px-5 py-3 font-medium hover:opacity-90">Jadwalkan Konsultasi</Link>
            <Link href="/pelatihan-ai" className="text-center rounded-lg border border-kw-neon px-5 py-3 text-kw-neon hover:bg-[rgba(60,228,122,0.12)]">Lihat Jadwal Pelatihan</Link>
          </div>
        </div>
      </div>
    </section>
  );
}



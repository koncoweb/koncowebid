import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Konsultan AI",
  description:
    "Konsultasi implementasi AI untuk corporate & instansi pemerintah: assessment, PoC, arsitektur, keamanan.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="container-edge py-10">
        <h1 className="text-3xl font-semibold">Konsultan AI</h1>
        <p className="mt-2 text-kw-muted">Mulai dari assessment hingga implementasi produksi.</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {["Assessment & Roadmap", "PoC Cepat", "Keamanan & Kepatuhan"].map((k, i) => (
            <div key={i} className="card p-5">
              <h3 className="font-semibold">{k}</h3>
              <p className="mt-2 text-kw-muted text-sm">Pendekatan pragmatis dengan fokus dampak bisnis.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}



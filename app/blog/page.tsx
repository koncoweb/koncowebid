import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description: "Wawasan AI, tutorial, dan studi kasus implementasi di Indonesia.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="container-edge py-10">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-2 text-kw-muted">Segera hadir. Kami menyiapkan artikel terkait pelatihan AI dan pembangunan aplikasi dengan AI.</p>
      </main>
      <Footer />
    </>
  );
}



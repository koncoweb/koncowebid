import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Logos from "@/components/Logos";
import CTA from "@/components/CTA";
import AIArticle from "@/components/AIArticle";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Logos />
        <CTA />
        <AIArticle />
      </main>
      <Footer />
    </>
  );
}

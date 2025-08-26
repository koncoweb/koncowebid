export default function AIArticle() {
  return (
    <section className="container-edge py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Revolusi Pembuatan Aplikasi dengan AI
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-3">AI App Builder: Era Baru Development</h3>
            <p className="text-kw-muted text-sm leading-relaxed">
              Teknologi AI telah mengubah cara kita membuat aplikasi. Dengan AI app builder seperti DYAD dan tools serupa, 
              siapa pun dapat membuat aplikasi fungsional tanpa pengetahuan coding yang mendalam. Ini membuka peluang 
              bagi tim non-teknis untuk mengotomasi proses kerja mereka.
            </p>
          </div>
          
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-3">Keunggulan AI dalam Development</h3>
            <ul className="text-kw-muted text-sm space-y-2">
              <li>• Waktu development 10x lebih cepat</li>
              <li>• Biaya pengembangan yang lebih rendah</li>
              <li>• Iterasi dan testing yang lebih mudah</li>
              <li>• Integrasi dengan sistem existing</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 card p-6">
          <h3 className="font-semibold text-lg mb-4">Implementasi AI di Lingkungan Kerja</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-kw-muted">
            <div>
              <h4 className="font-medium text-white mb-2">1. Assessment & Planning</h4>
              <p>Identifikasi proses yang dapat diotomasi dan roadmap implementasi AI yang sesuai dengan kebutuhan organisasi.</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">2. Development & Testing</h4>
              <p>Pembuatan aplikasi dengan AI tools, testing fungsionalitas, dan optimasi performa sesuai standar enterprise.</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">3. Deployment & Training</h4>
              <p>Implementasi ke production, pelatihan pengguna, dan dukungan berkelanjutan untuk memastikan adopsi yang sukses.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-kw-muted text-sm max-w-2xl mx-auto">
            KoncoWeb telah membantu berbagai instansi dan perusahaan mengadopsi AI untuk meningkatkan produktivitas. 
            Dari pelatihan dasar hingga implementasi kompleks, kami siap mendampingi transformasi digital Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

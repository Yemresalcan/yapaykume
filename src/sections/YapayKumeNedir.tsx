import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const YapayKumeNedir = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section 
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
      id="yapay-kume-nedir"
    >
      <div
        className="mx-auto flex w-full max-w-none flex-col items-center justify-between gap-8 text-center md:gap-12"
        ref={containerRef}
      >
        <header className="space-y-6">
          <h2 className="title text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Yapay Küme Nedir?
          </h2>
          <p className="text-regular text-sm sm:text-xl max-w-4xl">
            <strong>Yapay küme</strong> (Swarm Intelligence), doğadaki kolektif zeka sistemlerinden ilham alınarak 
            geliştirilen yapay zeka teknolojisidir. Yapay küme sistemi, birden fazla AI ajanının 
            koordineli çalışmasıyla karmaşık problemlere çözüm bulur.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">🧠 Yapay Küme Teknolojisi</h3>
            <p className="text-gray-300 text-sm">
              Yapay küme sistemi, birçok yapay zeka ajanının bir arada çalışarak 
              optimize edilmiş sonuçlar üretmesini sağlar. Bu yapay küme yaklaşımı, 
              tek bir AI'dan daha güçlü ve esnek çözümler sunar.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-4">⚡ Yapay Küme Avantajları</h3>
            <p className="text-gray-300 text-sm">
              Yapay küme uygulamaları, paralel işleme, hata toleransı ve 
              adaptif öğrenme gibi özellikler sunar. Yapay küme teknolojisi 
              sayesinde daha hızlı ve güvenilir AI çözümleri geliştirilir.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-500/20">
            <h3 className="text-xl font-bold text-white mb-4">🚀 Yapay Küme Uygulamaları</h3>
            <p className="text-gray-300 text-sm">
              Yapay küme sistemi, tıp, finans, lojistik ve sosyal medya analizi gibi 
              birçok alanda kullanılır. Bu platformdaki yapay küme projeleri, 
              gerçek hayat problemlerine yenilikçi çözümler sunar.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30 w-full">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Yapay Küme Platformumuzda Neler Bulabilirsiniz?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">🏥 Medical AI</h4>
              <p className="text-gray-300 text-sm">
                Yapay küme teknolojisiyle kan tahlillerinizi analiz edin
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">📊 YouTube Analiz</h4>
              <p className="text-gray-300 text-sm">
                Yapay küme sistemiyle video yorumlarını detaylı analiz edin
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">📝 Metin Özetleme</h4>
              <p className="text-gray-300 text-sm">
                Yapay küme AI ile uzun metinleri anında özetleyin
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">⚖️ Lawyer AI</h4>
              <p className="text-gray-300 text-sm">
                Yapay küme teknolojisiyle yasal işlemlerinizi basitleştirin
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-300 text-lg">
            Yapay küme teknolojisinin gücünü keşfetmek için projelerimizi inceleyin
          </p>
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Yapay Küme Projelerini Keşfet
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YapayKumeNedir; 
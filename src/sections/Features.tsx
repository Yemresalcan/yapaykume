import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import Modal from "@/components/ui/Modal";

const features = [
  {
    title: "Medical AI",
    subtitle:
      "Kan tahlillerinizi yapay zeka ile anında yorumlayın. Sağlık profesyonellerine danışmadan önce sonuçlarınızı anlayın ve bilinçli kararlar alın.",
    img: "/images/features/feature1.png",
    link: "https://medikalai.fly.dev/",
    glowColor: "from-blue-400/40 to-cyan-400/40"
  },
  {
    title: "YouTube Comment AI",
    subtitle:
      "YouTube videolarının yorumlarını detaylı analiz edin. Sentiment analizi, trend tespiti ve içerik insights'larını yapay zeka ile keşfedin.",
    img: "/images/features/feature2.png",
    link: "https://youtubeanalysewebai.fly.dev/",
    glowColor: "from-red-400/40 to-pink-400/40"
  },
  {
    title: "Summarize AI",
    subtitle:
      "Uzun metinleri anında özetleyin. AI destekli özetleme teknolojisi ile içerikleri hızlıca anlayın ve zaman kazanın.",
    img: "/images/features/feature3.png",
    link: "https://openaisumarize.vercel.app/",
    glowColor: "from-orange-400/40 to-amber-400/40"
  },
   {
     title: "Lawyer AI",
     subtitle:
       "Yasal işlemlerinizi hızlıca anlayın ve bilinçli kararlar alın.",
     img: "/images/features/feature4.png",
     glowColor: "from-green-400/40 to-emerald-400/40",
     isComingSoon: true
   },
  // {
  //   title: "Sürekli Geliştirme",
  //   subtitle:
  //     "Projeler sürekli güncellenir ve yeni özellikler eklenir. Kullanıcı geri bildirimleri ile gelişir.",
  //   img: "/images/features/feature5.png",
  //   glowColor: "from-yellow-400/40 to-orange-400/40"
  // },
];

const Features = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const cards = gsap.utils.toArray(".feature-card");
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 80, opacity: 0 });

        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: containerRef },
  );

  const handleFeatureClick = (feature: typeof features[0]) => {
    if (feature.isComingSoon) {
      setIsModalOpen(true);
    } else if (feature.link) {
      window.open(feature.link, '_blank');
    }
  };

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
      ref={containerRef}
      id="features"
    >
      <div className="space-y-16">
        <header
          className="mx-auto flex w-full flex-col items-center gap-5 text-center md:mx-0 md:max-w-2/3 md:items-start md:text-start lg:max-w-1/2"
          ref={contentRef}
        >
          <h2 className="title flex-1 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            AI Projelerim
          </h2>
          <p className="text-regular flex-1 text-xs sm:text-lg">
            Hayatı kolaylaştıran yapay zeka çözümleri. Her proje, 
            <span className="text-white"> gerçek ihtiyaçlara</span> yönelik 
            geliştirilen yenilikçi teknolojiler içeriyor.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group relative">
              {/* Base glow - always visible */}
              <div className={`absolute -inset-3 bg-gradient-to-r ${feature.glowColor} rounded-2xl blur-2xl opacity-30 transition-opacity duration-500`}></div>
              
              {/* Hover glow - stronger on hover */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${feature.glowColor} rounded-2xl blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative">
                <div 
                  onClick={() => handleFeatureClick(feature)}
                  className="block cursor-pointer"
                >
                  <FeatureCard 
                    {...feature} 
                    className="hover:scale-105 transition-transform duration-300"
                    link={feature.link}
                    isComingSoon={feature.isComingSoon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yakında Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Lawyer AI
            </h3>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">
                🚀 <strong>Yakında</strong>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yasal belgelerinizi analiz eden, hukuki süreçlerinizi basitleştiren 
                ve yasal danışmanlık sunan AI destekli platform geliştiriliyor.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Anladım
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Features;

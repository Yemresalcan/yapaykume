import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import FeatureCard from "@/components/FeatureCard";

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
  // {
  //   title: "Modern Teknoloji Stack",
  //   subtitle:
  //     "React, TypeScript, AI/ML modelleri ve cloud altyapı ile geliştirilmiş güncel teknoloji çözümleri.",
  //   img: "/images/features/feature4.png",
  //   glowColor: "from-green-400/40 to-emerald-400/40"
  // },
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

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
      ref={containerRef}
      id="features"
    >
      <div className="space-y-16">
        <div
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
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group relative">
              {/* Base glow - always visible */}
              <div className={`absolute -inset-3 bg-gradient-to-r ${feature.glowColor} rounded-2xl blur-2xl opacity-30 transition-opacity duration-500`}></div>
              
              {/* Hover glow - stronger on hover */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${feature.glowColor} rounded-2xl blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative">
                {feature.link ? (
                  <a 
                    href={feature.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <FeatureCard {...feature} className="hover:scale-105 transition-transform duration-300" />
                  </a>
                ) : (
                  <FeatureCard {...feature} className="" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

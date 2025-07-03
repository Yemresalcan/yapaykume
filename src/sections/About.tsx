import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
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
    <section className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-10 md:px-8 md:py-24">
      <div
        className="mx-auto flex w-full max-w-none flex-col items-center justify-between gap-5 text-center md:gap-10 lg:mx-0 lg:flex-row lg:items-start lg:gap-16 lg:text-start"
        ref={containerRef}
      >
        <h2 className="title flex-1 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Yapay Küme ile Gerçek Problemlere Gerçek Çözümler
        </h2>
        <p className="text-regular flex-1 text-sm sm:text-xl">
          Her proje, günlük hayatta karşılaştığımız zorluklara yapay küme teknolojisi ile 
          çözüm bulmak amacıyla geliştirildi. Sağlık tahlillerinden sosyal medya 
          analizine kadar, kullanıcı odaklı ve pratik yapay küme uygulamaları yaratıyorum.{" "}
          <span className="text-white">
            Yapay küme teknolojisi sadece teknoloji için değil, hayatı kolaylaştırmak için.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;

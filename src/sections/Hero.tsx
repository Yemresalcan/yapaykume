import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const learnMoreRef = useRef(null);
  const starsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const titleSplit = new SplitText(titleRef.current, {
      type: "words",
      wordsClass: "split-word",
    });

    gsap.set(titleSplit.words, {
      y: 100,
      opacity: 0,
    });

    tl.to(
      titleSplit.words,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      },
      0,
    );

    tl.from(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3",
    );

    tl.from(
      buttonRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    );

    tl.from(
      learnMoreRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    );

    tl.from(
      starsRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=0.8",
    );
  });

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-15 sm:px-6 sm:pt-20 md:px-8 md:pt-25 min-h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-12">
          <div className="z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
            <h1
              className="flex-1 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              ref={titleRef}
            >
              Yapay Küme'ye Hoş Geldiniz
            </h1>
            <p
              className="text-regular flex-1 text-lg sm:text-xl md:text-2xl max-w-3xl"
              ref={subtitleRef}
            >
              Yapay zeka dünyasında bir araya gelmiş projelerimizi keşfedin. 
              Sağlıktan içerik analizine, özetlemeden veri işlemeye kadar 
              hayatınızı kolaylaştıran AI çözümleri burada.
            </p>
          </div>

          <div className="z-10 space-y-8">
            <div ref={buttonRef}>
              {/* <Button onClick={() => document.getElementById('')?.scrollIntoView({ behavior: 'smooth' })}>
                  imizi Keşfedin
              </Button> */}
            </div>
            <a
              href=""
              className="text-regular flex flex-col items-center justify-center gap-[5px] text-sm hover:text-white transition-colors"
              ref={learnMoreRef}
            >
              AI Projelerini İncele
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <img
          src="/images/stars.png"
          alt="Stars"
          className="absolute top-1/4 z-0 object-contain opacity-50"
          ref={starsRef}
        />
      </div>
    </section>
  );
};

export default Hero;

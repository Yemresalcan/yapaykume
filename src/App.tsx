import {
  About,
  CTABlock,
  Features,
  Footer,
  Header,
  Hero,
  Testimonials,
} from "./sections";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const App = () => {
  const mainRef = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      content: mainRef.current,
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });
  });

  return (
    <>
      <Header />

      <main
        className="bg-dark relative min-h-screen w-full text-white"
        ref={mainRef}
      >
        <div className="absolute top-0 left-1/2 h-[300px] w-[300px] max-w-screen-xl -translate-1/2 rounded-full bg-radial from-[#8B5FBF]/40 via-[#8B5FBF]/8 to-transparent blur-3xl sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px] xl:h-[1200px] xl:w-[1000px]"></div>

        <Hero />
        <About />
        <Features />
        <Testimonials />
        <CTABlock />
        <Footer />

        <div className="absolute bottom-0 left-1/2 h-[200px] w-[80vw] max-w-screen-2xl -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#8B5FBF]/15 to-[#6366F1]/15 blur-[50px] will-change-transform sm:h-[300px] sm:blur-[75px] md:h-[400px] md:blur-[100px] lg:h-[500px] lg:blur-[150px] xl:h-[600px] xl:blur-[200px]"></div>
      </main>
    </>
  );
};

export default App;

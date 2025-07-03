import {
  Header,
} from "./sections";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect, Suspense, lazy } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

// Code Splitting: Her bölümü dinamik olarak yükle
const Hero = lazy(() => import('./sections/Hero'));
const YapayKumeNedir = lazy(() => import('./sections/YapayKumeNedir'));
const About = lazy(() => import('./sections/About'));
const Features = lazy(() => import('./sections/Features'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const CTABlock = lazy(() => import('./sections/CTABlock'));
const Footer = lazy(() => import('./sections/Footer'));

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const App = () => {
  const mainRef = useRef(null);

  useGSAP(() => {
    // Mobil cihazlarda ScrollSmoother'ı devre dışı bırak
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Sadece 768px'den geniş ekranlarda çalışır
      ScrollSmoother.create({
        content: mainRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true,
      });
    });
  });

  // Analytics tracking for user engagement
  useEffect(() => {
    const startTime = Date.now();
    let scrollDepthTracked: Record<number, boolean> = {};

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track at 25%, 50%, 75%, 90% scroll depths
      [25, 50, 75, 90].forEach(depth => {
        if (scrollPercent >= depth && !scrollDepthTracked[depth]) {
          trackScrollDepth(depth);
          scrollDepthTracked[depth] = true;
        }
      });
    };

    // Time on page tracking
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) { // Only track if user spent more than 10 seconds
        trackTimeOnPage(timeSpent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Header />

      <main
        className="bg-dark relative min-h-screen w-full text-white"
        ref={mainRef}
      >
        <div className="absolute top-0 left-1/2 h-[300px] w-[300px] max-w-screen-xl -translate-1/2 rounded-full bg-radial from-[#8B5FBF]/40 via-[#8B5FBF]/8 to-transparent blur-3xl sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[1000px] xl:h-[1200px] xl:w-[1000px]"></div>

        <Suspense fallback={<div className="min-h-screen w-full flex justify-center items-center">Yükleniyor...</div>}>
          <Hero />
          <YapayKumeNedir />
          <About />
          <Features />
          <Testimonials />
          <CTABlock />
          <Footer />
        </Suspense>

        <div className="absolute bottom-0 left-1/2 h-[200px] w-[80vw] max-w-screen-2xl -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#8B5FBF]/15 to-[#6366F1]/15 blur-[50px] will-change-transform sm:h-[300px] sm:blur-[75px] md:h-[400px] md:blur-[100px] lg:h-[500px] lg:blur-[150px] xl:h-[600px] xl:blur-[200px]"></div>
      </main>
    </>
  );
};

export default App;

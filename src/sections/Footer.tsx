import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const linksRef = useRef(null);
  const socialRef = useRef(null);

  useGSAP(() => {
    // Footer animation on scroll
    gsap.fromTo(
      footerRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      }
    );

    // Staggered content animation
    gsap.fromTo(
      [contentRef.current, linksRef.current, socialRef.current],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  // const projectLinks = [
  //   {
  //     name: "🩺 MediTahlil",
  //     url: "https://medikalai.fly.dev/",
  //     color: "#ef4444"
  //   },
  //   {
  //     name: "📹 YouTube AI",
  //     url: "https://youtubeanalysewebai.fly.dev/",
  //     color: "#8b5fbf"
  //   },
  //   {
  //     name: "📝 Summarize AI",
  //     url: "https://openaisumarize.vercel.app/",
  //     color: "#f59e0b"
  //   }
  // ];

  // const socialLinks = [
  //   {
  //     name: "Portfolio",
  //     url: "https://www.yunusemresalcan.com",
  //     icon: "🌐",
  //     color: "#6366f1"
  //   },
  //   {
  //     name: "LinkedIn",
  //     url: "#",
  //     icon: "💼",
  //     color: "#0077b5"
  //   },
  //   {
  //     name: "GitHub",
  //     url: "#",
  //     icon: "⚡",
  //     color: "#333"
  //   }
  // ];

  return (
    <footer 
      ref={footerRef}
      className="relative mx-auto mb-5 max-w-7xl px-4 pt-16 sm:px-6 md:px-8"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 -top-32 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Main footer content */}
      <div className="relative">
        {/* Top border with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div ref={contentRef} className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{
                  background: "linear-gradient(135deg, #8B5FBF, #6366F1)",
                  boxShadow: "0 8px 32px rgba(139, 95, 191, 0.3)",
                }}
              >
                YK
              </div>
              <span className="text-white font-bold text-xl gradient-text">
                Yapay Küme
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Modern AI çözümleri ile hayatı kolaylaştıran projeler geliştiriyorum. 
              Her proje, gerçek kullanıcı ihtiyaçlarına yönelik çözümler sunmaktadır.
            </p>
          </div>

          {/* Projects Section */}
          {/* <div ref={linksRef} className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">🚀 Projelerim</h3>
            <div className="space-y-4">
              {projectLinks.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                    e.currentTarget.style.color = project.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#9ca3af";
                  }}
                >
                  <span className="text-gray-400 hover:text-white text-sm font-medium">
                    {project.name}
                  </span>
                </a>
              ))}
            </div>
          </div> */}

          {/* Social & Contact Section */}
          {/* <div ref={socialRef} className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">📧 İletişim</h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                    const icon = e.currentTarget.querySelector('.social-icon') as HTMLElement;
                    if (icon) {
                      icon.style.background = social.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    const icon = e.currentTarget.querySelector('.social-icon') as HTMLElement;
                    if (icon) {
                      icon.style.background = "rgba(255, 255, 255, 0.1)";
                    }
                  }}
                >
                  <div 
                    className="social-icon w-10 h-10 rounded-lg flex items-center justify-center text-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </div>
                  <span className="text-gray-400 group-hover:text-white text-sm font-medium">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>&copy; 2025 Yapay Küme</span>
              <span className="hidden md:block">•</span>
              <span>Yunus Emre Salcan</span>
              <span className="hidden md:block">•</span>
              <span>Tüm hakları saklıdır</span>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

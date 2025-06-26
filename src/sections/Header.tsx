import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useCallback } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsAboutModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsAboutModalOpen(false);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }).from(
      [navRef.current, buttonRef.current],
      {
        x: 50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.05,
      },
      "-=0.3",
    );

    ScrollTrigger.create({
      start: "60px top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
          marginTop: "5px",
          marginLeft: "5px",
          marginRight: "5px",
          padding: "0",
          duration: 0.2,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderRadius: "0px",
          border: "1px solid transparent",
          boxShadow: "none",
          marginTop: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          duration: 0.2,
          ease: "power2.out",
        });
      },
    });

    let lastScrollY = 0;

    ScrollTrigger.create({
      start: "200px top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const currentY = self.scroll();

        if (currentY > 200) {
          if (currentY > lastScrollY && currentY > 400) {
            gsap.to(headerRef.current, {
              y: -120,
              duration: 0.2,
              ease: "power2.out",
            });
          } else if (currentY < lastScrollY) {
            gsap.to(headerRef.current, {
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        }

        lastScrollY = currentY;
      },
    });
  }, []);

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-150"
        ref={headerRef}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
          <div className="flex items-center" ref={logoRef}>
            <span className="text-white font-bold text-xl">Yapay Küme</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <nav ref={navRef} className="flex items-center gap-6">
              <a
                href=""
                className="text-link text-sm transition-colors hover:text-white"
              >
                
              </a>
              <button
                onClick={handleOpenModal}
                className="text-link text-sm transition-colors hover:text-white hidden sm:block"
              >
                Hakkımda
              </button>
            </nav>
            <div ref={buttonRef}>
              <Button onClick={() => window.open('mailto:info@example.com', '_blank')}>
                İletişim
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hakkımda Modal */}
      <Modal isOpen={isAboutModalOpen} onClose={handleCloseModal}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          {/* Avatar with glow effect */}
          <div style={{
            width: '100px',
            height: '100px',
            margin: '0 auto 30px',
            background: 'linear-gradient(135deg, #8B5FBF, #6366F1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 0 40px rgba(139, 95, 191, 0.4), 0 0 80px rgba(99, 102, 241, 0.2)',
            position: 'relative',
            transition: 'all 0.3s ease',
          }}>
            {/* Pulse animation ring */}
            <div style={{
              position: 'absolute',
              top: '-4px',
              left: '-4px',
              right: '-4px',
              bottom: '-4px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(139, 95, 191, 0.3), rgba(99, 102, 241, 0.3))',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>YS</span>
          </div>
          
          {/* İsim */}
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            margin: '0 0 8px 0',
            color: 'white',
            textShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
          }}>
            Yunus Emre Salcan
          </h2>
          
          {/* Unvan with gradient */}
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #8B5FBF, #6366F1)',
            padding: '8px 16px',
            borderRadius: '20px',
            margin: '0 0 30px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            boxShadow: '0 4px 15px rgba(139, 95, 191, 0.3)',
          }}>
            Full Stack Developer
          </div>

          {/* Açıklama */}
          <div style={{ 
            color: '#e5e7eb', 
            fontSize: '15px', 
            lineHeight: '1.7',
            marginBottom: '30px',
            textAlign: 'left',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <p style={{ margin: '0 0 15px 0' }}>
              💡 Yapay Küme projelerinin geliştiricisiyim. Modern web teknolojileri 
              ve AI çözümleri konusunda uzmanlaşmış bir full stack developer olarak 
              kullanıcı odaklı projeler geliştiriyorum.
            </p>
            <p style={{ margin: '0' }}>
              🚀 Sağlık, sosyal medya analizi ve içerik özetleme alanlarında 
              yapay zeka destekli çözümler üreterek hayatı kolaylaştırmayı hedefliyorum.
            </p>
          </div>

          {/* Website butonu with hover effect */}
          <div style={{ 
            display: 'inline-block',
            transition: 'transform 0.2s ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Button 
              onClick={() => window.open('https://www.yunusemresalcan.com', '_blank')}
            >
              🌐 Web Sitemi Ziyaret Et
            </Button>
          </div>
        </div>

        {/* CSS Animation for pulse effect */}
        <style>{`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </Modal>
    </>
  );
};

export default Header;

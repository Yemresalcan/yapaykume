import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  avatar?: string;
}

const Testimonials = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    comment: '',
    rating: 5
  });

  // Default testimonials
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Ahmet Yılmaz',
      role: 'Yazılım Geliştirici',
      comment: 'MediTahlil uygulaması gerçekten hayat kurtarıcı! Kan tahlil sonuçlarımı anlamak hiç bu kadar kolay olmamıştı.',
      rating: 5,
      date: '2025-01-15',
      avatar: '👨‍💻'
    },
    {
      id: '2',
      name: 'Zeynep Kaya',
      role: 'İçerik Üreticisi',
      comment: 'YouTube Comment AI ile videolarımın performansını analiz etmek çok kolaylaştı. Harika bir araç!',
      rating: 5,
      date: '2025-01-10',
      avatar: '👩‍🎨'
    },
    {
      id: '3',
      name: 'Mehmet Özkan',
      role: 'Öğrenci',
      comment: 'Summarize AI ile araştırma makalelerini özetlemek çok zaman kazandırıyor. Kesinlikle tavsiye ederim.',
      rating: 4,
      date: '2025-01-08',
      avatar: '👨‍🎓'
    }
  ];

  // Load testimonials from localStorage on mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('yapayKumeTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      setTestimonials(defaultTestimonials);
      localStorage.setItem('yapayKumeTestimonials', JSON.stringify(defaultTestimonials));
    }
  }, []);

  const handleSubmitTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.comment) return;

    const testimonial: Testimonial = {
      id: Date.now().toString(),
      ...newTestimonial,
      date: new Date().toISOString().split('T')[0],
      avatar: ['👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '👨‍🎓', '👩‍🎓', '👨‍🔬', '👩‍🔬'][Math.floor(Math.random() * 8)]
    };

    const updatedTestimonials = [testimonial, ...testimonials];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('yapayKumeTestimonials', JSON.stringify(updatedTestimonials));

    setNewTestimonial({ name: '', role: '', comment: '', rating: 5 });
    setIsModalOpen(false);
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
            className={`text-lg transition-colors ${
              interactive ? 'hover:text-yellow-400 cursor-pointer' : ''
            } ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
            disabled={!interactive}
          >
            ⭐
          </button>
        ))}
      </div>
    );
  };

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Cards animation
    const cards = gsap.utils.toArray(".testimonial-card");
    if (cards && cards.length > 0) {
      gsap.set(cards, { y: 80, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }
  }, [testimonials]);

  return (
    <>
      <section
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
        ref={containerRef}
        id="testimonials"
      >
        <div className="space-y-16">
          {/* Header */}
          <div
            className="mx-auto flex w-full flex-col items-center gap-5 text-center"
            ref={titleRef}
          >
            <h2 className="title flex-1 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              💬 Kullanıcı Deneyimleri
            </h2>
            <p className="text-regular flex-1 text-xs sm:text-lg max-w-2xl">
              Projelerimizi kullanan kullanıcılarımızın 
              <span className="text-white"> gerçek deneyimleri</span> ve geri bildirimleri
            </p>
            <Button onClick={() => setIsModalOpen(true)}>
              ✨ Deneyimini Paylaş
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{
                        background: "linear-gradient(135deg, #8B5FBF, #6366F1)",
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    "{testimonial.comment}"
                  </p>

                  {/* Date */}
                  <p className="text-gray-500 text-xs">
                    {new Date(testimonial.date).toLocaleDateString('tr-TR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Testimonial Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            💬 Deneyimini Paylaş
          </h2>
          
          <form onSubmit={(e) => { e.preventDefault(); handleSubmitTestimonial(); }} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">İsim</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Adınız ve soyadınız"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium mb-2">Meslek/Rol</label>
              <input
                type="text"
                value={newTestimonial.role}
                onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Öğrenci, Geliştirici, Doktor vb."
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2">Değerlendirme</label>
              {renderStars(
                newTestimonial.rating, 
                true, 
                (rating) => setNewTestimonial({...newTestimonial, rating})
              )}
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium mb-2">Yorumunuz</label>
              <textarea
                value={newTestimonial.comment}
                onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
                placeholder="Projelerimiz hakkında düşüncelerinizi paylaşın..."
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700"
              >
                İptal
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={!newTestimonial.name || !newTestimonial.comment}
              >
                Paylaş
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Testimonials; 
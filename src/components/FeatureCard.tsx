import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  img: string;
  className?: string;
  link?: string;
  isComingSoon?: boolean;
}

const FeatureCard = ({ className, title, subtitle, img, link, isComingSoon }: FeatureCardProps) => {
  const getAltText = (title: string) => {
    const altTexts: Record<string, string> = {
      "Medical AI": "Medical AI projesi - Kan tahlili analizi ve sağlık verileri yorumlama aracı görseli",
      "YouTube Comment AI": "YouTube Comment AI projesi - Video yorumları analizi ve sentiment analiz aracı görseli", 
      "Summarize AI": "Summarize AI projesi - Metin özetleme ve içerik analiz aracı görseli",
      "Lawyer AI": "Lawyer AI projesi - Yasal belge analizi ve hukuki danışmanlık aracı görseli (yakında)"
    };
    return altTexts[title] || `${title} - AI projesi görseli`;
  };

  return (
    <article
      className={cn(
        className,
        "bg-card border-outline hover:border-accent mx-5 flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:scale-105 sm:mx-10 md:mx-0",
      )}
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="relative">
        <img 
          src={img} 
          alt={getAltText(title)} 
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
          itemProp="image"
        />
        {isComingSoon && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Yakında
          </div>
        )}
      </div>
      <div className="m-8 space-y-4">
        <h3 className="text-lg font-medium text-[#E4E4E7]" itemProp="name">{title}</h3>
        <p className="text-regular max-w-[480px] text-sm" itemProp="description">{subtitle}</p>
        {link && (
          <meta itemProp="url" content={link} />
        )}
        <meta itemProp="applicationCategory" content="AI Application" />
        <meta itemProp="operatingSystem" content="Web Browser" />
      </div>
    </article>
  );
};

export default FeatureCard;

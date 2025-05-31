import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          كل ما تحتاجه من المنزل
        </motion.h2>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          معلومات هامة، استمارات الاعدادية، شقق الاسكان الاجتماعي، تقديمات اون لاين، دفع الكتروني وكل ما يهمك - كل حاجة وانت في بيتك
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleScrollToServices}
            className="gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fas fa-arrow-down ml-2"></i>
            استكشف خدماتنا
          </Button>
          
          <Button
            asChild
            className="gradient-secondary hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whatsapp-btn"
          >
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp ml-2"></i>
              تواصل معنا عبر واتساب
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

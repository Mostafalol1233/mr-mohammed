import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-5 left-5 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Button
          asChild
          className="gradient-secondary hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300 whatsapp-btn w-16 h-16"
          size="icon"
        >
          <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
}

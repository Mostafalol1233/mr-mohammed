import { motion } from "framer-motion";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <Header />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  );
}

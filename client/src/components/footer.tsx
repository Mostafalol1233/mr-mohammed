import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 space-x-reverse mb-4">
            <div className="bg-primary p-3 rounded-full">
              <i className="fas fa-star text-xl"></i>
            </div>
            <h4 className="text-2xl font-bold">Mr. Mohammed</h4>
          </div>
          
          <p className="text-gray-400 mb-6">معلومات هامة وخدمات متكاملة</p>
          
          <div className="flex justify-center space-x-6 space-x-reverse mb-6">
            <a 
              href="https://wa.me/201225556126" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors duration-300"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a 
              href="https://youtube.com/@mesternet-mo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors duration-300"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a 
              href="tel:01225556126" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; 2024 Mr. Mohammed. جميع الحقوق محفوظة.</p>
            <p className="text-gray-500 text-sm mt-2">
              Developed by <a href="https://linktr.ee/Mustafa_Bemo" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Mustafa</a> with ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

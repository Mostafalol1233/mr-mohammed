import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="bg-primary text-white p-3 rounded-full">
              <i className="fas fa-star text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Mr Mohamed</h1>
              <p className="text-gray-600 text-sm">خدمات الكترونية متكاملة</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <div className="text-center">
              <p className="text-gray-600 text-sm">اتصل بنا</p>
              <p className="font-bold text-primary" dir="ltr">01225556126</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

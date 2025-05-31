import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">تواصل معنا الآن</h3>
          <p className="text-gray-600 text-lg mb-8">
            نحن هنا لمساعدتك في جميع احتياجاتك. تواصل معنا عبر واتساب أو شاهد قناتنا على يوتيوب للمزيد من المعلومات
          </p>
          
          <Card className="gradient-secondary text-white p-8 rounded-2xl shadow-lg mb-8">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-4">
                <i className="fab fa-whatsapp text-4xl ml-3"></i>
                <div>
                  <h4 className="text-xl font-bold">تواصل معنا عبر واتساب</h4>
                  <p className="text-green-100">نجيب على رسائلكم في أسرع وقت</p>
                </div>
              </div>
              <p className="text-2xl font-bold mb-4" dir="ltr">01225556126</p>
              <Button
                asChild
                className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 whatsapp-btn"
              >
                <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  ابدأ المحادثة الآن
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <i className="fas fa-phone text-primary text-3xl mb-3"></i>
              <h4 className="font-bold text-gray-800 mb-2">اتصل بنا</h4>
              <p className="text-gray-600" dir="ltr">01225556126</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <a 
                href="https://youtube.com/@mesternet-mo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:transform hover:scale-105 transition-all duration-300"
              >
                <i className="fab fa-youtube text-red-600 text-3xl mb-3"></i>
                <h4 className="font-bold text-gray-800 mb-2">قناتنا</h4>
                <p className="text-gray-600">mesternet-mo</p>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <i className="fas fa-clock text-primary text-3xl mb-3"></i>
              <h4 className="font-bold text-gray-800 mb-2">ساعات العمل</h4>
              <p className="text-gray-600">يومياً من 4 مساءً إلى 11 مساءً</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <i className="fas fa-map-marker-alt text-primary text-3xl mb-3"></i>
              <h4 className="font-bold text-gray-800 mb-2">العنوان</h4>
              <p className="text-gray-600">ميدان بهتيم، شبرا الخيمة</p>
              <p className="text-gray-500 text-sm" dir="ltr">Bahteem Square, Shubra El Kheima</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

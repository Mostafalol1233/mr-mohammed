import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

const features: Feature[] = [
  {
    title: "سرعة في التنفيذ",
    description: "نلتزم بالمواعيد المحددة ونقدم خدماتنا في أسرع وقت ممكن",
    icon: "fas fa-clock",
    iconBg: "bg-primary"
  },
  {
    title: "جودة عالية",
    description: "نستخدم أحدث التقنيات لضمان أعلى مستوى من الجودة والدقة",
    icon: "fas fa-star",
    iconBg: "gradient-secondary"
  },
  {
    title: "أسعار منافسة",
    description: "نقدم أفضل الأسعار في السوق مع الحفاظ على جودة الخدمة",
    icon: "fas fa-dollar-sign",
    iconBg: "gradient-accent"
  },
  {
    title: "دعم متواصل",
    description: "فريق دعم متاح 24/7 للرد على استفساراتكم ومساعدتكم",
    icon: "fas fa-headset",
    iconBg: "bg-purple-600"
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h3>
          <p className="text-gray-600 text-lg">نحن نقدم أفضل الخدمات بأعلى جودة وبأسعار منافسة</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 bg-white shadow-lg transition-transform duration-300 hover:scale-105 h-full">
                <CardContent className="p-0">
                  <div className={`${feature.iconBg} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${feature.icon} text-2xl`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

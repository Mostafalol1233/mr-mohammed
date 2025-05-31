import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
  iconBg: string;
}

const services: Service[] = [
  {
    id: "document-photography",
    title: "تصوير المستندات",
    description: "تصوير احترافي لجميع أنواع المستندات والأوراق الرسمية بجودة عالية ووضوح ممتاز",
    icon: "fas fa-camera",
    features: ["جودة عالية وواضحة", "سرعة في التسليم", "أسعار منافسة"],
    gradient: "from-blue-50 to-indigo-100",
    iconBg: "bg-primary"
  },
  {
    id: "school-applications",
    title: "تقديمات المدارس",
    description: "مساعدة في إجراءات التقديم للمدارس وتجهيز الأوراق المطلوبة بدقة واحترافية",
    icon: "fas fa-graduation-cap",
    features: ["تجهيز كامل للأوراق", "متابعة حالة التقديم", "استشارة مجانية"],
    gradient: "from-green-50 to-emerald-100",
    iconBg: "gradient-secondary"
  },
  {
    id: "university-applications",
    title: "تقديمات الجامعات",
    description: "خدمات شاملة لتقديمات الجامعات وتجهيز الملفات الأكاديمية والأوراق المطلوبة",
    icon: "fas fa-university",
    features: ["إعداد الملف الأكاديمي", "ترجمة معتمدة", "متابعة شاملة"],
    gradient: "from-purple-50 to-violet-100",
    iconBg: "bg-purple-600"
  },
  {
    id: "official-documents",
    title: "الأوراق الرسمية",
    description: "خدمات استخراج وتجديد الأوراق الرسمية والمستندات الحكومية بسرعة وسهولة",
    icon: "fas fa-file-alt",
    features: ["استخراج شهادات ميلاد", "تجديد البطاقة الشخصية", "خدمات جوازات السفر"],
    gradient: "from-orange-50 to-amber-100",
    iconBg: "gradient-accent"
  },
  {
    id: "printing-services",
    title: "خدمات الطباعة",
    description: "طباعة عالية الجودة لجميع أنواع المستندات والتصاميم بألوان زاهية ووضوح ممتاز",
    icon: "fas fa-print",
    features: ["طباعة ملونة وأبيض وأسود", "أحجام مختلفة", "جودة احترافية"],
    gradient: "from-red-50 to-pink-100",
    iconBg: "bg-red-600"
  },
  {
    id: "translation-services",
    title: "خدمات الترجمة",
    description: "ترجمة معتمدة ودقيقة للمستندات الرسمية والأكاديمية بجميع اللغات",
    icon: "fas fa-language",
    features: ["ترجمة معتمدة", "جميع اللغات", "دقة عالية"],
    gradient: "from-teal-50 to-cyan-100",
    iconBg: "bg-teal-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">خدماتنا المتميزة</h3>
          <p className="text-gray-600 text-lg">نوفر لك جميع الخدمات التي تحتاجها بسرعة وجودة عالية</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`service-card bg-gradient-to-br ${service.gradient} border-opacity-20 shadow-lg h-full`}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`${service.iconBg} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      <i className={`${service.icon} text-2xl`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 ml-2"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    asChild
                    className="w-full gradient-secondary hover:opacity-90 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 whatsapp-btn"
                  >
                    <a href={getServiceWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp ml-2"></i>
                      اطلب الخدمة عبر واتساب
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

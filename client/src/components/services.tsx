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
    id: "preparatory-forms",
    title: "استمارات الاعدادية",
    description: "كل ما يخص استمارات الاعدادية وطرق التقديم والمتابعة اون لاين",
    icon: "fas fa-file-text",
    features: ["طرق التقديم الصحيحة", "متابعة حالة الاستمارة", "نصائح مهمة"],
    gradient: "from-blue-50 to-indigo-100",
    iconBg: "bg-primary"
  },
  {
    id: "social-housing",
    title: "شقق الاسكان الاجتماعي",
    description: "كل ما يهمك عن شقق الاسكان الاجتماعي والتقديم والشروط المطلوبة",
    icon: "fas fa-home",
    features: ["شروط التقديم", "طريقة الحجز", "متابعة الطلبات"],
    gradient: "from-green-50 to-emerald-100",
    iconBg: "gradient-secondary"
  },
  {
    id: "online-applications",
    title: "التقديمات اون لاين",
    description: "كل ما يهمك عن التقديمات عن طريق النت وطرق التسجيل الصحيحة",
    icon: "fas fa-laptop",
    features: ["طرق التسجيل", "نصائح مهمة", "تجنب الأخطاء الشائعة"],
    gradient: "from-purple-50 to-violet-100",
    iconBg: "bg-purple-600"
  },
  {
    id: "online-payments",
    title: "الدفع الالكتروني",
    description: "كيفية استخدام الفيزا والدفع اون لاين بأمان وسهولة",
    icon: "fas fa-credit-card",
    features: ["استخدام الفيزا بأمان", "طرق الدفع المختلفة", "تجنب عمليات النصب"],
    gradient: "from-orange-50 to-amber-100",
    iconBg: "gradient-accent"
  },
  {
    id: "job-applications",
    title: "تقديم الوظائف",
    description: "معلومات هامة عن تقديم الوظائف الحكومية والخاصة والمطلوب",
    icon: "fas fa-briefcase",
    features: ["الوظائف المتاحة", "شروط التقديم", "طرق التقديم الصحيحة"],
    gradient: "from-red-50 to-pink-100",
    iconBg: "bg-red-600"
  },
  {
    id: "general-help",
    title: "مساعدة عامة",
    description: "كل حاجة مش عارف تعملها - نساعدك في أي خدمة الكترونية",
    icon: "fas fa-hands-helping",
    features: ["مساعدة شخصية", "شرح مفصل", "متابعة حتى انتهاء المهمة"],
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
          <p className="text-gray-600 text-lg">معلومات هامة تهمك - كل ما تحتاجه وانت في بيتك</p>
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

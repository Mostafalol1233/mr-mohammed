export interface WhatsAppConfig {
  phoneNumber: string;
  baseMessage: string;
}

export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumber: "201225556126",
  baseMessage: "السلام عليكم، أريد الاستفسار عن خدماتكم"
};

export const createWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

export const getServiceWhatsAppLink = (serviceName: string): string => {
  const message = `السلام عليكم، أريد طلب خدمة ${serviceName}`;
  return createWhatsAppLink(message);
};

export const getGeneralWhatsAppLink = (): string => {
  return createWhatsAppLink(WHATSAPP_CONFIG.baseMessage);
};

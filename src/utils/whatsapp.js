export const PHONE_NUMBER = '919014214441'; // Asha Safety Nets Vizag Contact
export const DISPLAY_PHONE = '+91 9014214441';

export function getWhatsAppQuoteLink({ service = 'Balcony Safety Net', area = 'Vizag', message = '' } = {}) {
  const text = `Hi Asha Safety Nets Vizag! I would like a FREE quote for *${service}* in *${area}*. ${message ? `Note: ${message}` : 'Please contact me for free site measurement.'}`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppCustomLink(customMessage) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}

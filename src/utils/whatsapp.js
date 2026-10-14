export const PHONE_NUMBER = '917888264441'; // Asha Safety Nets Vizag Contact
export const DISPLAY_PHONE = '+91 7888264441';
export const RAW_PHONE = '7888264441';
export const EMAIL_ADDRESS = 'ashasafetynetsvizag@gmail.com';
export const INSTAGRAM_URL = 'https://www.facebook.com/share/19jWK4RCiL/';
export const FACEBOOK_URL = 'https://www.facebook.com/share/19jWK4RCiL/';

export function getWhatsAppQuoteLink({ service = 'Balcony Safety Net', area = 'Vizag', message = '' } = {}) {
  const text = `Hi Asha Safety Nets Vizag! I would like a FREE quote for *${service}* in *${area}*. ${message ? `Note: ${message}` : 'Please contact me for free site measurement.'}`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppCustomLink(customMessage) {
  const text = customMessage || 'Hi Asha Safety Nets Vizag! I need information about safety nets installation in Visakhapatnam.';
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

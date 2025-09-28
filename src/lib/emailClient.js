import emailjs from "@emailjs/browser";

// Vite uses import.meta.env with VITE_ prefix
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
if (PUBLIC_KEY) {
  try {
    emailjs.init(PUBLIC_KEY);
  } catch (e) {
    console.error("EmailJS init failed", e);
  }
}

export const sendEmail = (templateParams, serviceId = SERVICE_ID, templateId = TEMPLATE_ID) => {
  if (!serviceId || !templateId) {
    return Promise.reject(new Error("Missing serviceId or templateId"));
  }
  return emailjs.send(serviceId, templateId, templateParams);
};

export const sendForm = (form, serviceId = SERVICE_ID, templateId = TEMPLATE_ID) => {
  if (!serviceId || !templateId) {
    return Promise.reject(new Error("Missing serviceId or templateId"));
  }
  return emailjs.sendForm(serviceId, templateId, form);
};

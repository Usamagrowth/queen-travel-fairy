import emailjs from '@emailjs/browser';

export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'rl5-5EWhF22Km5XjP';
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ifz1z0m';
export const EMAILJS_TEMPLATE_BOOKING = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_0tmahsn';

// Using your email found in the Reply To field of image_3a32d5.png
const ADMIN_EMAIL = 'usamaomodara@gmail.com'; 

export const sendBookingInquiry = (templateParams) => {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_BOOKING,
    {
      ...templateParams,
      email: ADMIN_EMAIL, // Changed from to_email to email to match image_3a32d5.png
    },
    EMAILJS_PUBLIC_KEY
  );
};

export const sendNewsletterSignup = (subscriberEmail) => {
  const templateParams = {
    email: ADMIN_EMAIL, // This matches the {{email}} field in your screenshot
    from_name: 'Newsletter Signup',
    from_email: subscriberEmail.trim(),
    destination: 'Footer Mailing List',
    travel_date: 'N/A',
    return_date: 'N/A',
    to_name: 'Queen Travel Fairy Team',
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_BOOKING,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
};
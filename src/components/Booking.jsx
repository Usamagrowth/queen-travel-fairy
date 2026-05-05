import { useState } from 'react';
import emailjs from '@emailjs/browser';

/*
 * EmailJS Setup Instructions:
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}} - Customer's name
 *    - {{from_email}} - Customer's email
 *    - {{destination}} - Selected destination
 *    - {{travel_date}} - Travel date
 *    - {{return_date}} - Return date
 *    - {{to_name}} - Your business name
 * 4. Replace the SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY below with your actual values
 */

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    returnDate: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // EmailJS configuration - Replace these with your actual IDs
  const SERVICE_ID = 'service_hfchuvt';
  const TEMPLATE_ID = 'template_0tmahsn';
  const PUBLIC_KEY = 'rl5-5EWhF22Km5XjP';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.destination) newErrors.destination = 'Please select a destination';
    if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return date is required';
    else if (new Date(formData.returnDate) <= new Date(formData.travelDate)) newErrors.returnDate = 'Return date must be after travel date';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Prepare email data
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        destination: formData.destination,
        travel_date: formData.travelDate,
        return_date: formData.returnDate,
        to_name: 'Queen Travel Fairy Team',
      };

      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailData,
        PUBLIC_KEY
      );

      // Success
      setSubmitMessage('Thank you for your inquiry! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        destination: '',
        travelDate: '',
        returnDate: ''
      });
      setErrors({});

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className=" bg-slate-950 text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">Inquiry Form</p>
          <h2 className="text-xl md:text-3xl font-serif font-bold leading-tight">
            Let our experts craft your next journey.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-sans max-w-xl">
            Share your preferred destination and travel dates, and we'll design a tailored experience that blends luxury, privacy, and seamless service.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-[#D4AF37] font-semibold">Personalized planning</p>
              <p className="text-slate-300 text-sm mt-3">Concierge-led journeys built around your schedule and style.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-[#D4AF37] font-semibold">Seamless luxury</p>
              <p className="text-slate-300 text-sm mt-3">Every detail handled with refinement, from arrival to departure.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-3">
              <span className="text-sm text-slate-300 font-sans">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-4 text-white outline-none transition-all focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </label>
            <label className="space-y-3">
              <span className="text-sm text-slate-300 font-sans">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-4 text-white outline-none transition-all focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </label>
          </div>

          <label className="space-y-3">
            <span className="text-sm text-slate-300 font-sans">Preferred Destination</span>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-4 text-white outline-none transition-all focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
            >
              <option value="">Select a destination</option>
              {/* USA Cities */}
              <option value="New York, USA">New York, USA</option>
              <option value="Los Angeles, USA">Los Angeles, USA</option>
              <option value="Miami, USA">Miami, USA</option>
              <option value="Chicago, USA">Chicago, USA</option>
              <option value="San Francisco, USA">San Francisco, USA</option>
              <option value="Las Vegas, USA">Las Vegas, USA</option>
              <option value="Boston, USA">Boston, USA</option>
              <option value="Seattle, USA">Seattle, USA</option>
              <option value="Orlando, USA">Orlando, USA</option>
              <option value="Washington D.C., USA">Washington D.C., USA</option>
              {/* UK Cities */}
              <option value="London, UK">London, UK</option>
              <option value="Manchester, UK">Manchester, UK</option>
              <option value="Edinburgh, UK">Edinburgh, UK</option>
              <option value="Birmingham, UK">Birmingham, UK</option>
              <option value="Liverpool, UK">Liverpool, UK</option>
              <option value="Glasgow, UK">Glasgow, UK</option>
              <option value="Leeds, UK">Leeds, UK</option>
              <option value="Bristol, UK">Bristol, UK</option>
              <option value="Newcastle, UK">Newcastle, UK</option>
              <option value="Sheffield, UK">Sheffield, UK</option>
              {/* Other existing options */}
              <option value="Paris, France">Paris, France</option>
              <option value="Dubai, UAE">Dubai, UAE</option>
              <option value="Maldives">Maldives</option>
              <option value="Santorini, Greece">Santorini, Greece</option>
            </select>
            {errors.destination && <p className="text-red-400 text-sm">{errors.destination}</p>}
          </label>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-3">
              <span className="text-sm text-slate-300 font-sans">Travel Dates</span>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-4 text-white outline-none transition-all focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              {errors.travelDate && <p className="text-red-400 text-sm">{errors.travelDate}</p>}
            </label>
            <label className="space-y-3">
              <span className="text-sm text-slate-300 font-sans">Return Date</span>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-4 text-white outline-none transition-all focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              {errors.returnDate && <p className="text-red-400 text-sm">{errors.returnDate}</p>}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] sm:tracking-[0.22em] text-xs sm:text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
          >
            {isSubmitting ? 'Sending...' : 'Request Consultation'}
          </button>

          {submitMessage && (
            <div className={`mt-4 p-4 rounded-lg text-center ${
              submitMessage.includes('error') 
                ? 'bg-red-900/20 border border-red-500/30 text-red-400'
                : 'bg-green-900/20 border border-green-500/30 text-green-400'
            }`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;

import { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    returnDate: ''
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Proceed with form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      destination: '',
      travelDate: '',
      returnDate: ''
    });
  };

  return (
    <section id="booking" className="min-h-screen bg-slate-950 text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">Inquiry Form</p>
          <h2 className="text-3xl font-serif font-bold leading-tight">
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
            className="w-fit rounded-full bg-linear-to-r from-[#D4AF37] via-[#f7d671] to-[#d4af37] px-3 py-3 text-slate-950 font-semibold uppercase tracking-[0.15em] shadow-xl shadow-[#D4AF37]/20 transition-transform duration-200 cursor-pointer hover:-translate-y-1"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;

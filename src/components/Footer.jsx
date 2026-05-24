import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';
import { sendNewsletterSignup } from '../config/emailjs';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: null, text: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        const trimmed = email.trim();
        if (!trimmed) {
            setStatus({ type: 'error', text: 'Please enter your email address.' });
            return;
        }
        setSubmitting(true);
        setStatus({ type: null, text: '' });
        try {
            const result = await sendNewsletterSignup(trimmed);
            if (result.status === 200) {
                setStatus({ type: 'success', text: 'Thanks! You are on the list.' });
                setEmail('');
            }
        } catch (err) {
            const detail =
                typeof err === 'object' && err !== null && 'text' in err ? err.text : String(err);
            console.error('Newsletter EmailJS failed:', detail);
            setStatus({
                type: 'error',
                text: 'Could not subscribe right now. Try again later or email us directly.',
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <footer
            id="contact"
            className="bg-slate-950 text-slate-100 border-t border-slate-800 py-12 md:py-16"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    <div className="space-y-5">
                        <div>
                            <p className="text-xl md:text-3xl font-serif font-semibold tracking-tight text-white">Queen Travel Fairy</p>
                            <p className="mt-3 max-w-sm text-slate-400">
                                Discover unforgettable journeys with luxury service, custom itineraries, and expert local guides. Let us make your next trip effortless.
                            </p>
                        </div>
                        <div className="space-y-3 text-slate-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#D4AF37] " />
                                <span>123 Royal Avenue, City Center, Dreamland</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#D4AF37] " />
                                <a href="tel:+15045174191" className="hover:text-white transition-colors">+1 504-517-4191</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#D4AF37] " />
                                <a href="mailto:Queentravelfairy@yahoo.com" className="hover:text-white transition-colors">Queentravelfairy@yahoo.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
                            <ul className="mt-5 space-y-3 text-slate-300">
                                <li>
                                    <a href="#destination" className="hover:text-white transition-colors">Destinations</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-white transition-colors">Travel Services</a>
                                </li>
                                <li>
                                    <a href="#reviews" className="hover:text-white transition-colors">Customer Stories</a>
                                </li>
                                <li>
                                    <a href="#booking" className="hover:text-white transition-colors">Book Now</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h3>
                            <ul className="mt-5 space-y-3 text-slate-300">
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors">About Us</a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors">Our Team</a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_60px_rgba(15,23,42,0.35)]">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Join the Club</h3>
                        <p className="mt-4 text-slate-400">Sign up for travel tips, destination launches, and exclusive offers delivered monthly.</p>
                        <form className="mt-6 space-y-4" onSubmit={handleSubscribe}>
                            <label className="sr-only" htmlFor="footer-email">Email</label>
                            <input
                                id="footer-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                disabled={submitting}
                                autoComplete="email"
                                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 disabled:opacity-60"
                            />
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full px-3 sm:px-4 py-2 cursor-pointer sm:py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] sm:tracking-[0.22em] text-xs sm:text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)] z-20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                {submitting ? 'Sending…' : 'Subscribe'}
                            </button>
                        </form>
                        {status.text && (
                            <p
                                className={`mt-3 text-sm ${
                                    status.type === 'error' ? 'text-red-400' : 'text-emerald-400'
                                }`}
                            >
                                {status.text}
                            </p>
                        )}
                        <div className="mt-6 flex items-center gap-4 text-slate-400">
                            <a href="https://web.facebook.com/profile.php?id=61588805145654" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-slate-800 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                                <FaFacebook className="h-4 w-4" />
                            </a>
                            <a href="https://www.instagram.com/thequeenstravelfairy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-slate-800 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                                <FaInstagram className="h-4 w-4" />
                            </a>
                            <a href="https://x.com/504Qu33n777" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="rounded-full border border-slate-800 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                                <FaXTwitter className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between gap-4">
                    <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Queen Travel Fairy. All rights reserved.</p>
               </div>
            </div>
        </footer>
    );
};

export default Footer;

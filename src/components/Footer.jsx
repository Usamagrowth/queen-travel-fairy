import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-100 border-t border-slate-800 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    <div className="space-y-5">
                        <div>
                            <p className="text-xl md:text-3xl font-semibold tracking-tight text-white">Queen Travel Fairy</p>
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
                                <a href="tel:+1 504-517-4191" className="hover:text-white transition-colors">+1 504-517-4191</a>
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
                                    <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
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
                                    <a href="#team" className="hover:text-white transition-colors">Our Team</a>
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
                        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <label className="sr-only" htmlFor="footer-email">Email</label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f7d671]"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="mt-6 flex items-center gap-4 text-slate-400">
                            <a href="web.facebook.com/QueenTravelFairy" target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                                <FaFacebook className="h-4 w-4" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                                <FaInstagram className="h-4 w-4" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                                <FaTwitter className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
                    <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Queen Travel. All rights reserved.</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-0 sm:justify-end">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                        <a href="#support" className="hover:text-white transition-colors">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

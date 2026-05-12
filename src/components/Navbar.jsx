import { useState } from 'react';
import logo from '../assets/queen-logo.png';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
   const [mobileNav, setMobileNav] = useState(false);

const toggleMobileNav = () => {
  setMobileNav(!mobileNav)
};
     return(
        <>
     <nav className='flex justify-between items-center px-5 py-5 '>
       <a className="w-20 h-20" href="/">
        <img className="w-full h-full object-cover" src={logo} alt="Logo" />
      </a>
      <div>
     <ul className='md:flex hidden gap-5'>
            <li className='text-xl'><a href="#home">Home</a></li>
            <li className='text-xl'><a href="#about">About</a></li>
            <li className='text-xl'><a href="#destination">Destination</a></li>
            <li className='text-xl'><a href="#services">Services</a></li>
            <li className='text-xl'><a href="#reviews">Reviews</a></li>
            <li className='text-xl'><a href="#faq">FAQ</a></li>
     </ul>
     </div>
      <div>
        <a  href="#booking" className="md:flex hidden px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] sm:tracking-[0.22em] text-xs sm:text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)]">
          Book Now
        </a>
      </div>
      <div>
        <button onClick={toggleMobileNav} className="md:hidden cursor-pointer text-slate-950 ">
           {mobileNav ? <X size={24} /> : <Menu size={24}  />}
        </button>
      </div>
    </nav>
 {mobileNav && (
    <aside>
      <ul className='flex md:hidden flex-col px-5 pb-5 items-end gap-5'>
            <li className='text-xl'><a href="#home" onClick={() => setMobileNav(false)}>Home</a></li>
            <li className='text-xl'><a href="#about" onClick={() => setMobileNav(false)}>About</a></li>
            <li className='text-xl'><a href="#destination" onClick={() => setMobileNav(false)}>Destination</a></li>
            <li className='text-xl'><a href="#services" onClick={() => setMobileNav(false)}>Services</a></li>
            <li className='text-xl'><a href="#reviews" onClick={() => setMobileNav(false)}>Reviews</a></li>
            <li className='text-xl'><a href="#faq" onClick={() => setMobileNav(false)}>FAQ</a></li>
        </ul>
   </aside>)}
   </>
  );
};

export default Navbar;
import { useState } from 'react';
import logo from '../assets/queen-logo.jpg';
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
        <img className="w-full h-full object-cover" src={logo} alt="" />
      </a>
      <div>
     <ul className='md:flex hidden gap-5'>
            <li className='text-xl'><a href="#home">Home</a></li>
            <li className='text-xl'><a href="#about">About</a></li>
            <li className='text-xl'><a href="#destination">Destination</a></li>
            <li className='text-xl'><a href="#services">Services</a></li>
            <li className='text-xl'><a href="#reviews">Reviews</a></li>
     </ul>
     </div>
      <div>
        <a  href="#booking" className="md:flex hidden bg-[#D4AF37] cursor-pointer text-white px-4 py-2 rounded-xl">
          Book Now
        </a>
      </div>
      <div>
        <button onClick={toggleMobileNav} className="md:hidden cursor-pointer">
           {mobileNav ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
 {mobileNav && (
    <aside>
      <ul className='flex md:hidden flex-col px-5 pb-5 items-end gap-5'>
            <li className='text-xl'><a href="#home">Home</a></li>
            <li className='text-xl'><a href="#about">About</a></li>
            <li className='text-xl'><a href="#destination">Destination</a></li>
            <li className='text-xl'><a href="#services">Services</a></li>
            <li className='text-xl'><a href="#reviews">Reviews</a></li>
        </ul>
   </aside>)}
   </>
  );
};

export default Navbar;
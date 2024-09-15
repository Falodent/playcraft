import Image from "next/image";
import Logo from "@/assets/small-logo-white.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-20 w-full">
      <div className="px-8 md:px-32 fixed flex items-center justify-between w-full h-20 bg-white z-20">
        <Image src={Logo} alt="icon" width={50} height={50} quality={100} />

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-primary font-medium">
              Home
            </Link>
            <a href="#about" className="text-primary font-medium">
              About
            </a>
            <a href="#services" className="text-primary font-medium">
              Services
            </a>
            <a href="#resources" className="text-primary font-medium">
              Resources
            </a>
          </div>

          <a
            href="#contact"
            className="px-8 py-3 text-sm font-medium bg-primary text-white rounded-3xl"
          >
            Contact
          </a>
        </div>

        <button
          className="flex md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>
   
        {isOpen && <div className="md:hidden w-full h-[100vh] fixed bg-white top-20 left-0 z-20">
          <div className="p-8 pb-3 space-y-1">
            <Link href="/" onClick={()=>setIsOpen(false)}>
              <p className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <a href="#about" onClick={()=>setIsOpen(false)}>
              <p className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
                About
              </p>
            </a>
            <a href="#services" onClick={()=>setIsOpen(false)}>
              <p className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
                Services
              </p>
            </a>
            <a href="#resources" onClick={()=>setIsOpen(false)}>
              <p className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
                Resources
              </p>
            </a>
            <a href="#contact" onClick={()=>setIsOpen(false)}>
              <p className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </p>
            </a>
          </div>
        </div>}
    </div>
  );
};
export default Navbar;

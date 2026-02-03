"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const rentalItems = [
  "P.A System & Music/Mobile Disco",
  "Line Array Sound System",
  "Pro-Lights & Effects",
  "Aluminum Truss & Stages",
  "LED Screens & Video Walls",
  "Karaoke Mics / KTv Machines",
  "DLP Projectors & Screens",
  "DJ Equipment",
  "Wedding & Corporate Decor Rentals",
  "Power / Generators",
  "Backline Equipment",
];

const serviceItems = [
  "Wedding & Corporate Decor",
  "Invitation Cards",
  "Pro-Audio & Visual/Lighting",
  "Home Audio",
  "Systems Installations",
  "Flex Audio Brand ",
  "Full Event Management and Planning",
  "Backline Equipment",
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'rentals' | 'services' | null
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isRentalsPage = location.pathname.startsWith("/rentals");
  const isServicesPage = location.pathname.startsWith("/services");
  
  // Pages that should have black navbar text by default
  const isDarkTextPage = ["/faq", "/pricing", "/portfolio", "/contact"].some(path => location.pathname.startsWith(path));

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? "bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2 group" onClick={closeMenu}>
             <img
              src="/NewFlexLogo1.png"
              alt="Flex Events"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

            {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
             <NavLink to="/" isActive={location.pathname === "/"} isScrolled={isScrolled} isDarkText={isDarkTextPage}>Home</NavLink>
             
             <Dropdown 
                title="Services" 
                items={serviceItems} 
                basePath="/services" 
                isActive={isServicesPage}
                isOpen={activeDropdown === 'services'}
                onHover={(state) => setActiveDropdown(state ? 'services' : null)}
                isScrolled={isScrolled}
                isDarkText={isDarkTextPage}
                currentPath={location.pathname}
             />

             <Dropdown 
                title="Flex Rentals" 
                items={rentalItems} 
                basePath="/rentals"
                isActive={isRentalsPage} 
                isOpen={activeDropdown === 'rentals'}
                onHover={(state) => setActiveDropdown(state ? 'rentals' : null)}
                isScrolled={isScrolled}
                isDarkText={isDarkTextPage}
                currentPath={location.pathname}
             />

             <NavLink to="/portfolio" isActive={location.pathname === "/portfolio"} isScrolled={isScrolled} isDarkText={isDarkTextPage}>Portfolio</NavLink>
             <NavLink to="/pricing" isActive={location.pathname === "/pricing"} isScrolled={isScrolled} isDarkText={isDarkTextPage}>Pricing</NavLink>
             <NavLink to="/faq" isActive={location.pathname === "/faq"} isScrolled={isScrolled} isDarkText={isDarkTextPage}>FAQ</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
                <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95">
                    Contact Us
                </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden relative z-50 p-2 -mr-2 ${isScrolled || mobileMenuOpen || isDarkTextPage ? 'text-black' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 lg:hidden overflow-y-auto"
            >
                <div className="flex flex-col space-y-6">
                    <MobileLink to="/" onClick={closeMenu} isActive={location.pathname === "/"}>Home</MobileLink>
                    
                    <MobileDropdown 
                        title="Services" 
                        items={serviceItems} 
                        basePath="/services"
                        isActive={isServicesPage}
                        onClose={closeMenu}
                        currentPath={location.pathname}
                    />

                    <MobileDropdown 
                        title="Flex Rentals" 
                        items={rentalItems} 
                        basePath="/rentals"
                        isActive={isRentalsPage}
                        onClose={closeMenu}
                        currentPath={location.pathname}
                    />
                    
                    <MobileLink to="/portfolio" onClick={closeMenu} isActive={location.pathname === "/portfolio"}>Portfolio</MobileLink>
                    <MobileLink to="/pricing" onClick={closeMenu} isActive={location.pathname === "/pricing"}>Pricing</MobileLink>
                    <MobileLink to="/faq" onClick={closeMenu} isActive={location.pathname === "/faq"}>FAQ</MobileLink>
                    <MobileLink to="/contact" onClick={closeMenu} isActive={location.pathname === "/contact"}>Contact</MobileLink>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const NavLink = ({ to, children, isActive, isScrolled, isMobile, isDarkText }) => {
  const baseColor = isScrolled || isMobile || isDarkText ? 'text-[#1d1d1f]' : 'text-white';
  const hoverColor = isScrolled || isMobile || isDarkText ? 'hover:text-primary' : 'hover:text-white/80';
  const activeColor = 'text-primary';

  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors duration-200 ${isActive ? activeColor : `${baseColor} ${hoverColor}`}`}
    >
      {children}
    </Link>
  );
};

const Dropdown = ({ title, items, basePath, isActive, isOpen, onHover, isScrolled, currentPath, isDarkText }) => {
    const baseColor = isScrolled || isDarkText ? 'text-[#1d1d1f]' : 'text-white';
    const hoverColor = isScrolled || isDarkText ? 'hover:text-primary' : 'hover:text-white/80';
    
    return (
    <div 
        className="relative h-20 flex items-center"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
    >
        <button 
            className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${isActive || isOpen ? 'text-primary' : `${baseColor} ${hoverColor}`}`}
        >
            {title}
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl py-2 overflow-hidden"
                >
                    {items.map((item, idx) => {
                        const itemPath = `${basePath}/${idx + 1}`;
                        const isItemActive = currentPath === itemPath;
                        return (
                            <Link 
                                key={idx} 
                                to={itemPath}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                    isItemActive 
                                    ? 'text-primary bg-surface-subtle font-medium' 
                                    : 'text-content-subtle hover:text-primary hover:bg-surface-subtle'
                                }`}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
)};

const MobileLink = ({ to, children, onClick, isActive }) => (
    <Link 
        to={to} 
        onClick={onClick} 
        className={`text-2xl font-display font-semibold ${isActive ? 'text-primary' : 'text-content-prominent'}`}
    >
        {children}
    </Link>
);

const MobileDropdown = ({ title, items, basePath, isActive, onClose, currentPath }) => {
    const [isOpen, setIsOpen] = useState(isActive);

    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full text-2xl font-display font-semibold ${isActive ? 'text-primary' : 'text-content-prominent'}`}
            >
                {title}
                <ChevronDownIcon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pl-4 pt-4 flex flex-col space-y-3 border-l-2 border-surface-subtle ml-2 mt-2">
                            {items.map((item, idx) => {
                                const itemPath = `${basePath}/${idx + 1}`;
                                const isItemActive = currentPath === itemPath;
                                return (
                                    <Link 
                                        key={idx} 
                                        to={itemPath}
                                        onClick={onClose}
                                        className={`text-lg transition-colors ${
                                            isItemActive 
                                            ? 'text-primary font-medium' 
                                            : 'text-content-subtle'
                                        }`}
                                    >
                                        {item}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
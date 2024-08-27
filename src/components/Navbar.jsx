import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Corporate", path: "/corporate" },
        { link: "Student", path: "/student" },
        { link: "Blog", path: "/blog" },
    ];

    return (
        <header className= "w-full ${...isSticky ? 'bg-white shadow-md' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
            <nav className="py-4 lg:px-14 px-4 bg-cream flex justify-between items-center">
                <a href="/" className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="w-12" />
                </a>
                
                <ul className="hidden md:flex space-x-12">
                    {navItems.map(({ link, path }) => (
                        <a
                            key={path}
                            href={path}
                            className="cursor-pointer text-base text-gray-900 hover:text-brandPrimary font-medium"
                        >
                            {link}
                        </a>
                    ))}
                </ul>
                
                <div className="hidden lg:flex items-center space-x-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-gray-900 hover:text-brandPrimary" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-gray-900 hover:text-brandPrimary" />
                    </a>
                    <a href="/apply" className="bg-darkGold text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-gold">
                        Apply job
                    </a>
                </div>
               
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-neutralDGrey focus:outline-none focus:text-gray-500"
                    >
                        {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                    </button>
                </div>
            </nav>
            
            <div className= "md:hidden ${...isMenuOpen ? 'block' : 'hidden'} space-y-4 px-4 py-7 bg-cream ">
                {navItems.map(({ link, path }) => (
                    <a
                        key={path}
                        href={path}
                        className="block text-base text-gray-900 hover:text-brandPrimary font-medium"
                        onClick={toggleMenu}
                    >
                        {link}
                    </a>
                ))}
                <div className="flex justify-center space-x-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-gray-900 hover:text-brandPrimary" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-gray-900 hover:text-brandPrimary" />
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="/apply" className="bg-darkGold text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-gold">
                        Apply job
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
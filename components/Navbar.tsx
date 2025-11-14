import React, { useState, useEffect } from 'react';

interface NavbarProps {
    activeSection: string;
    navLinks: string[];
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, navLinks }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavLink: React.FC<{ section: string }> = ({ section }) => (
        <a
            href={`#${section}`}
            className={`capitalize transition-colors duration-300 hover:text-[var(--accent-gold)] px-3 py-2 text-sm font-medium ${activeSection === section ? 'active-link' : 'text-[var(--text-secondary)]'}`}
            onClick={() => setIsMenuOpen(false)}
        >
            {section}
        </a>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--accent-gold)]/20' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-xl font-bold font-serif gold-gradient-text">
                        E.
                    </a>
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map(link => <NavLink key={link} section={link} />)}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                 {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col items-center pt-4 space-y-2">
                        {navLinks.map(link => <NavLink key={link} section={link} />)}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
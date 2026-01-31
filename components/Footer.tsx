import React from 'react';

const Footer: React.FC = () => {
    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
    return (
        <footer className="bg-[var(--bg-secondary)]/80 border-t-2 border-[var(--accent-gold)]/20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center text-center">
                    <a href="#home" className="text-2xl font-bold font-serif gold-gradient-text mb-4">
                       Founder, shaktiind
                    </a>
                    <div className="flex flex-wrap justify-center space-x-6 mb-6">
                        {navLinks.map(link => (
                             <a key={link} href={`#${link.toLowerCase()}`} className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300">
                                {link}
                            </a>
                        ))}
                    </div>
                     <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Panduru somu. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
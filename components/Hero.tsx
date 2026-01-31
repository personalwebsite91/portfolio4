import React from 'react';
import AnimatedSection from './AnimatedSection';

const Particles: React.FC = () => {
    const particleCount = 70;
    const particles = Array.from({ length: particleCount }).map((_, i) => {
        const style = {
            animationDelay: `${Math.random() * 7}s`,
            animationDuration: `${7 + Math.random() * 8}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 1.5}px`,
            height: `${1 + Math.random() * 1.5}px`,
        };
        return <div key={i} className="absolute rounded-full bg-gradient-to-t from-[var(--accent-gold)] to-[var(--accent-soft-gold)] opacity-0 animate-fade-in-out" style={style}></div>;
    });

    return (
        <div className="absolute inset-0 z-0">
            <style>
                {`
                    @keyframes fade-in-out {
                        0%, 100% { opacity: 0; transform: translateY(20px); }
                        50% { opacity: 0.3; transform: translateY(0); }
                    }
                `}
            </style>
            {particles}
        </div>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
            <Particles />
            <div className="relative z-10 p-6">
                <AnimatedSection>
                    <div className="relative inline-block mb-8">
                        <img
                            src= "https://res.cloudinary.com/dn4jcnne6/image/upload/v1769855554/ChatGPT_Image_Jan_31_2026_03_55_52_PM_bmxgyf.png"
                            alt="Royal Portrait"
                            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[var(--accent-gold)] p-1 royal-glow"
                        />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gold-gradient-text">
                        Panduru Somu
                    </h1>
                </AnimatedSection>
                <AnimatedSection>
                    <p className="text-lg md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
                        Crafting Digital Experiences with Safety and technology.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="px-8 py-3 bg-[var(--accent-gold)] text-[var(--bg-primary)] font-bold rounded-md hover:bg-[var(--accent-soft-gold)] transition-all duration-300 transform hover:scale-105 ease-in-out">
                            View Projects
                        </a>
                        
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Hero;
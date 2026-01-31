import React from 'react';
import AnimatedSection from './AnimatedSection';
import RoyalFrame from './RoyalFrame';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold gold-gradient-text">{value}</p>
    <p className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">{label}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gold-gradient-text">About Somu</h2>
        </AnimatedSection>
        <AnimatedSection>
          <RoyalFrame className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <img
                  src="https://res.cloudinary.com/dn4jcnne6/image/upload/v1769856275/ChatGPT_Image_Jan_31_2026_04_12_58_PM_fsekqu.png"
                  alt="Profile"
                  className="rounded-full w-48 h-48 object-cover border-4 border-[var(--accent-gold)]/50"
                />
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">A Passion for Creation</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  I am a dedicated founder and entrepreneur with a passion for building beautiful, functional, and user-centric digital experiences. My journey in technology is driven by a relentless curiosity and a commitment to excellence, ensuring every project I undertake is crafted with precision and artistry.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-[var(--accent-gold)]/20 flex justify-around items-center">
                <StatCard value="*****" label="Leadership" />
                <StatCard value="*****" label="Project Management" />
                <StatCard value="*****" label="Beleived In Tech" />
                <StatCard value="*****" label="Safe Tech For Safer World" />
            </div>
          </RoyalFrame>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
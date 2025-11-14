import React from 'react';
import { EXPERIENCE } from '../data';
import type { Experience } from '../types';
import AnimatedSection from './AnimatedSection';

const TimelineItem: React.FC<{ item: Experience; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {/* Vertical line */}
    {!isLast && (
      <div className="absolute top-0 left-2 sm:left-20 w-px h-full bg-[var(--accent-gold)]/30"></div>
    )}
    {/* Dot */}
    <div className="absolute top-8 left-[0.2rem] sm:left-[4.7rem] w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] transition-colors duration-300"></div>
    <div className="relative">
      <p className="text-sm font-semibold text-[var(--accent-gold)] mb-1">{item.year}</p>
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-md text-[var(--text-secondary)] mb-2">{item.company}</p>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-t from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gold-gradient-text">
            Career Journey
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            {EXPERIENCE.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === EXPERIENCE.length - 1}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
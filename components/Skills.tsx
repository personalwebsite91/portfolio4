import React from 'react';
import { SKILLS } from '../data';
import type { Skill } from '../types';
import AnimatedSection from './AnimatedSection';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <div className="bg-[var(--bg-secondary)]/50 p-6 rounded-lg border border-[var(--accent-gold)]/20 transition-all duration-500 ease-in-out hover:border-[var(--accent-gold)]/80 hover:bg-[var(--bg-secondary)] transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent-gold)]/10"
         style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex items-center mb-4">
        {skill.icon}
        <h3 className="text-xl font-bold text-white ml-4">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-[var(--accent-soft-gold)] to-[var(--accent-gold)] h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gold-gradient-text">
            Technical Proficiency
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index}/>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
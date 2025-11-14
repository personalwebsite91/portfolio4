
import type React from 'react';

export interface Skill {
  name: string;
  level: number; // Percentage from 0 to 100
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

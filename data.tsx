import React from 'react';
import type { Skill, Project, Experience } from './types';

// Generic Icon component for skills
const TechIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--accent-gold)]">
        <path d={path} />
    </svg>
);

// Icon paths from a popular icon library
const ICONS = {
    REACT: "M12 2.247l7.53 13.04L12 21.76l-7.53-6.473L12 2.247zm0 2.47L6.47 17.24l5.53-4.787 5.53 4.787L12 4.717zM4.47 8.76L12 15.23l7.53-6.47-1.98-3.43L12 8.76l-5.55-4.8L4.47 8.76z",
    NODE: "M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.5l-8 4.5-8-4.5V7.5l8 4.5 8-4.5v9z",
    TYPESCRIPT: "M14.5 1.5H5.5C3.57 1.5 2 3.07 2 5v14c0 1.93 1.57 3.5 3.5 3.5h13c1.93 0 3.5-1.57 3.5-3.5V8.5L14.5 1.5zM15 10h4v2h-4v-2zm0 4h4v2h-4v-2zM5 20V5c0-.55.45-1 1-1h7v5h5v11c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1z",
    PYTHON: "M12.89 3.11c-1.39-1.39-3.64-1.39-5.03 0L3.11 7.86c-1.39 1.39-1.39 3.64 0 5.03l4.75 4.75c1.39 1.39 3.64 1.39 5.03 0l4.75-4.75c1.39-1.39 1.39-3.64 0-5.03l-4.75-4.75zm-3.56 10.46c-.39.39-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41l3.54-3.54c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-3.54 3.54zm5.66-5.66c-.39.39-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41l3.54-3.54c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-3.54 3.54z",
    TAILWIND: "M12.01 4.56c-.25 0-.49.04-.72.11-.9.27-1.58.73-2.07 1.35-.91 1.15-.76 2.82.15 4.41.34.58.73 1.16 1.16 1.73l.44.59.45-.59c.43-.57.82-1.15 1.16-1.73.91-1.59 1.06-3.26.15-4.41-.49-.62-1.17-1.08-2.07-1.35a3.7 3.7 0 00-.72-.11zm-.05 1.83c.31.06.57.2.73.47.28.45.21 1.25-.19 2.19-.24.56-.53 1.11-.84 1.63h.01c-.31-.52-.6-1.07-.84-1.63-.4- .94-.47-1.74-.19-2.19.16-.27.42-.41.73-.47z",
    POSTGRES: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v8h-2V6zm0 10h2v2h-2v-2z",
};


export const SKILLS: Skill[] = [
    { name: 'React', level: 95, icon: <TechIcon path={ICONS.REACT} /> },
    { name: 'TypeScript', level: 90, icon: <TechIcon path={ICONS.TYPESCRIPT} /> },
    { name: 'Node.js', level: 85, icon: <TechIcon path={ICONS.NODE} /> },
    { name: 'Python', level: 80, icon: <TechIcon path={ICONS.PYTHON} /> },
    { name: 'Tailwind CSS', level: 98, icon: <TechIcon path={ICONS.TAILWIND} /> },
    { name: 'PostgreSQL', level: 75, icon: <TechIcon path={ICONS.POSTGRES} /> },
];

export const PROJECTS: Project[] = [
    {
        title: 'Project Monarch',
        description: 'A comprehensive web application for managing royal assets, featuring a bespoke dashboard and real-time data visualization. Built with a focus on security and elegance.',
        image: 'https://picsum.photos/seed/monarch/800/600',
        techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
        liveLink: '#',
        githubLink: '#',
    },
    {
        title: 'Regal Analytics',
        description: 'An analytics platform designed for high-end e-commerce brands. Utilizes machine learning to provide insights into customer behavior and sales trends.',
        image: 'https://picsum.photos/seed/regal/800/600',
        techStack: ['Python', 'Flask', 'React', 'Tailwind CSS'],
        githubLink: '#',
    },
    {
        title: 'Imperial Gallery',
        description: 'A digital art gallery showcasing historical artifacts with an immersive 3D viewing experience. Optimized for performance and visual fidelity.',
        image: 'https://picsum.photos/seed/imperial/800/600',
        techStack: ['Next.js', 'Three.js', 'Sanity CMS', 'Vercel'],
        liveLink: '#',
    },
     {
        title: 'Project Dynasty',
        description: 'A collaborative platform for genealogists to trace and visualize royal family trees. Features complex data structures and interactive timelines.',
        image: 'https://picsum.photos/seed/dynasty/800/600',
        techStack: ['React', 'GraphQL', 'Apollo', 'Neo4j'],
        liveLink: '#',
        githubLink: '#',
    },
];

export const EXPERIENCE: Experience[] = [
    {
        year: '2021 - Present',
        title: 'Senior Frontend Engineer',
        company: 'Royal Digital Solutions',
        description: 'Leading the development of premium, user-centric web applications for luxury brands. Mentoring junior developers and establishing best practices for code quality and performance.',
    },
    {
        year: '2019 - 2021',
        title: 'Mid-Level Software Engineer',
        company: 'Echelon Technologies',
        description: 'Developed and maintained full-stack applications, focusing on scalable backend services and responsive frontend interfaces for a diverse client portfolio.',
    },
    {
        year: '2017 - 2019',
        title: 'Junior Web Developer',
        company: 'Innovate Co.',
        description: 'Began my career building and styling websites, learning foundational web technologies, and contributing to various client projects in a dynamic team environment.',
    },
];
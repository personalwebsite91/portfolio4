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
    Python: "M12 2.247l7.53 13.04L12 21.76l-7.53-6.473L12 2.247zm0 2.47L6.47 17.24l5.53-4.787 5.53 4.787L12 4.717zM4.47 8.76L12 15.23l7.53-6.47-1.98-3.43L12 8.76l-5.55-4.8L4.47 8.76z",
    Java: "M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.5l-8 4.5-8-4.5V7.5l8 4.5 8-4.5v9z",
    Pytorch: "M14.5 1.5H5.5C3.57 1.5 2 3.07 2 5v14c0 1.93 1.57 3.5 3.5 3.5h13c1.93 0 3.5-1.57 3.5-3.5V8.5L14.5 1.5zM15 10h4v2h-4v-2zm0 4h4v2h-4v-2zM5 20V5c0-.55.45-1 1-1h7v5h5v11c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1z",
    // Machine Learning: "M12.89 3.11c-1.39-1.39-3.64-1.39-5.03 0L3.11 7.86c-1.39 1.39-1.39 3.64 0 5.03l4.75 4.75c1.39 1.39 3.64 1.39 5.03 0l4.75-4.75c1.39-1.39 1.39-3.64 0-5.03l-4.75-4.75zm-3.56 10.46c-.39.39-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41l3.54-3.54c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-3.54 3.54zm5.66-5.66c-.39.39-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41l3.54-3.54c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-3.54 3.54z",
    // Safe tech: "M12.01 4.56c-.25 0-.49.04-.72.11-.9.27-1.58.73-2.07 1.35-.91 1.15-.76 2.82.15 4.41.34.58.73 1.16 1.16 1.73l.44.59.45-.59c.43-.57.82-1.15 1.16-1.73.91-1.59 1.06-3.26.15-4.41-.49-.62-1.17-1.08-2.07-1.35a3.7 3.7 0 00-.72-.11zm-.05 1.83c.31.06.57.2.73.47.28.45.21 1.25-.19 2.19-.24.56-.53 1.11-.84 1.63h.01c-.31-.52-.6-1.07-.84-1.63-.4- .94-.47-1.74-.19-2.19.16-.27.42-.41.73-.47z"
    
};


export const SKILLS: Skill[] = [
    { name: 'Python', level: 95, icon: <TechIcon path={ICONS.Python} /> },
    { name: 'Java', level: 90, icon: <TechIcon path={ICONS.Java} /> },
    { name: 'Pytorch', level: 85, icon: <TechIcon path={ICONS.Pytorch} /> },
    { name: 'Machine Learning', level: 85, icon: <TechIcon path={ICONS.Pytorch} /> },
    { name: 'AI', level: 85, icon: <TechIcon path={ICONS.Pytorch} /> },
    { name: 'C', level: 85, icon: <TechIcon path={ICONS.Pytorch} /> },
    // { name: 'Python', level: 80, icon: <TechIcon path={ICONS.PYTHON} /> },
    // { name: 'Tailwind CSS', level: 98, icon: <TechIcon path={ICONS.TAILWIND} /> },
    // { name: 'PostgreSQL', level: 75, icon: <TechIcon path={ICONS.POSTGRES} /> },
];

export const PROJECTS: Project[] = [
    {
        title: 'Shaktiind',
        description: 'India’s most trusted digital public platform,where safety, dignity, and responsibility matter more than virality. My motherland bharat will see a better sense of living.',
        image: 'https://res.cloudinary.com/dn4jcnne6/image/upload/v1769858758/Screenshot_2026-01-31_165548_ima1y2.png',
        techStack: ['Women', 'Men', 'Creators', 'Kids', 'Safety'],
        liveLink: 'https://www.shaktiind.in',
        // githubLink: '#',
    },
    {
        title: 'Reactive Emojies',
        description: 'Talkative emojis are quick, expressive reactions that simulate conversational replies, allowing users to respond emotionally without typing while maintaining clarity and safety.',
        image: 'https://res.cloudinary.com/dn4jcnne6/image/upload/v1769860455/Screenshot_2026-01-31_172344_gkkfd9.png',
        techStack: ['Safe', 'Lovely', 'Chat', 'Expressive'],
        liveLink: 'https://features.shaktiind.in/',
    },
    // {
    //     title: 'Imperial Gallery',
    //     description: 'A digital art gallery showcasing historical artifacts with an immersive 3D viewing experience. Optimized for performance and visual fidelity.',
    //     image: 'https://picsum.photos/seed/imperial/800/600',
    //     techStack: ['Next.js', 'Three.js', 'Sanity CMS', 'Vercel'],
    //     liveLink: '#',
    // },
    //  {
    //     title: 'Project Dynasty',
    //     description: 'A collaborative platform for genealogists to trace and visualize royal family trees. Features complex data structures and interactive timelines.',
    //     image: 'https://picsum.photos/seed/dynasty/800/600',
    //     techStack: ['React', 'GraphQL', 'Apollo', 'Neo4j'],
    //     liveLink: '#',
    //     githubLink: '#',
    // },
];

export const EXPERIENCE: Experience[] = [
    {
        year: '2023 - Present',
        title: 'Artificial Intelligence & Machine Learning Student',
        company: 'Shaktiind',
        description: 'Leading the development of premium, user-centric platforms which imprioves your way of living',
    
    },
    {
        year: '2019 - 2021',
        title: 'New Age Learning Entrepreneur',
        company: 'Built Products using cad',
        description: 'Your smartness should appear in building new products rather improving existing ones.',
    },
    {
        year: '2017 - 2019',
        title: 'A Writer and other things in leadership',
        company: 'In school and life',
        description: 'Began my career building and creating my own happiness',
    },
];
import {
  RemixiconComponentType,
  RiHtml5Fill,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
} from '@remixicon/react';
import { SiNestjs } from '@icons-pack/react-simple-icons';

export type ProjectTag =
  | 'react'
  | 'next'
  | 'typescript'
  | 'nestjs'
  | 'prisma'
  | 'tailwindcss'
  | 'mui'
  | 'shadcn/ui'
  | 'html'
  | 'mongodb'
  | 'zustand'
  | 'axios'
  | 'nodejs'
  | 'redux'
  | 'jwt-auth';

export type codeUrl = {
  frontend: string;
  backend?: string;
};

export type Project = {
  id: string;
  name: string;
  displayName: string;
  description: string;
  tags: ProjectTag[];
  liveUrl: string;
  codeUrl: codeUrl;
  image: string;
  icon: RemixiconComponentType;
};

export const projects: Project[] = [
  {
    id: 'note-hub',
    name: 'note-hub',
    displayName: '_note-hub',
    description:
      'Notes management app with tag filtering, search, and cookie-based auth with silent JWT refresh.',
    tags: ['next', 'typescript', 'shadcn/ui', 'tailwindcss', 'axios'],
    liveUrl: 'https://e-pharmacy.vercel.app',
    codeUrl: {
      frontend: 'https://note-hub-app-jet.vercel.app/',
    },
    image: '/notehub.webp',
    icon: RiNextjsFill,
  },
  {
    id: 'read-journey',
    name: 'read-journey',
    displayName: '_read-journey',
    description:
      'A modern web application for managing your personal reading library, tracking reading progress, and discovering new books.',
    tags: ['next', 'typescript', 'zustand', 'axios', 'tailwindcss'],
    liveUrl: 'https://read-journey-h46z.vercel.app',
    codeUrl: {
      frontend: 'https://github.com/denis-mahei/read-journey',
    },
    image: '/readjourney.webp',
    icon: RiNextjsFill,
  },
  {
    id: 'contacts-manager',
    name: 'contacts-manager',
    displayName: '_contacts-manager',
    description:
      'A full-stack contact management application with authentication, built with React (frontend) and a Node.js/Express backend API.',
    tags: ['react', 'redux', 'mui', 'axios', 'jwt-auth', 'nodejs'],
    liveUrl: 'https://contact-book-manager-dm.vercel.app',
    codeUrl: {
      frontend: 'https://github.com/denis-mahei/contact-manager-app',
      backend: 'https://github.com/denis-mahei/nodejs-contacts-api',
    },
    image: '/contacts.webp',
    icon: RiReactjsLine,
  },
  {
    id: 'e-pharmacy',
    name: 'e-pharmacy',
    displayName: '_e-pharmacy',
    description:
      'Full-stack pharmacy admin panel with product, supplier, order and customer management.',
    tags: ['next', 'nestjs', 'mui', 'prisma'],
    liveUrl: 'https://admin-dashboard-frontend-blush.vercel.app',
    codeUrl: {
      frontend:
        'https://github.com/denis-mahei/admin-dashboard-frontend',
      backend: 'https://github.com/denis-mahei/admin-dashboard-api',
    },
    image: '/e-pharmacy.webp',
    icon: RiNextjsFill,
  },
];

export const availableTags: {
  id: ProjectTag;
  label: string;
  icon: RemixiconComponentType;
}[] = [
  { id: 'next', icon: RiNextjsFill, label: 'Next.js' },
  { id: 'react', icon: RiReactjsLine, label: 'React' },
  { id: 'html', icon: RiHtml5Fill, label: 'HTML' },
  { id: 'nodejs', icon: RiNodejsLine, label: 'NodeJS' },
  { id: 'nestjs', icon: SiNestjs, label: 'NestJS' },
];

import {
  RemixiconComponentType,
  RiNextjsFill,
  RiReactjsLine,
  RiHtml5Fill,
  RiNodejsLine,
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
  | 'nodejs';

export type Project = {
  id: string;
  name: string;
  displayName: string;
  description: string;
  tags: ProjectTag[];
  liveUrl: string;
  codeUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 'note-hub',
    name: 'note-hub',
    displayName: '_note-hub',
    description: 'Fullstack development project',
    tags: ['next', 'typescript', 'shadcn/ui', 'tailwindcss', 'axios'],
    liveUrl: 'https://e-pharmacy.vercel.app',
    codeUrl: 'https://github.com/denys-mahei/e-pharmacy',
    image: '/notehub.webp',
  },
  {
    id: 'read-journey',
    name: 'read-journey',
    displayName: '_read-journey',
    description: 'Fullstack development engineering',
    tags: ['next', 'typescript', 'zustand', 'axios', 'tailwindcss'],
    liveUrl: 'https://e-pharmacy.vercel.app',
    codeUrl: 'https://github.com/denys-mahei/e-pharmacy',
    image: '/readjourney.webp',
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

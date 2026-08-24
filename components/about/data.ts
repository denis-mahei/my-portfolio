type FileChild = { id: string; label: string; content: string };

type Section = {
  id: string;
  label: string;
  children: FileChild[];
};

export const aboutData: Section[] = [
  {
    id: 'personal-info',
    label: 'personal-info',
    children: [
      {
        id: 'bio',
        label: 'bio',
        content:
          'Full-Stack Developer passionate about building reliable and scalable web applications. Motivated to continuously learn and grow, with a strong interest in solving complex problems, exploring software architecture and design patterns, and improving code quality. Always looking for opportunities to learn new technologies and take on challenging tasks.',
      },
      {
        id: 'interests',
        label: 'interests',
        content:
          'Life is music, and I can’t imagine it without it. 🎸 In my free time, I play guitar, explore new music, and, naturally, try to figure out how something could sound even better — I guess the engineer in me never really switches off. 😅\n' +
          '\n' +
          'When I’m not coding or making music, you’ll probably find me playing video games or working out. A bit of creativity, a bit of competition, and a bit of discipline — that’s my balance.',
      },
    ],
  },
] as const;

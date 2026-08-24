import {
  RemixiconComponentType,
  RiMailFill,
  RiTelegramFill,
} from '@remixicon/react';

type Contact = {
  id: string;
  label: string;
  href: string;
  icon: RemixiconComponentType;
};

export const contactsData: Contact[] = [
  {
    id: 'email',
    label: 'denmahei@gmail.com',
    href: 'mailto:denmahei@gmail.com',
    icon: RiMailFill,
  },
  {
    id: 'telegram',
    label: '@denismahei',
    href: 'https://t.me/denismahei',
    icon: RiTelegramFill,
  },
];

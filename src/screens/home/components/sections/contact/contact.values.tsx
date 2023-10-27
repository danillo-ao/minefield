import React from 'react';

import { links } from '@configs/links.configs';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMap,
} from '@tabler/icons-react';

import { uuid } from '@/utils/encode';

import { IconedCardProps } from '@components/iconed-card';

export const contactsValues: IconedCardProps[] = [
  {
    key: uuid('whatsapp'),
    name: 'Whatsapp',
    description: '(11) 94273-0894',
    icon: <IconBrandWhatsapp />,
    link: links.whatsapp,
  },
  {
    key: uuid('email'),
    name: 'Email',
    description: 'danillo.alves.o@gmail.com',
    icon: <IconMail />,
    link: links.email,
  },
  {
    key: uuid('linkedin'),
    name: 'Linkedin',
    description: '@danilloliveira',
    icon: <IconBrandLinkedin />,
    link: links.linkedin,
  },
  {
    key: uuid('github'),
    name: 'Github',
    description: '@danillo-ao',
    icon: <IconBrandGithub />,
    link: links.github,
  },
  {
    key: uuid('localizacao'),
    name: 'Localização',
    description: 'Santo André - São Paulo',
    icon: <IconMap />,
    link: links.address,
  },
];

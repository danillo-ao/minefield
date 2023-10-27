import React from 'react';

import { links } from '@configs/links.configs';
import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandNextjs,
  IconBrandNpm,
  IconDeviceGamepad2,
} from '@tabler/icons-react';

import { uuid } from '@/utils/encode';

import { ProjectCardProps } from '@screens/home/components/sections/projects/components/project-card';

const projectIconSize = 30;

export const projectsValues: ProjectCardProps[] = [
  {
    key: uuid('smarte'),
    title: 'SmartE',
    description:
      'Aplicativo desenvolvido para auxiliar no gerenciamento dos seus gastos. Com ele, você pode registrar suas despesas mensais, cadastrar gastos recorrentes, categorizar suas despesas e muito mais!',
    icons: (
      <>
        <IconBrandApple size={projectIconSize} />
        <IconBrandAndroid size={projectIconSize} />
      </>
    ),
    tags: ['Pessoal'],
    link: links.smarte,
  },
  {
    key: uuid('chords'),
    title: 'Chords - Violão',
    description:
      'Aplicativo desenvolvido para auxiliar aqueles que desejam praticar violão. Oferecendo configurações adaptadas ao nível técnico de cada pessoa, para uma experiência de aprendizado mais agradável.',
    icons: <IconBrandAndroid size={projectIconSize} />,
    tags: ['Pessoal'],
    link: links.chords,
  },
  {
    key: uuid('infinite-run'),
    title: 'Infinite Run',
    description:
      'Um projeto pessoal: um jogo criado em JavaScript (vanilla) para estudar o comportamento da linguagem, entender seus ciclos, formas de manipulação, entre outros aspectos.',
    icons: <IconDeviceGamepad2 size={projectIconSize} />,
    tags: ['Pessoal'],
    link: links.infiniteRun,
  },

  {
    key: uuid('smash'),
    title: 'Smash',
    description:
      'Um Design System desenvolvido em React para ser utilizado em diversas aplicações React, com grande capacidade de personalização.',
    icons: <IconBrandNpm size={projectIconSize} />,
    tags: ['Profissional'],
    link: links.smash,
  },
  {
    key: uuid('smash-player'),
    title: 'Smash Player',
    description:
      'Player de vídeo desenvolvido em React, com várias funcionalidades e recursos de acessibilidade, incluindo uma camada de Libras sobrepondo o vídeo.',
    icons: <IconBrandNpm size={projectIconSize} />,
    tags: ['Profissional'],
    link: links.smashPlayer,
  },
  {
    key: uuid('gama-lms'),
    title: 'Gama Academy (LMS)',
    description:
      'Desenvolvimento ativo na plataforma de LMS (Learning Management System)',
    icons: <IconBrandNextjs size={projectIconSize} />,
    tags: ['Profissional'],
    link: links.gamaLMS,
  },
  {
    key: uuid('gama-ats'),
    title: 'Gama Academy (ATS)',
    description:
      'Desenvolvimento ativo na plataforma de ATS (Applicant Tracking System)',
    icons: <IconBrandNextjs size={projectIconSize} />,
    tags: ['Profissional'],
    link: links.gamaATS,
  },
  {
    key: uuid('gama-institutional'),
    title: 'Gama Academy (Institucional)',
    description:
      'Site institucional da Gama Academy, criado para apresentar os serviços e a nova marca após o rebranding da empresa.',
    icons: <IconBrandNextjs size={projectIconSize} />,
    tags: ['Profissional'],
    link: links.gamaInstitutional,
  },
  {
    key: uuid('gama-app'),
    title: 'Gama Academy (App)',
    description:
      'Aplicativo desenvolvido no qual os alunos podem acessar playlists, desafios e jornadas essenciais para o seu aprendizado.',
    icons: (
      <>
        <IconBrandApple size={projectIconSize} />
        <IconBrandAndroid size={projectIconSize} />
      </>
    ),
    tags: ['Profissional'],
    link: links.gamaApp,
  },
];

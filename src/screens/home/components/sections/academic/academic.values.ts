import { links } from '@configs/links.configs';

import { TimelineEvent } from '@components/timeline';

export const AcademicValues: TimelineEvent[] = [
  {
    date: '2021',
    title: 'Desenvolvimento de Jogos',
    subtitle: 'FIAP - São Paulo',
    description: [
      'Graduação em Desenvolvimento de Jogos Digitais, Game Design e Desenvolvimento VR/AR com duração de dois anos - Concluída em 2021. Preparação para desenvolver projetos de sistemas de entretenimento digital interativo, tanto em rede quanto isoladamente, incluindo roteiros e modelagem de personagens virtuais, com interação em bancos de dados. Experiência abrange diversas áreas, como entretenimento, comercial, publicidade e educação.',
    ],
    link: links.fiap,
  },
  {
    date: '2015',
    title: 'Informática para internet',
    subtitle: 'ETEC - Itaquaquecetuba',
    description: [
      'Curso técnico em Informática para Internet pelo Centro Paula Souza - ETEC de Itaquaquecetuba, com duração de 3 semestres. Focado em programação web, o curso abrange também disciplinas como marketing, empreendedorismo e desenvolvimento de design de websites.',
    ],
    link: links.etec,
  },
];

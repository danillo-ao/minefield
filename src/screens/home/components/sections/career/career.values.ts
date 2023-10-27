import { links } from '@configs/links.configs';

import { TimelineEvent } from '@components/timeline';

export const CareerValues: TimelineEvent[] = [
  {
    date: '2023',
    title: 'Porter Group',
    subtitle: 'Sênior Front-End',
    descriptionTitle: 'Mar/2023 ~ Atualmente',
    description: [
      'Responsável pela manutenção, desenvolvimento e aprimoramento do aplicativo utilizado pelos moradores de um condomínio. Este aplicativo permite aos moradores visualizar as câmeras do condomínio, abrir portas, receber visitantes e ser notificado sobre a chegada de encomendas, entre outras funcionalidades.',
    ],
    tags: ['React Native', 'GraphQL'],
    link: links.porter,
  },
  {
    date: '2023',
    title: 'Mercado Livre',
    subtitle: 'Software Engineer',
    descriptionTitle: 'Nov/2022 ~ Fev/2023',
    description: [
      'Responsável pela manutenção e desenvolvimento de funcionalidades para o painel de controle interno do sistema de benefícios corporativos do Mercado Pago.',
    ],
    tags: ['React JS', 'NextJS'],
    link: links.ml,
  },
  {
    date: '2022',
    title: 'Gama Academy',
    subtitle: 'Sênior Front-End',
    descriptionTitle: 'Mar/2021 ~ Set/2022',
    description: [
      '• Responsável pelo desenvolvimento da arquitetura de um Design System/Biblioteca de componentes. Participação ativa no desenvolvimento e em tomadas de decisões relacionadas à regra de negócio e arquitetura dos sistemas LMS e ATS.',
      '• Responsável por impulsionar melhorias e estimular discussões técnicas para aprimorar os projetos; fornecer orientação e acompanhamento técnico para o desenvolvimento profissional dos colegas; conduzir entrevistas técnicas com possíveis candidatos para contratação.',
    ],
    tags: ['React Native', 'React JS', 'Next JS'],
    link: links.gama,
  },
  {
    date: '2021',
    title: 'Sorte Online',
    subtitle: 'Front-End Developer',
    descriptionTitle: 'Out/2020 ~ Mar/2021',
    description: [
      'Manutenção de uma aplicação de serviços lotéricos desenvolvida em ASP.NET; correções de SEO e criação de um blog utilizando Wordpress.',
    ],
    tags: ['ASP.NET', 'WordPress'],
    link: links.sorteOnline,
  },
  {
    date: '2020',
    title: 'Avec',
    subtitle: 'Front-End Developer',
    descriptionTitle: 'Nov/2018 ~ Out/2020',
    description: [
      'Responsável pelo desenvolvimento, manutenção, publicação e gerenciamento do aplicativo "Avec App", destinado a agendamentos em salões de beleza e barbearias, com um e-commerce integrado para compra de produtos de beleza. O aplicativo foi integrado com a plataforma VTEX para realizar a compra de produtos.',
    ],
    tags: ['React Native', 'React JS', 'Next JS'],
    link: links.avec,
  },

  {
    date: '2018',
    title: 'Houpa!',
    subtitle: 'Full-Stack Developer',
    descriptionTitle: 'Out/2016 ~ Out/2018',
    description: [
      '• Responsável por coordenar a equipe de Front-End e liderar o início do desenvolvimento do aplicativo "Houpa!", um e-commerce voltado para atacadistas no ramo da moda. Inicialmente, o aplicativo foi desenvolvido como Progressive Web App (PWA) e posteriormente substituído por uma versão em React Native.',
      '• Responsável pelo desenvolvimento full-stack de um sistema ERP (Enterprise Resource Planning) para o controle interno de uma confecção de roupas femininas para empresa Unique Chic.',
    ],

    tags: ['React Native', 'React JS', 'PWA'],
    link: links.houpa,
  },

  {
    date: '2016',
    title: 'Abyx',
    subtitle: 'Jr. Full-Stack Developer',
    descriptionTitle: 'Mai/2016 ~ Set/2016',
    description: [
      'Desenvolvedor web full-stack terceirizado, encarregado de iniciar e estruturar um sistema ERP (Enterprise Resource Planning) para uma confecção de roupas femininas na Unique Chic.',
    ],
    tags: ['PHP', 'MySQL', 'CodeIgniter3'],
    link: links.abyx,
  },
];

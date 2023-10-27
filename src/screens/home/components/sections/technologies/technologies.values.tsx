import React from 'react';

import { links } from '@configs/links.configs';
import {
  IconBrandAdobe,
  IconBrandCSharp,
  IconBrandGraphql,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandRedux,
  IconBrandUnity,
  IconFileTypeCss,
  IconMovie,
} from '@tabler/icons-react';

import { uuid } from '@/utils/encode';

import { IconedCardProps } from '@components/iconed-card';

const techIconSize = 30;

export const extraTechnologies: IconedCardProps[] = [
  {
    key: uuid('javascript'),
    name: 'Javascript',
    description:
      'Utilização do javascript Vanilla para manipulação e desenvolvimento.',
    icon: <IconBrandJavascript size={techIconSize} />,
    link: links.javascript,
  },
  {
    key: uuid('redux'),
    name: 'Redux',
    description:
      'Gerenciamento de estado previsível para aplicativos React eficientes e escaláveis.',
    icon: <IconBrandRedux size={techIconSize} />,
    link: links.redux,
  },
  {
    key: uuid('nodejs'),
    name: 'NodeJS',
    description:
      'Plataforma server-side para executar JavaScript de forma eficiente e escalável.',
    icon: <IconBrandNodejs size={techIconSize} />,
    link: links.node,
  },
  {
    key: uuid('styled-components'),
    name: 'Styled Components',
    description:
      'Estilização em React com CSS-in-JS para componentes flexíveis e reutilizáveis.',
    icon: <IconFileTypeCss size={techIconSize} />,
    link: links.styledComponents,
  },
  {
    key: uuid('stitches'),
    name: 'Stitches',
    description:
      'CSS-in-JS eficiente, SSR, suporte multivariante e ótima experiência desenvolvedor.',
    icon: <IconFileTypeCss size={techIconSize} />,
    link: links.stitches,
  },
  {
    key: uuid('graphql'),
    name: 'GraphQL',
    description:
      'Consulta flexível para APIs, substituindo múltiplas chamadas por uma única.',
    icon: <IconBrandGraphql size={techIconSize} />,
    link: links.graphql,
  },
  {
    key: uuid('mysql'),
    name: 'MySQL',
    description:
      'Sistema de gerenciamento de banco de dados relacional popular.',
    icon: <IconBrandMysql size={techIconSize} />,
    link: links.mysql,
  },
  {
    key: uuid('php'),
    name: 'PHP',
    description:
      'Linguagem de programação para desenvolvimento web no lado do servidor.',
    icon: <IconBrandPhp size={techIconSize} />,
    link: links.php,
  },
];

export const complementaryTechnologies: IconedCardProps[] = [
  {
    key: uuid('csharp'),
    name: 'C#',
    description: 'C# utilizado para desenvolvimento de jogos na Unity.',
    icon: <IconBrandCSharp size={techIconSize} />,
    link: links.csharp,
  },
  {
    key: uuid('unity'),
    name: 'Unity',
    description: 'Motor de jogo proprietário criado pela Unity Technologies.',
    icon: <IconBrandUnity size={techIconSize} />,
    link: links.unity,
  },
  {
    key: uuid('photoshop'),
    name: 'Photoshop',
    description:
      'Software de edição de imagens e design gráfico profissional amplamente usado.',
    icon: <IconBrandAdobe size={techIconSize} />,
    link: links.photoshop,
  },
  {
    key: uuid('illustrator'),
    name: 'Illustrator',
    description:
      'Software de design vetorial para ilustrações e gráficos escaláveis profissionais.',
    icon: <IconBrandAdobe size={techIconSize} />,
    link: links.illustrator,
  },
  {
    key: uuid('davince'),
    name: 'Davince Resolve',
    description:
      'Software de edição de vídeo profissional com recursos avançados integrados.',
    icon: <IconMovie size={techIconSize} />,
    link: links.davince,
  },
];

import { ReactElement } from 'react';

import { MotionProps } from '@components/motion';

export interface ProjectCardProps {
  key?: any;
  icons?: ReactElement;
  title: string;
  description: string;
  tags?: string[];
  link?: string;

  motion?: MotionProps;
}

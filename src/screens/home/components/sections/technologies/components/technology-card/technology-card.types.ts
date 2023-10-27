import { ReactElement } from 'react';

import { MotionProps } from '@components/motion';

export interface TechnologyCardProps {
  icon?: ReactElement;
  name?: string;
  description?: string;
  invert?: boolean;
  link?: string;

  motion?: MotionProps;
}

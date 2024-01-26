import React from 'react';
import { cn as bem } from '@bem-react/classname';
import './styles.scss';

interface IArr {
  classnames?: string;
}

export const SvgArrow = ({ classnames }: IArr) => {
  const cn = bem('ButtonSvgArrow');

  return (
    <svg
      className={[cn(), classnames && cn(classnames)].join(' ')}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
    </svg>
  );
};

import React, { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './styles.scss';

interface ContainerProps {
  block: string;
  children?: React.ReactNode;
}

function Container({ block, children }: ContainerProps) {
  const cn = bem('Container');

  return (
    <>
      {block ? (
        <div className={cn(block)}>{children}</div>
      ) : (
        <div className={cn()}>{children}</div>
      )}
    </>
  );
}

export default memo(Container);

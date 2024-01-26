import { ReactNode, memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './styles.scss';

export interface DefaultLayoutProps {
  children?: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const cn = bem('DefaultLayout');

  return <div className={cn()}>{children}</div>;
}
export default memo(DefaultLayout);

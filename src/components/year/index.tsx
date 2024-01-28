import { cn as bem } from '@bem-react/classname';
import { memo, useEffect, useState } from 'react';
import './styles.scss';

interface YearProps {
  year: number;
  variant: 'start' | 'end';
}

function Year({ year, variant }: YearProps) {
  const [value, setValue] = useState(() => year);
  const cn = bem('Year');
  useEffect(() => {
    value !== year &&
      setTimeout(() => setValue((prev) => prev + (prev < year ? 1 : -1)), 25);
  }, [value, year]);

  return (
    <div className={cn()}>
      <span className={variant === 'start' ? cn('start') : cn('end')}>
        {value}
      </span>
    </div>
  );
}

export default memo(Year);

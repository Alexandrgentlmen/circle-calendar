import { cn as bem } from '@bem-react/classname';
import './styles.scss';

interface DotProps {
  angle: number;
  num: number;
  onClick: () => void;
  isActive: boolean;
}

function Dot({ angle, num, onClick, isActive }: DotProps) {
  const cn = bem('Dot');
  return (
    <div className={cn()} style={{ transform: `rotateZ(${angle}deg)` }}>
      <div className={cn('wrapper')}>
        <button
          className={isActive ? cn('button-active') : cn('button')}
          style={{ transform: `rotateZ(${-angle}deg)` }}
          onClick={onClick}
        >
          {num}
        </button>
        <div className={cn('element')} />
      </div>
    </div>
  );
}
export default Dot;

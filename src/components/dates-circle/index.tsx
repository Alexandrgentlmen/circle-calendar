import { cn as bem } from '@bem-react/classname';
import './styles.scss';
import Dot from './Dot';

interface DatescircleProps {
  title: string;
  setId: (value: number) => void;
  currentId: number;
  maxElements: number;
}

const TOTAL_ROTATION_ANGLE = 120;

function Datescircle({
  title,
  setId,
  currentId,
  maxElements,
}: DatescircleProps) {
  const cn = bem('Datescircle');

  const ARR = Array(maxElements)
    .fill(null)
    .map((_, i) => i);
  const offset = 360 / ARR.length;
  const handleClick = (currentId: number) => {
    setId(currentId);
  };
  return (
    <div className={cn()}>
      <div className={cn('title')}>{title}</div>
      <div className={cn('circle')} />
      {ARR.map((elId) => (
        <Dot
          key={elId}
          angle={TOTAL_ROTATION_ANGLE + offset * elId - offset * currentId}
          num={elId + 1}
          onClick={() => handleClick(elId)}
          isActive={currentId === elId}
        />
      ))}
    </div>
  );
}

export default Datescircle;

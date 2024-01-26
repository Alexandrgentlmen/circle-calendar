import { cn as bem } from '@bem-react/classname';
import './styles.scss';
import LeftSvgArrow from '~/ui/left-svg-arrow/leftSvgArrow';
import RightSvgArrow from '~/ui/right-svg-arrow/rightSvgArrow';
import { IDate } from '~/store/date.types';

interface IControllersProps {
  dates: IDate[];
  currentPeriod: number;
  toBack: () => void;
  toForward: () => void;
}
function SliderControllers({
  dates,
  currentPeriod,
  toBack,
  toForward,
}: IControllersProps) {
  const cn = bem('SliderControllers');
  return (
    <div className={cn()}>
      <div className={cn('count')}>
        0{currentPeriod + 1}/0{dates.length}
      </div>

      <LeftSvgArrow active={currentPeriod !== 0} toBack={toBack} />
      <RightSvgArrow active={currentPeriod !== 5} toForward={toForward} />
    </div>
  );
}

export default SliderControllers;

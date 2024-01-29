import { cn as bem } from '@bem-react/classname';
import './styles.scss';
import { useSwiper } from 'swiper/react';

interface IArrow {
  active: boolean;
  toForward: () => void;
}

const RightSvgArrow = ({ active, toForward }: IArrow) => {
  const cn = bem('RightSvgArrow');
  const swiper = useSwiper();
  const handleClick = () => {
    toForward();
    swiper.slideTo(0);
  };
  return (
    <button className={cn()} onClick={toForward}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="50"
        // height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g opacity={active ? '1' : '0.5'}>
          <circle
            cx="25"
            cy="25"
            r="24.5"
            stroke="#42567A"
            strokeOpacity={active ? '1' : '0.5'}
          />
          <path
            d="M22.5001 18.75L28.7501 25L22.5001 31.25"
            stroke="#42567A"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
};

export default RightSvgArrow;

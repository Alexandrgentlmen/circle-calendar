import { cn as bem } from '@bem-react/classname';
import './styles.scss';
import { useSwiper } from 'swiper/react';

interface IArrow {
  active: boolean;
  toBack: () => void;
}

const LeftSvgArrow = ({ active, toBack }: IArrow) => {
  const cn = bem('LeftSvgArrow');
  const swiper = useSwiper();
  const handleClick = () => {
    toBack();
    swiper.slideTo(0);
  };

  return (
    <button className={cn()} onClick={handleClick}>
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
            transform="matrix(-1 0 0 1 50 0)"
            stroke="#42567A"
            strokeOpacity={active ? '1' : '0.5'}
          />
          <path
            d="M27.4999 18.75L21.2499 25L27.4999 31.25"
            stroke="#42567A"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
};

export default LeftSvgArrow;

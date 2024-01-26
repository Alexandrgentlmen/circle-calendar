import { cn as bem } from '@bem-react/classname';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderControllers from '../slider-controllers';
import { useAppSelector } from '~/store/hooks';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';
import { getUUID } from '~/utils/getUUID';
import { SvgArrow } from '~/ui/svg-arrow';

interface ISliderProps {
  periodTimes: number;
  setId: (period: number, operator: string) => void;
}
function Slider({ periodTimes, setId }: ISliderProps) {
  const dates = useAppSelector((state) => state.dates.date);
  const cn = bem('Slider');
  return (
    <div className={cn()}>
      <SliderControllers
        dates={dates}
        currentPeriod={periodTimes}
        toBack={() => setId(periodTimes, 'left')}
        toForward={() => setId(periodTimes, 'right')}
      />
      <button className={cn('left')}>
        <SvgArrow classnames="prev" />
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        draggable={true}
        navigation={{
          nextEl: '.Slider-right',
          prevEl: '.Slider-left',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {dates[periodTimes].info.map((item) => (
          <SwiperSlide key={getUUID()}>
            <div className={cn('card')}>
              <p className={cn('card-year')}>{item.year}</p>
              <p className={cn('card-text')}>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={cn('right')}>
        <SvgArrow />
      </button>
    </div>
  );
}
export default Slider;

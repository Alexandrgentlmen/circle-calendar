import { cn as bem } from '@bem-react/classname';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
    <>
      <div className={cn()}>
        <button className={cn('left')}>
          <SvgArrow classnames="prev" />
        </button>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          draggable={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.Slider-right',
            prevEl: '.Slider-left',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            489: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              pagination: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              pagination: false,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 10,
              pagination: false,
            },
          }}
          modules={[Pagination, Navigation]}
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
          <SliderControllers
            dates={dates}
            currentPeriod={periodTimes}
            toBack={() => setId(periodTimes, 'left')}
            toForward={() => setId(periodTimes, 'right')}
          />
        </Swiper>
        <button className={cn('right')}>
          <SvgArrow />
        </button>
      </div>
    </>
  );
}
export default Slider;

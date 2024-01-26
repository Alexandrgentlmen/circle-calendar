import { memo, useState } from 'react';
import { cn as bem } from '@bem-react/classname';
import './styles.scss';
import DefaultLayout from '~/components/default-layout';
import Container from '~/components/container';
import Year from '~/components/year';
import Datescircle from '~/components/dates-circle';
import { useAppSelector } from '~/store/hooks';
import Slider from '~/components/slider/index';

function Main() {
  const cn = bem('Main');
  const [DateId, setDateId] = useState<number>(0);
  const handleChangeDate = (currentId: number, operator: string) => {
    if (operator === 'left' && currentId >= 1) {
      setDateId(() => currentId - 1);
    }
    if (operator === 'right' && currentId < 5) {
      setDateId(() => currentId + 1);
    }
  };
  const dates = useAppSelector((state) => state.dates.date);

  return (
    <DefaultLayout>
      <div className={cn('vertical')}></div>
      <div className={cn('gorizontal')}></div>
      <div className={cn()}>
        <div className={cn('mainline')}></div>
        <h1 className={cn('title')}>Исторические даты</h1>
        <Container block="year">
          <Year year={dates[DateId].startYear} variant={'start'} />
          <Year year={dates[DateId].endYear} variant={'end'} />
        </Container>
        <Datescircle
          maxElements={dates.length}
          title={dates[DateId].title}
          currentId={DateId}
          setId={setDateId}
        />
      </div>
      <Slider periodTimes={DateId} setId={handleChangeDate} />
    </DefaultLayout>
  );
}
export default memo(Main);

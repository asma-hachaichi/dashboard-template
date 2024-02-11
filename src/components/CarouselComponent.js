import Carousel from 'react-bootstrap/Carousel';
import { LineChart } from './LineChart';
import { RadarChart } from './RadarChart';
import { ColumnRotatedChart } from './ColumnRotatedChart';

export const CarouselComponent = () => {
  return (
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <LineChart />
      </Carousel.Item>
      <Carousel.Item>
        <ColumnRotatedChart />
      </Carousel.Item>
      <Carousel.Item>
        <RadarChart />
      </Carousel.Item>
    </Carousel>
  );
}

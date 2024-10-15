import { ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import style from '@/components/home/work_slider.module.scss';
import { Navigation, A11y } from 'swiper/modules';
import { SwiperNavButtons } from '@/components/common/SwiperNavButtons';

interface Work {
  title: string;
  date: string;
  slug: string;
  thumbnail: { url: string };
}

interface WorkSliderProps {
  className?: string;
  works: Work[];
  sectionTitle: ReactNode;
  leftArrowButton: ReactNode;
  rightArrowButton: ReactNode;
  children: (work: Work) => ReactNode;
}

export function WorkSlider({
  className,
  works,
  children,
  sectionTitle,
  leftArrowButton,
  rightArrowButton,
}: WorkSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null); // Store the swiper instance

  return (
    <div className={style.wrapper}>
      <div className={style.topArea}>
        {sectionTitle}
        <div className={style.swiperNavButtonContainer}>
          <SwiperNavButtons
            leftArrowButton={leftArrowButton}
            rightArrowButton={rightArrowButton}
            swiper={swiperInstance} // Pass swiper instance to the navigation buttons
          />
        </div>
      </div>
      <Swiper
        breakpoints={{
          319: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1211: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        modules={[Navigation, A11y]}
        className={`${style.swiper} mySwiper ${className}`}
        onSwiper={setSwiperInstance} // Capture swiper instance
      >
        {works.map((work, index) => (
          <SwiperSlide className={style.swiperSlide} key={`${work.title}-${index}`}>
            {children(work)}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

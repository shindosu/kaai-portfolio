// SwiperNavButtons.tsx
import { ReactNode } from 'react';
import style from '@/components/common/swiper_nav_buttons.module.scss';

interface SwiperNavButtonsProps {
    leftArrowButton: ReactNode;
    rightArrowButton: ReactNode;
    swiper: any; // Use the Swiper type if available, or set it to any
}

export function SwiperNavButtons({ leftArrowButton, rightArrowButton, swiper }: SwiperNavButtonsProps) {
    return (
        <div className={style.swiperNavButtons}>
            <div className="left-arrow-button" onClick={() => swiper?.slidePrev()}>
                {leftArrowButton}
            </div>
            <div className="right-arrow-button" onClick={() => swiper?.slideNext()}>
                {rightArrowButton}
            </div>
        </div>
    );
}

import { ReactNode } from 'react';
import style from '@/components/home/infinite_carousel_background.module.scss';

export interface InfiniteCarouselBackgroundProps {
    className?: string;
    leftSideImages: Array<{ url: string }>, // Updated to match the new structure
    centerImages: Array<{ url: string }>,   // Updated to match the new structure
    rightSideImages: Array<{ url: string }>,// Updated to match the new structure
    children: ReactNode
}

export function InfiniteCarouselBackground({ className, leftSideImages, centerImages, rightSideImages, children }: InfiniteCarouselBackgroundProps) {

    const imageData = [
        {
            key: 'left',
            images: leftSideImages
        },
        {
            key: 'center',
            images: centerImages
        },
        {
            key: 'right',
            images: rightSideImages
        },
    ];

    return (
        <div className={`${style.hero} ${className}`}>
            <div className={`${style.carouselsContainer}`}>
                {[leftSideImages, centerImages, rightSideImages].map((imageSet, index) => (
                    <div className={`${style.infiniteCarousel} infinite-carousel`} key={`image-set-${index}`}>
                        <div className={`${style.imageContainer}`}>
                            {[...imageSet, ...imageSet, ...imageSet].map(({ url }, imgIndex) => (
                                <img
                                    src={url || ''}
                                    alt="image of infinite background"
                                    key={`${url || 'image'}-${index}-${imgIndex}`} 
                                />
                            ))}
                        </div>
                    </div>)
                )}
            </div>
            <div className={style.contents}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

import { ReactNode, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import style from '@/components/work_details/image_slider.module.scss';

import { Navigation, A11y } from 'swiper/modules';
import { SwiperNavButtons } from '@/components/common/SwiperNavButtons';

interface Work {
    title: string;
    thumbnail: { url: string };
    imagesCollection: { items: { url: string }[]}
}

interface ImageSliderProps {
    work: Work;
    thumbnail: { url: string };
    images: { url: string }[];
    leftArrowButton: ReactNode;
    rightArrowButton: ReactNode;
    workTitleHeading: (work: Work) => ReactNode;
    children: (work: Work) => ReactNode;
    imageComponent: (image: { url: string }) => ReactNode;
    mobileLeftArrowButton: ReactNode;
    mobileRightArrowButton: ReactNode;
    dialogCloseButton: ReactNode;
}

export function ImageSlider({ work, images, leftArrowButton, rightArrowButton, workTitleHeading, children, imageComponent, mobileLeftArrowButton, mobileRightArrowButton, dialogCloseButton }: ImageSliderProps) {
    const [swiperInstance, setSwiperInstance] = useState<any>(null); // Store the swiper instance
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = (imageUrl: string) => {
        setSelectedImage(imageUrl); // Set the selected image when clicked
        if (dialogRef.current) {
            dialogRef.current.showModal();  // Opens the dialog in modal form
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();  // Closes the dialog
        }
        setSelectedImage(null); // Reset selected image
    };

    return (
        <div className={style.wrapper}>
            <div className={style.topArea} id={style.workTopArea}>
                <div className="work-description">
                    {workTitleHeading(work)}
                </div>
                <div className={style.swiperNavButtonContainer} id={style.workSwiperButtonContainer}>
                    <SwiperNavButtons
                        leftArrowButton={leftArrowButton}
                        rightArrowButton={rightArrowButton}
                        swiper={swiperInstance} // Pass swiper instance to the navigation buttons
                    />
                </div>
            </div>

            {/* Swiper Component */}
            <Swiper
                slidesPerView={3}
                spaceBetween={32}
                modules={[Navigation, A11y]}
                className={`${style.swiper} mySwiper`}
                breakpoints={{
                    319: {
                        slidesPerView: 1,
                        spaceBetween: 24
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1211: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    }
                }}
                onSwiper={setSwiperInstance} // Capture swiper instance
            >
                {/* Thumbnail - First Image */}
                <SwiperSlide className={style.swiperSlide} key={work.thumbnail.url} onClick={() => openDialog(work.thumbnail.url)}>
                    {children(work)}
                </SwiperSlide>

                {/* Other images */}
                {
                    work.imagesCollection.items.map((image, index) => (
                        <SwiperSlide className={style.swiperSlide} key={`${work.title}-${index}`} onClick={() => openDialog(image.url)}>
                            {imageComponent(image)}
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={style.mobileSwiperNavButtons}>
                <SwiperNavButtons
                    leftArrowButton={mobileLeftArrowButton}
                    rightArrowButton={mobileRightArrowButton}
                    swiper={swiperInstance} // Pass swiper instance to the navigation buttons
                />
            </div>
            {/* Dialog for displaying the image in full view */}
            <dialog ref={dialogRef} className={style.dialog}>
                <div className={style.dialogImageWrapper} style={{ backgroundImage: `url(${selectedImage})`}}>
                    <button onClick={closeDialog}>{dialogCloseButton}</button>
                    {/* {selectedImage && (
                        <img src={selectedImage} alt="Selected work image" />
                    )} */}
                </div>
            </dialog>
        </div>
    );
}

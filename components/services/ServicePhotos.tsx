import React from 'react';
import styles from '@/components/services/service_photos.module.scss';

interface ServicePhotosProps {
  image1Url: string;
  image2Url: string;
  image1Alt?: string;
  image2Alt?: string;
}

export const ServicePhotos: React.FC<ServicePhotosProps> = ({
  image1Url,
  image2Url,
  image1Alt = "Image 1",
  image2Alt = "Image 2"
}) => {
  return (
    <div className={styles.servicesPhoto}>
      <div className={styles.serviceImgContain}>
        <div className={styles.serviceImgHeight}>
          <img
            src={image1Url}
            alt={image1Alt}
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, 24vw"
            className={styles.serviceImg}
          />
        </div>
      </div>

      <div className={`${styles.serviceImgContain} ${styles.serviceImgContain2}`}>
        <div className={styles.serviceImgHeight}>
          <img
            src={image2Url}
            alt={image2Alt}
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 33vw, 24vw"
            className={styles.serviceImg}
          />
        </div>
      </div>
    </div>
  );
};

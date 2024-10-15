import { ReactNode } from 'react';
import styles from '@/components/services/service_block.module.scss';

interface ServiceBlockProps {
  imageSrc: string;
  descriptionBlock: ReactNode;
  order: number;
}

export function ServiceBlock ({
  imageSrc,
  descriptionBlock,
  order,
}:ServiceBlockProps) {
  const isOdd = order % 2 !== 0;

  return (
    <section
      className={`${styles.service} ${isOdd ? styles.reverse : ''}`}
    >
      <img
        src={imageSrc}
        className={styles.serviceImage}
        alt="service block of service page"
      />
      <div className={styles.serviceContent}>
        {descriptionBlock}
      </div>
    </section>
  );
};

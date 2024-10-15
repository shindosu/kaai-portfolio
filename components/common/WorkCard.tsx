import { ReactNode } from 'react';
import styles from '@/components/common/work_card.module.scss';
import Image from 'next/image';

interface WorkCardProps {
  imageSrc: string;
  details: ReactNode;
}

{/* <img src={imageSrc} alt="thumbnail of kaai's work" className={styles.image} /> */}

export function WorkCard ({ imageSrc, details }: WorkCardProps) {
  return (
    <div className={styles.card}>
      {/* <Image
        src={imageSrc}
        alt="thumbnail of kaai's work"
        className={styles.image}
        layout="responsive"
        width={100}
        height={77}
      /> */}
      <img src={imageSrc} alt="thumbnail of kaai's work" className={styles.image} />
      {details}
    </div>
  );
};

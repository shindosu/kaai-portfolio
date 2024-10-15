import React from 'react';
import styles from '@/components/home/scroll_down.module.scss';

interface ScrollDownProps {
  children?: React.ReactNode; // Allow children to be passed into the slot
}

export const ScrollDown: React.FC<ScrollDownProps> = ({ children }) => {
  return (
    <div className={styles.scrollDown}>
      {children}
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

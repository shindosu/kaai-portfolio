import { ReactNode, useState } from "react";
import styles from "@/components/common/navbar.module.scss";

interface NavBarProps {
  className?: string;
  logoLink: ReactNode;
  desktopNavLinks: ReactNode;
  mobileNavLinks: ReactNode;
  menuText: ReactNode;
  closeText: ReactNode;
}

export function Navbar({
  className,
  logoLink,
  desktopNavLinks,
  mobileNavLinks,
  menuText,
  closeText
}: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          {logoLink}
        </div>

        {/* NavLinks for large screens */}
        <nav className={styles.navLinks}>{desktopNavLinks}</nav>

        {/* Hamburger Icon for mobile */}
        {/* <div className={styles.menuButton}> */}
          <button className={styles.menuButton} onClick={toggleMenu}>
            {isMenuOpen ? closeText : menuText}
          </button>
        {/* </div> */}
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavLinks}>{mobileNavLinks}</nav>
      </div>
    </header>
  );
}

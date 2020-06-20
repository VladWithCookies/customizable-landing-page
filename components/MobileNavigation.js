import clsx from 'clsx';
import { useState } from 'react';

const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened(!isOpened);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="flat-button d-none-lg"
      >
        <svg viewBox="0 0 100 70" width="40" height="40">
          <rect width="100" height="10" />
          <rect y="30" width="100" height="10" />
          <rect y="60" width="100" height="10" />
        </svg>
      </button>
      <div className="position-absolute d-none-lg">
        <nav className={clsx('mobile-navigation', { 'mobile-navigation--active': isOpened })}>
          <ul>
            <li>
              <a
                href="#top"
                onClick={toggleMenu}
                className="mobile-navigation__item"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                onClick={toggleMenu}
                className="mobile-navigation__item"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={toggleMenu}
                className="mobile-navigation__item"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#our-team"
                onClick={toggleMenu}
                className="mobile-navigation__item"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMenu}
                className="mobile-navigation__item"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="mobile-navigation__item"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="flat-button mb-55" onClick={toggleMenu}>
            <svg viewBox="0 0 24 24" width="48" height="48" viewBox="0 0 24 24">
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
            </svg>
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileNavigation;

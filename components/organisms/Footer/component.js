const Footer = () => (
  <footer className="main-footer">
    <div className="main-footer__contact-info">
      <div className="main-footer__logo-container">
        <img src="https://vignette.wikia.nocookie.net/villains/images/f/f2/Circle-outline-512.png/revision/latest?cb=20170410162921" alt="Company logo" className="logo" />
      </div>
      <ul className="main-footer__social-links">
        <li>
          <a href="#" className="main-footer__social-links-item">
            Facebbok
          </a>
        </li>
        <li>
          <a href="#" className="main-footer__social-links-item">
            Twitter
          </a>
        </li>
        <li>
          <a href="#" className="main-footer__social-links-item">
            Google+
          </a>
        </li>
        <li>
          <a href="#" className="main-footer__social-links-item">
            Behance
          </a>
        </li>
        <li>
          <a href="#" className="main-footer__social-links-item">
            Dribble
          </a>
        </li>
        <li>
          <a href="#" className="main-footer__social-links-item">
            Instagram
          </a>
        </li>
      </ul>
      <address className="main-footer__contact-info-address">
        Mese Selimovica 52, Banja Luka - BiH
        <a href="tel:+0038765252222">
          (00387) 65 252 222
        </a>
        <a href="mailto:info@mail.com">
          info@mail.com
        </a>
      </address>
      <a href="#top" className="flat-button mt-55 mb-30" aria-label="Back to top">
        <svg focusable="false" width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.354 7.89597L15.647 8.60297L8.5 1.45697L1.354 8.60297L0.647003 7.89597L8.5 0.0429688L16.354 7.89597Z" fill="white" />
        </svg>
      </a>
    </div>
    <small className="main-footer__copyright">
      @2015 Oxygen Theme
    </small>
  </footer>
);

export default Footer;

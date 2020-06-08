import Head from 'next/head'

const Index = () => (
  <>
    <Head>
      <title>
        Page name - Page description - Website
      </title>
    </Head>
    <header id="top" className="main-header">
      <a href="/" className="lh-0">
        <img src="https://vignette.wikia.nocookie.net/villains/images/f/f2/Circle-outline-512.png/revision/latest?cb=20170410162921" alt="Company logo" className="logo" />
      </a>
      <svg className="d-none-lg" viewBox="0 0 100 70" width="40" height="40">
        <rect width="100" height="10" />
        <rect y="30" width="100" height="10" />
        <rect y="60" width="100" height="10" />
      </svg>
      <nav className="main-header__navigation d-block-lg">
        <ul>
          <li>
            <a href="#" className="main-header__navigation-item main-header__navigation-item--active">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="main-header__navigation-item">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="main-header__navigation-item">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="main-header__navigation-item">
              Our Team
            </a>
          </li>
          <li>
            <a href="#" className="main-header__navigation-item">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="main-header__navigation-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <section className="hero">
      <h1 className="hero__header">
        Oxygen
      </h1>
      <p className="hero__subtitle">
        Starter UI kit
      </p>
      <div className="mouse">
        <div className="mouse__wheel"/>
      </div>
    </section>
    <section className="about-us">
      <div>
        <h2 className="main-heading about-us__heading">
          About Us
        </h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium commodi totam culpa, dolorum asperiores iusto
          quidem, nesciunt hic eaque blanditiis enim, id maiores nam nobis dignissimos aliquam ad minus nisi. In, fuga
          blanditiis non cum cupiditate dolore, accusantium odio doloremque quibusdam dignissimos nemo sed nisi, similique,
          mollitia et! Autem laborum sint tenetur, earum facere veniam?
        </p>
        <p>
          Sunt fugiat veniam consectetur soluta quia ex tempora quaerat, perferendis! Itaque a praesentium saepe ex distinctio
          aliquid quis laborum sit, porro dolor odio, iste eos laboriosam dolorum maiores harum reiciendis vitae doloribus
          illum voluptatibus nobis maxime assumenda ipsam tempora fugiat. Perspiciatis quibusdam hic cum tempore.
        </p>
      </div>
    </section>
    <section className="our-expertise">
      <h2 className="main-heading">
        Our Expertise
      </h2>
      <div className="our-expertise__content">
        <div className="our-expertise__stats">
          <div className="progress">
            <div className="progress__line">
              <div className="progress__value" style={{ width: '90%' }}>
                <span className="progress__label">
                  90%
                </span>
              </div>
            </div>
            <div className="progress__legend">
              <p className="text-uppercase m-0">
                Branding
              </p>
            </div>
          </div>
          <div className="progress">
            <div className="progress__line">
              <div className="progress__value" style={{ width: '80%' }}>
                <span className="progress__label">
                  80%
                </span>
              </div>
            </div>
            <div className="progress__legend">
              <p className="text-uppercase m-0">
                Design
              </p>
            </div>
          </div>
          <div className="progress">
            <div className="progress__line">
              <div className="progress__value" style={{ width: '85%' }}>
                <span className="progress__label">
                  85%
                </span>
              </div>
            </div>
            <div className="progress__legend">
              <p className="text-uppercase m-0">
                Development
              </p>
            </div>
          </div>
        </div>
        <div className="our-expertise__description">
          <p className="mt-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium commodi totam culpa, dolorum asperiores iusto
            quidem, nesciunt hic eaque blanditiis enim, id maiores nam nobis dignissimos aliquam ad minus nisi.
          </p>
          <p>
            Autem laborum sint tenetur, earum facere veniam? Sunt fugiat veniam consectetur soluta quia ex tempora quaerat,
            perferendis! Itaque a praesentium saepe ex distinctio aliquid quis
          </p>
        </div>
      </div>
      <div className="our-expertise__services">
        <div className="our-expertise__services-item">
          <div className="our-expertise__services-item-icon">
            <svg aria-hidden="true" width="50" height="55" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M45.3906 16.7949L43.7566 18.4289C40.2162 15.343 35.6766 13.617 30.9566 13.617C27.7787 13.617 24.6026 14.434 21.8792 15.8859L28.7779 8.98722C29.3226 9.34977 29.9575 9.5319 30.5941 9.5319C31.5013 9.5319 32.4102 9.16935 33.1353 8.44254C34.5872 6.99063 34.5872 4.71999 33.1353 3.26807C32.4085 2.54126 31.5013 2.17871 30.5941 2.17871C29.6868 2.17871 28.7779 2.54126 28.0528 3.26807C26.8732 4.53956 26.6911 6.35403 27.5081 7.71573L18.7932 16.4306L17.1592 14.7966L12.7115 19.2442L14.3455 20.8783L5.44852 29.7753C4.90384 29.4128 4.26894 29.2306 3.63235 29.2306C2.72512 29.2306 1.81618 29.5932 1.09107 30.32C-0.360842 31.7719 -0.360842 34.0425 1.09107 35.4945C1.81788 36.1294 2.72512 36.4936 3.63235 36.4936C4.53958 36.4936 5.44852 36.1311 6.17363 35.4042C7.3532 34.2247 7.53533 32.4085 6.71831 30.9566L13.617 24.0579C9.98639 31.0485 10.8034 39.7634 16.1583 45.9353L14.5243 47.6596L19.0638 52.1072L23.5115 47.6596L19.0638 43.2119L17.52 44.7557C12.2553 38.5821 11.983 29.6868 16.4306 23.1506L17.1575 23.8774L21.697 19.4298L20.88 18.703C23.7855 16.6145 27.326 15.5251 30.9566 15.5251C35.2238 15.5251 39.217 17.0689 42.4851 19.7923L40.8511 21.3362L45.3906 25.7838L49.8383 21.3362L45.3906 16.7966V16.7949ZM20.9702 47.6596L19.0638 49.5659L17.1575 47.6596L19.0638 45.7532L20.9702 47.6596ZM29.3226 4.62977C29.6851 4.26722 30.1396 4.08509 30.5941 4.08509C31.0485 4.08509 31.5013 4.26722 31.8655 4.62977C32.5924 5.35658 32.5924 6.44595 31.8655 7.17105C31.503 7.5336 31.0485 7.71573 30.5941 7.71573C30.1396 7.71573 29.6868 7.5336 29.3226 7.17105C28.5958 6.53616 28.5958 5.35488 29.3226 4.62977ZM4.90214 34.1328C4.53958 34.4953 4.08511 34.6774 3.63065 34.6774C3.17618 34.6774 2.72341 34.4953 2.35916 34.1328C1.9966 33.8604 1.81448 33.4059 1.81448 32.8613C1.81448 32.4068 1.9966 31.954 2.35916 31.5898C2.72171 31.2255 3.17618 31.0451 3.63065 31.0451C4.08511 31.0451 4.53788 31.2272 4.90214 31.5898C5.62894 32.3166 5.62894 33.4962 4.90214 34.1311V34.1328ZM17.0672 21.3328L15.1609 19.4264L17.0672 17.52L18.9736 19.4264L17.0672 21.3328ZM45.3906 23.2391L43.4843 21.3328L45.3906 19.4264L47.297 21.3328L45.3906 23.2391Z" fill="#00B2A0" />
            </svg>
          </div>
          <div>
            <h3 className="our-expertise__services-item-header m-0">
              Graphic design
            </h3>
            <p className="our-expertise__services-item-description">
              Lorem Ipsum Proin gravida nibh vel  velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
              elit consequat ipsum
            </p>
          </div>
        </div>
        <div className="our-expertise__services-item">
          <div className="our-expertise__services-item-icon">
            <svg aria-hidden="true" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M46.6578 35.8298V5.84229H3.34063V35.8298H24.1656V42.4938H18.3344V44.1595H31.6625V42.4938H25.8313V35.8298H46.6562H46.6578ZM5.00781 7.50635H44.9922V34.1626H5.00781V7.50635Z" fill="#00B2A0" />
            </svg>
          </div>
          <div>
            <h3 className="our-expertise__services-item-header m-0">
              WEB development
            </h3>
            <p className="our-expertise__services-item-description">
              Lorem Ipsum Proin gravida nibh vel  velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
              elit consequat ipsum
            </p>
          </div>
        </div>
        <div className="our-expertise__services-item">
          <div className="our-expertise__services-item-icon">
            <svg aria-hidden="true" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.557434 19.5254V30.9679H5.46156V40.7761H7.09576V30.9679H19.6696L31.6087 40.629V9.57153L19.5945 19.5254H0.557434ZM2.19317 29.3321V21.1596H8.73149V29.3321H2.19317ZM20.6369 20.784L29.973 13.0484V37.2027L20.2475 29.3337H10.3642V21.1612H20.1816L20.6354 20.7856L20.6369 20.784Z" fill="#00B2A0" />
              <path fillRule="evenodd" clipRule="evenodd" d="M42.9209 11.0125L41.745 12.1883C45.5699 15.1823 48.0427 19.8304 48.0427 25.0534C48.0427 30.4159 45.435 35.1698 41.4338 38.1515L42.6173 39.335C46.9082 36.0497 49.6784 30.8758 49.6784 25.0534C49.6784 19.372 47.0386 14.3069 42.9224 11.0125L42.9209 11.0125Z" fill="#00B2A0" />
              <path fillRule="evenodd" clipRule="evenodd" d="M37.6688 16.2822L36.4807 17.4703C39.004 19.0647 40.6888 21.8701 40.6888 25.0695C40.6888 28.4099 38.8538 31.3242 36.1419 32.8741L37.333 34.0652C40.327 32.1858 42.3245 28.8652 42.3245 25.0695C42.3245 21.4148 40.4788 18.1939 37.6703 16.2822L37.6688 16.2822Z" fill="#00B2A0" />
            </svg>
          </div>
          <div>
            <h3 className="our-expertise__services-item-header m-0">
              Marketing
            </h3>
            <p className="our-expertise__services-item-description">
              Lorem Ipsum Proin gravida nibh vel  velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
              elit consequat ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="vision">
      <img className="vision__image" src="https://picsum.photos/1400" alt="" />
      <div className="vision__content">
        <h2 className="main-heading">
          Let’s make
          <br />
          magic.
        </h2>
        <p className="vision__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veniam odio itaque. Molestiae aut dicta accusantium
          quod, modi ad alias enim dolor delectus iusto! Inventore tempora labore nobis doloribus optio nulla sit corrupti
          nostrum, tempore debitis pariatur minus maiores velit, autem ex eum distinctio error fugit. Itaque voluptatum quam
          veritatis fuga impedit nulla dolor.
        </p>
        <p>
          Nam dignissimos, ratione odit doloribus cum porro, aut. Ipsum nisi odio voluptatum, et, reprehenderit accusamus,
          est provident debitis dicta ullam esse assumenda, odit? Alias architecto enim pariatur libero ipsam mollitia
           maiores minus quibusdam numquam perspiciatis eveniet sit dolores eligendi inventore, ea voluptatum debitis iure,
           repellendus iste culpa! Voluptatibus quam ipsum nisi odit deserunt qui, consectetur ducimus, quis officia quaerat
           sapiente dolores, ad libero! Tenetur provident, omnis.
        </p>
      </div>
    </section>
    <section className="portfolio">
      <div className="portfolio__navigation">
        <h2 className="main-heading">
          Portfolio
        </h2>
        <ul className="portfolio__navigation-menu">
          <li className="portfolio__navigation-menu-item portfolio__navigation-menu-item--active">
            <a href="#">
              All
            </a>
          </li>
          <li className="portfolio__navigation-menu-item">
            <a href="#">
              Branding
            </a>
          </li>
          <li className="portfolio__navigation-menu-item">
            <a href="#">
              Photography
            </a>
          </li>
          <li className="portfolio__navigation-menu-item">
            <a href="#">
              Illustration
            </a>
          </li>
        </ul>
      </div>
      <div className="gallery">
        <figure className="gallery__image gallery__image--7x">
          <img src="https://picsum.photos/900" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--4x">
          <img src="https://picsum.photos/910" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--5x">
          <img src="https://picsum.photos/920" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--4x">
          <img src="https://picsum.photos/930" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--4x">
          <img src="https://picsum.photos/940" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--8x">
          <img src="https://picsum.photos/950" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--7x">
          <img src="https://picsum.photos/960" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--5x">
          <img src="https://picsum.photos/970" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
        <figure className="gallery__image gallery__image--4x">
          <img src="https://picsum.photos/980" alt="" />
          <figcaption className="gallery__image-info">
            <a href="#">
              <p className="gallery__image-caption">
                Ocaa cupidatat
              </p>
              <p className="gallery__image-category">
                Design
              </p>
            </a>
          </figcaption>
        </figure>
      </div>
      <button className="portfolio__show-more-button">
        View more projects
      </button>
    </section>
    <section className="testimonial">
      <q className="testimonial__quote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q>
      <p className="testimonial__author">
        Gilbert Hammond
      </p>
    </section>
    <section className="video">
      <button type="button" aria-label="Play video" className="flat-button">
        <svg focusable="false" width="55" height="65" viewBox="0 0 55 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.04809 5.31272L48.8267 32.0164L3.04809 58.7201V5.31272ZM0 0.00285937V64.0271L54.8771 32.0136L0 0V0.00285937Z" fill="white" />
        </svg>
      </button>
    </section>
    <section className="stats">
      <div>
        <p className="stats__value">
          305
        </p>
        <p className="stats__title">
          Web Designs
        </p>
      </div>
      <div>
        <p className="stats__value">
          220
        </p>
        <p className="stats__title">
          Logo Designs
        </p>
      </div>
      <div>
        <p className="stats__value">
          52
        </p>
        <p className="stats__title">
          Print Designs
        </p>
      </div>
      <div>
        <p className="stats__value">
          88
        </p>
        <p className="stats__title">
          Mobile Apps
        </p>
      </div>
    </section>
    <section className="carousel">
      <button type="button" aria-label="Go to previous image" className="flat-button">
        <svg focusable="false" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013Z" fill="#333333" />
        </svg>
      </button>
      <div className="carousel__slide">
        <div className="carousel__slide-content">
          <div className="carousel__slide-content-text">
            <h2 className="carousel__slide-content-text-heading">
              Then they show that show to the people who make shows
            </h2>
            <p className="carousel__slide-content-text-description">
              The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
              Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he
              is truly his brother’s.
            </p>
          </div>
          <img className="carousel__slide-content-image" src="https://picsum.photos/500" alt="" />
        </div>
        <div className="carousel__pagination">
          <button type="button" aria-label="Go to 1 image" className="carousel__pagination-control" />
          <button type="button" aria-label="Go to 2 image" className="carousel__pagination-control" />
          <button type="button" aria-label="Go to 3 image" className="carousel__pagination-control carousel__pagination-control--active" />
          <button type="button" aria-label="Go to 4 image" className="carousel__pagination-control" />
          <button type="button" aria-label="Go to 5 image" className="carousel__pagination-control" />
          <button type="button" aria-label="Go to 8 image" className="carousel__pagination-control" />
        </div>
      </div>
      <button type="button" aria-label="Go to next image" className="flat-button">
        <svg focusable="false" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z" fill="#333333" />
        </svg>
      </button>
    </section>
    <section className="our-team">
      <h2 className="main-heading">
        Our Team
      </h2>
      <div className="our-team__member-items">
        <figure className="our-team__member">
          <img src="https://picsum.photos/500" className="out-team__member-photo" alt="CEO photo" />
          <figcaption>
            <p className="our-team__member-name">
              Bernard Sparks
            </p>
            <p className="our-team__member-position">
              CEO
            </p>
          </figcaption>
        </figure>
        <figure className="our-team__member">
          <img src="https://picsum.photos/510" className="out-team__member-photo" alt="Co-Founder photo" />
          <figcaption>
            <p className="our-team__member-name">
              Minerva Benson
            </p>
            <p className="our-team__member-position">
              Co-Founder
            </p>
          </figcaption>
        </figure>
        <figure className="our-team__member">
          <img src="https://picsum.photos/520" className="out-team__member-photo" alt="Sales photo" />
          <figcaption>
            <p className="our-team__member-name">
              Jared Olson
            </p>
            <p className="our-team__member-position">
              Sales
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="pricing-plans">
      <h2 className="main-heading">
        Pricing Plans
      </h2>
      <div className="pricing-plans__items">
        <div className="pricing-plans__plan-card">
          <p className="pricing-plans__plan-type m-0">
            Basic
          </p>
          <p className="pricing-plans__plan-price">
            <span className="pricing-plans__plan-price-currency">
              $
            </span>
            <span className="pricing-plans__plan-price-value">
              29
            </span>
            <span className="pricing-plans__plan-duration">
              / mo
            </span>
          </p>
          <ul className="pricing-plans__plan-services">
            <li className="pricing-plans__plan-services-item">
              1 Logo Design
            </li>
            <li className="pricing-plans__plan-services-item">
              1 Website Design
            </li>
            <li className="pricing-plans__plan-services-item">
              1 Domain Free
            </li>
            <li className="pricing-plans__plan-services-item">
              3 Month License
            </li>
            <li className="pricing-plans__plan-services-item">
              1 GB Storage
            </li>
          </ul>
          <a href="#" className="pricing-plans__choose-plan-link">
            Choose plan
          </a>
        </div>
        <div className="pricing-plans__plan-card">
          <p className="pricing-plans__plan-type m-0">
            Starter
          </p>
          <p className="pricing-plans__plan-price">
            <span className="pricing-plans__plan-price-currency">
              $
            </span>
            <span className="pricing-plans__plan-price-value">
              50
            </span>
            <span className="pricing-plans__plan-duration">
              / mo
            </span>
          </p>
          <ul className="pricing-plans__plan-services">
            <li className="pricing-plans__plan-services-item">
              2 Logo Design
            </li>
            <li className="pricing-plans__plan-services-item">
              2 Website Design
            </li>
            <li className="pricing-plans__plan-services-item">
              1 Domain Free
            </li>
            <li className="pricing-plans__plan-services-item">
              6 Month License
            </li>
            <li className="pricing-plans__plan-services-item">
              1 GB Storage
            </li>
          </ul>
          <a href="#" className="pricing-plans__choose-plan-link">
            Choose plan
          </a>
        </div>
        <div className="pricing-plans__plan-card">
          <p className="pricing-plans__plan-type m-0">
            Professional
          </p>
          <p className="pricing-plans__plan-price">
            <span className="pricing-plans__plan-price-currency">
              $
            </span>
            <span className="pricing-plans__plan-price-value">
              70
            </span>
            <span className="pricing-plans__plan-duration">
              / mo
            </span>
          </p>
          <ul className="pricing-plans__plan-services">
            <li className="pricing-plans__plan-services-item">
              3 Logo Design
            </li>
            <li className="pricing-plans__plan-services-item">
              3 Website Design
            </li>
            <li className="pricing-plans__plan-services-item">
              2 Domain Free
            </li>
            <li className="pricing-plans__plan-services-item">
              12 Month License
            </li>
            <li className="pricing-plans__plan-services-item">
              2 GB Storage
            </li>
          </ul>
          <a href="#" className="pricing-plans__choose-plan-link">
            Choose plan
          </a>
        </div>
      </div>
    </section>
    <section className="partners">
      <img className="partners__logo" src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
      <img className="partners__logo" src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
      <img className="partners__logo" src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
      <img className="partners__logo" src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
    </section>
    <section className="contact-us">
      <div className="contact-us__form-container">
        <h2 className="main-heading">
          Get in Touch
        </h2>
        <form className="contact-us__form mt-95">
          <input className="main-input" type="text" placeholder="YOUR NAME" aria-label="Your name" />
          <input className="main-input mt-30" type="email" placeholder="VALID EMAIL" aria-label="Valid email" />
          <textarea rows="8" className="main-textarea mt-55" placeholder="YOUR MESSAGE" aria-label="Your message" />
          <button className="button mt-40" type="submit">
            Send message
          </button>
        </form>
      </div>
      <img src="https://www.worldeasyguides.com/wp-content/uploads/2013/01/Place-Vendome-on-Map-of-Paris.jpg" className="contact-us__map" alt="1 Wall Street on the map" />
    </section>
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
        <a href="#top" className="flat-button mt-55" aria-label="Back to top">
          <svg focusable="false" width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.354 7.89597L15.647 8.60297L8.5 1.45697L1.354 8.60297L0.647003 7.89597L8.5 0.0429688L16.354 7.89597Z" fill="white" />
          </svg>
        </a>
      </div>
      <small className="main-footer__copyright">
        @2015 Oxygen Theme
      </small>
    </footer>
  </>
);

export default Index;

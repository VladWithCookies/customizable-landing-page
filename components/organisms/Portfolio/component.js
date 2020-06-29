const Portfolio = () => (
  <section id="portfolio" className="portfolio">
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
);

export default Portfolio;

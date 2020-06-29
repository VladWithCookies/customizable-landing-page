const Carousel = () => (
  <section className="carousel">
    <button type="button" aria-label="Go to previous image" className="flat-button d-none d-block-lg">
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
    <button type="button" aria-label="Go to next image" className="flat-button d-none d-block-lg">
      <svg focusable="false" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z" fill="#333333" />
      </svg>
    </button>
  </section>
);

export default Carousel;

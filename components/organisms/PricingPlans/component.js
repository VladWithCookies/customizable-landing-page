const PricingPlans = () => (
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
);

export default PricingPlans;

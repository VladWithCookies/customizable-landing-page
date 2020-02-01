const Index = () => (
  <>
    <nav className="main-navigation">
      <a href="/">
        <img
          src="https://lh3.googleusercontent.com/proxy/tfxnu2uvdB5UtUIFnhGZ46ySFm1Yl2ebORT2DyTIIrLzxc5cT7kq_3hSu-1oaU-BUyzddNgRcBybMBrgSUKT-gVeWYNkrxs9Aijs"
          alt="Company logo"
          className="logo"
        />
      </a>
      <ul className="main-navigation__items">
        <li className="navigation-item">
          <a href="#">
            Home
          </a>
        </li>
        <li className="navigation-item">
          <a href="#">
            About us
          </a>
        </li>
        <li className="navigation-item">
          <a href="#">
            Portfolio
          </a>
        </li>
        <li className="navigation-item">
          <a href="#">
            Our Team
          </a>
        </li>
        <li className="navigation-item">
          <a href="#">
            Blog
          </a>
        </li>
        <li className="navigation-item">
          <a href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <section className="hero">
      <h1 className="hero__header">
        Oxygen
      </h1>
      <p className="hero__description">
        Starter UI kit
      </p>
      <div className="mouse">
        <div className="mouse__wheel"/>
      </div>
    </section>
  </>
);

export default Index;

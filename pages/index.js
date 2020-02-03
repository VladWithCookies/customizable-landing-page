const Index = () => (
  <>
    <nav className="main-navigation">
      <a href="/">
        <img
          src="https://logodix.com/logo/72522.png"
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
      <p className="hero__subtitle">
        Starter UI kit
      </p>
      <div className="mouse">
        <div className="mouse__wheel"/>
      </div>
    </section>
    <section className="about-us">
      <div>
        <h2 className="main-header">
          About Us
        </h2>
        <div className="header-underline" />
      </div>
      <div className="about-us__content main-text">
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
      <h2 className="main-header">
        Our Expertise
      </h2>
      <div className="header-underline" />
      <div className="our-expertise__content">
        <div className="stats">
          <div className="chart">
            <div className="chart__line">
              <div className="line-progress" style={{ width: '90%' }}>
                <span className="line-progress__value">
                  90%
                </span>
              </div>
            </div>
            <div className="chart__legend">
              <span className="text-uppercase">
                Branding
              </span>
            </div>
          </div>
          <div className="chart">
            <div className="chart__line">
              <div className="line-progress" style={{ width: '80%' }}>
                <span className="line-progress__value">
                  80%
                </span>
              </div>
            </div>
            <div className="chart__legend">
              <span className="text-uppercase">
                Design
              </span>
            </div>
          </div>
          <div className="chart">
            <div className="chart__line">
              <div className="line-progress" style={{ width: '85%' }}>
                <span className="line-progress__value">
                  85%
                </span>
              </div>
            </div>
            <div className="chart__legend">
              <span className="text-uppercase">
                Development
              </span>
            </div>
          </div>
        </div>
        <div className="expertise-description main-text">
          <p className="expertise-description__lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium commodi totam culpa, dolorum asperiores iusto
            quidem, nesciunt hic eaque blanditiis enim, id maiores nam nobis dignissimos aliquam ad minus nisi.
          </p>
          <p>
            Autem laborum sint tenetur, earum facere veniam? Sunt fugiat veniam consectetur soluta quia ex tempora quaerat, perferendis!
            Itaque a praesentium saepe ex distinctio aliquid quis
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Index;

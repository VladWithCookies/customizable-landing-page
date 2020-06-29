const OurTeam = () => (
  <section id="our-team" className="our-team">
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
);

export default OurTeam;

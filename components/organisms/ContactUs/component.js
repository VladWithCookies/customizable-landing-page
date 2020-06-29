const ContactUs = () => (
  <section id="contact" className="contact-us">
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
);

export default ContactUs;

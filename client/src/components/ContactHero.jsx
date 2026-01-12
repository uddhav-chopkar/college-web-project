import '../css/ContactHero.css';

function ContactHero() {
  return (
    <section className="contact-hero-wrapper">
      <div className="contact-hero">
        <h1 className="contact-title">Get in Touch with Bright Future College</h1>
        <p className="contact-subtext">
          We’re here to guide your academic journey and answer all your questions.
        </p>
      </div>

      <div className="description-content">
        <h2 className="description-heading">Why Reach Out?</h2>
        <p className="description-text">
          Whether you’re a future student, parent, or just curious — our team is here to help.
          Learn more about admissions, programs, or campus life by simply filling out the form below.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;

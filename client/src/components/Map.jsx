import '../CSS/Map.css';

const Map = () => {
  return (
    <section className="map-section">
      <h2 className="map-title">Find us here with Google Map</h2>
      <div className="map-container">
        <iframe
          title="College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.437590816199!2d73.91123391436894!3d18.552511987395065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0d89b3b76d5%3A0xe3f3bb9cb73d7169!2sSPPU%20-%20Savitribai%20Phule%20Pune%20University!5e0!3m2!1sen!2sin!4v1655205138421!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

// local location use kia hoo

export default Map;

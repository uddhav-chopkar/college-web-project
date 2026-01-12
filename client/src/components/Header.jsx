import '../CSS/Header.css'; 

function Header() {
  return (
    <div className="hero-header">
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1170&auto=format&fit=crop"
          alt="College Campus"
        />
      </div>
      <div className="hero-text">
        <h1>We are Listening. Let's Talk Education!</h1>
        <p>
          Whether you're a future student or a curious parent — we're here to help you
          explore the opportunities at Bright Future College.
        </p>
      </div>
    </div>
  );
}

export default Header;

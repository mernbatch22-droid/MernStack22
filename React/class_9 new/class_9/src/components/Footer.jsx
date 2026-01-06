import "./Footer.css";
function Footer() {
  return (
    <footer className="blinkit-footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Useful Links</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Press</p>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Breakfast</p>
          <p>Snacks</p>
          <p>Beverages</p>
        </div>

        <div className="footer-col">
          <h4>Download App</h4>
          <div className="app-buttons">
            <button>Google Play</button>
            <button>App Store</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Blinkit Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

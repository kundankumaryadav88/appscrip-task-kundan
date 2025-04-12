const Footer = () => {
    return (
      <footer className="bg-black text-white text-sm px-6 md:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold mb-2">BE THE FIRST TO KNOW</h4>
            <p className="mb-4">Sign up for updates from mettā muse.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="p-2 text-black flex-1 rounded-l-sm"
              />
              <button className="bg-gray-800 px-4 rounded-r-sm">SUBSCRIBE</button>
            </div>
          </div>
  
          {/* Contact & Currency */}
          <div>
            <h4 className="font-bold mb-2">CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4 className="font-bold mt-4 mb-1">CURRENCY</h4>
            <p className="flex items-center gap-1">
              <span role="img" aria-label="flag">
                🇺🇸
              </span>
              USD
            </p>
            <p className="text-xs mt-1 text-gray-400">
              Transactions will be completed in Euro and a currency reference is available on hover.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-2">QUICK LINKS</h4>
            <ul className="space-y-1">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
  
          {/* Info & Social */}
          <div>
            <h4 className="font-bold mb-2">mettā muse</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-bold mb-2">FOLLOW US</h4>
              <div className="flex gap-3">
                <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
                <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
          <div className="flex gap-2">
            <img src="../../public/gpay.png" alt="Google Pay" />
            <img src="/icons/visa.svg" alt="Visa" className="h-5" />
            <img src="/icons/paypal.svg" alt="PayPal" className="h-5" />
            <img src="/icons/amex.svg" alt="Amex" className="h-5" />
            <img src="/icons/applepay.svg" alt="Apple Pay" className="h-5" />
            <img src="/icons/discover.svg" alt="Discover" className="h-5" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
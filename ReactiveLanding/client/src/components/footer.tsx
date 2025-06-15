export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Garage Door Repair Rossmoor</h3>
            <p className="text-gray-300 mb-4">
              Professional garage door repair and installation services in Rossmoor and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("brands")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Brands
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("areas")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p><i className="fas fa-phone mr-2"></i> 310-915-4151</p>
              <p><i className="fas fa-clock mr-2"></i> 24/7 Emergency Service</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i> Rossmoor, CA & Surrounding Areas</p>
              <p><i className="fas fa-shield-alt mr-2"></i> One Year Warranty</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Garage Door Repair Rossmoor. All Rights Reserved.</p>
          <p className="mt-2">Joseph Lucey - Professional Garage Door Services</p>
        </div>
      </div>
    </footer>
  );
}

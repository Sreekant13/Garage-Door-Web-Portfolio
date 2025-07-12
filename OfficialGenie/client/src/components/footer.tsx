const currentYear = new Date().getFullYear();
// 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;


export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Genie Online Dealer</h3>
            <p className="text-gray-300 mb-4">
              Authorized Genie garage door dealer serving Los Angeles, San Fernando Valley and Orange County with professional repair and installation services.
            </p>
            <div className="flex space-x-4">
              <a href="http://www.geniecompany.com/" className="text-genie-red hover:text-red-400">
                Official Genie
              </a>
              <a href="http://www.bestgaragedoor.com/" className="text-genie-red hover:text-red-400">
                Best Garage Door
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#areas" className="hover:text-white">Service Areas</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#dealers" className="hover:text-white">Find Dealer</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Other Sites</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="https://bestgaragedoor.com/" className="hover:text-primary transition-colors">Best Garage Door</a></li>
              <li><a href="https://geniedooropeners.com/" className="hover:text-primary transition-colors">Genie Door Opener</a></li>
              <li><a href="https://newgarageopener.com/" className="hover:text-primary transition-colors">New Garage Opener</a></li>
              <li><a href="https://newgaragedoorsprings.com/" className="hover:text-primary transition-colors">New Garage Door Springs</a></li>
              <li><a href="https://newgaragedoorsandgates.com/" className="hover:text-primary transition-colors">New Garage Doors and Gates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Los Angeles:</strong> (323) 270-5387</p>
              <p><strong>Orange County:</strong> (714) 782-0106</p>
              <p>24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2010-{currentYear} www.officialgenie.com All rights reserved. Genie garage door dealers compiled by garage door companies of Los Angeles and Orange County.
          </p>
        </div>
      </div>
    </footer>
  );
}

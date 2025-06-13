import { useState } from "react"
import {
  Star,
  CheckCircle,
  ShoppingCart,
  Heart,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import ImageGallery from "@/components/image-gallery"
import ProductTabs from "@/components/product-tabs"
import MapWithAddress from "@/components/MapWithAddress";
import MouseTrail from "@/components/MouseTrail"

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("overview")

  return (
    <div className="bg-gray-50 font-inter">
      {/* NAVBAR */}
      <Navigation
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
      />
      {/* <MouseTrail /> */}
      {/* HERO / PRODUCT INFO */}
      <section id="overview" className=" scroll-mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">

            {/* DETAILS (LEFT) */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Crusader 202SS Garage Door Opener
              </h1>
              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                {/* <p className="text-3xl font-bold text-gray-900">$489.99</p> */}
              </div>
              <div className="mt-3 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                  //"h-5 w-5 fill-brand-amber text-brand-amber" />
                ))}
                {/* <span className="ml-10 text-xl font-medium font-bold text-sm text-red-700">(323)-270-5387</span> */}
                 <a
                   href="tel:+13232705387"
                   className="ml-10 text-xl font-medium font-bold text-sm text-red-700"
                 >
                   (323)-270-5387
                 </a>
              </div>
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-black-800 space-y-4">
                  <p>
                    Crusader 202ss one of the greatest American garage door openers to be manufactured.
                    Crusader is a 3/4” screw drive garage door opener it came in 1/3 Horsepower with a 6” or 8” pulley.
                    It also came in different leighs to accommodate taller garage doors.
                  </p>
                  <p>
                    Genie bought out McKenny Electronics Company, which manufactured garage door openers such as the Crusader
                    line, around 1990.
                  </p>
                  <p>
                    This acquisition occurred when North American Philips sold the Genie assets to GMI Holdings, Inc.,
                    operating as The Genie Company. McKenny Electronics' garage door opener line was discontinued
                    after the acquisition, despite being Genie's major competitor for over 40 years.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Heavy-duty motor for reliable operation",
                    "Advanced safety features and auto-reverse",
                    "Suitable for doors up to 7 feet high",
                    "Weather-resistant steel construction",
                  ].map((feat) => (
                    <li key={feat} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="mt-8 bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900">Need Help?</h4>
                  <p className="mt-1 text-sm text-gray-600">Call our technical support team</p>
                  <p className="mt-1 text-lg font-semibold text-brand-blue">
                    <a href="tel:+13232705387">(323) 270-5387</a>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* IMAGE GALLERY (RIGHT) */}
            <div className="flex flex-col">
              <ImageGallery />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TABS */}
      <div className="pb-16">
        <ProductTabs
          value={activeTab === "overview" ? "specifications" : activeTab}
          onValueChange={(key) => setActiveTab(key)}
        />
      </div>
      <MapWithAddress
        contained
        title="Crusader202ss Garage Door Repair"
        addressLines={[
          "3103 Isabel Drive",
          "Los Angeles, CA 90065",
          "United States",
        ]}
        lat={34.103568}
        lng={-118.232634}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />

      {/* FOOTER */}
      <footer className="bg-black text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          {/* Service Areas */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">
              Other places we provide service to:
            </h4>
            <div className="text-sm leading-relaxed space-y-2">
              <p>
                Agoura Hills | Alhambra | Arcadia | Artesia | Avalon | Azusa |
                Baldwin Park | Bell | Bell Gardens | Bellflower | Rossmoor |
                Bradbury | Burbank | Calabasas | Los Angeles County, Orange County |
                Cerritos | Claremont | Commerce | Compton | Covina | Cudahy |
                Culver City | Diamond Bar | Downey | Duarte | El Monte | El Segundo |
                Gardena | Glendale | Glendora | Hawaiian Gardens | Hawthorne |
                Hermosa Beach | Hidden Hills | Huntington Park | Industry |
                Inglewood | Irwindale | La Cañada Flintridge | La Habra Heights |
                La Mirada | La Puente | La Verne | Lakewood | Lancaster | Lawndale |
                Lomita | Long Beach | Los Angeles | Lynwood | Malibu | Manhattan Beach |
                Maywood | Monrovia | Montebello | Monterey Park | Norwalk | Palmdale |
                Palos Verdes Estates | Paramount | Pasadena | Pico Rivera | Pomona |
                Rancho Palos Verdes | Redondo Beach | Rolling Hills |
                Rolling Hills Estates | Rosemead | San Dimas | San Fernando |
                San Gabriel | San Marino | Santa Clarita | Santa Fe Springs |
                Santa Monica | Sierra Madre | Signal Hill | South El Monte | South Gate |
                South Pasadena | Temple City | Torrance | Vernon | Walnut |
                West Covina | West Hollywood | Westlake Village | Whittier
              </p>
              <p>
                Anaheim | Brea | Buena Park | Costa Mesa | Cypress | Fountain Valley |
                Fullerton | Garden Grove | Huntington Beach | La Habra | La Palma |
                Los Alamitos | Orange | Placentia | Santa Ana | Seal Beach | Stanton |
                Tustin | Villa Park | Westminster | Yorba Linda
              </p>
            </div>
          </div>

          {/* SEO Keywords */}
          <div className="text-sm leading-relaxed">
            Crusader Garage Door Repair | Crusader Garage Door Repair Parts | Crusader Garage Door
            Opener | Crusader Garage Door Service | Crusader Garage Door Emergency Repair
          </div>

          {/* Copyright */}
          <div className="text-center text-xL text-white-500">
            © 2025 Crusader Garage Door Opener / Repair. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Industrial Equipment Pro</h3>
              <p className="text-gray-300 text-sm mb-4">
                Your trusted source for professional garage door openers and industrial equipment. Quality products, expert support, reliable service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Installation</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>(323) 270-5387</li>
                <li>support@crusader.com</li>
                <li>Mon–Fri 8AM–6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            &copy; 2024 Industrial Equipment Pro. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  )
}

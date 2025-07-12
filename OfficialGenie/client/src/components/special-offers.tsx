// src/components/SpecialOffers.tsx
import { Gift } from "lucide-react";
import GenieOfferImg from "@/assets/images/GenieSpecialOffer.png";

export default function SpecialOffers() {
  return (
    <section id="specialoffer" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
            Special Service Offers
          </h2>
          <p className="text-lg text-gray-600">
            Save on professional garage door repair services
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden lg:flex">
          
          {/* Left: Bold Gradient Panel */}
          <div className="lg:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 p-12 flex flex-col justify-center">
            <Gift className="w-12 h-12 text-white mb-4" />
            <h3 className="text-4xl font-extrabold text-white mb-4">
              Free <span className="text-yellow-200">Remote Control</span>
            </h3>
            <p className="text-white mb-6">
              Free Remote Control with the purchase of any new garage door opener
            </p>
            <a
              href="tel:3232705387"
              className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition mb-4"
            >
              Call now: 323-270-5387
            </a>
            <p className="text-white/80 text-sm">
              Mention this offer when scheduling your new garage door installation to redeem.
            </p>
          </div>

          {/* Right: Illustrative Image */}
          <div className="lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={GenieOfferImg}
              alt="Technician placing price tag"
              className="w-full h-96 object-contain"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

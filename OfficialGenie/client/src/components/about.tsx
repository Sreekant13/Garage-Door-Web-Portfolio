// src/components/About.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import GenieLogo from "@/assets/images/GenieLogo.png";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Official Genie Dealer History</h2>

        {/* Genie History */}
        <div className="mb-12">

          <p className="mb-4 text-gray-700">
            Genie is one of America's best known and trusted consumer brand names. The company has an illustrious history that underscores its commitment to innovation. Millions of our product units are in use today throughout North America. Dependability, high quality, and nationwide service are just a few reasons to choose a Genie branded garage door opener.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-grey-600">
            The Genie History
          </h3>
          <p className="mb-4 text-gray-700">
            Founded in 1923 as the Alliance Manufacturing Company, the production included a broad line of consumer, industrial and military products. When America was at war in the 1940s, the Alliance factory produced everything from fuse caps and voltage regulators to canteen handles and generators.
          </p>
          <p className="mb-4 text-gray-700">
            In 1954, the Alliance Manufacturing Company first produced its own garage door opener unit. Named Genie, it was the first mass-produced, radio-controlled residential garage door opener, and became the market leader in the design, safety and reliable service - core values that Genie still upholds to this day.
          </p>
          <p className="mb-4 text-gray-700">
            In 1958, Genie engineers brought about the innovation of the first direct-drive screw opener. Further design refinements resulted in the offering of a split rail, which opened opportunities to mass retailers for the first time in the mid-1970s. Consumer appeal for Genie products grew alongside the rapidly developing do-it-yourself market. In 1983, the company entered the home and shop vacuum market, and in 1985, it changed its name to Genie Home Products.
          </p>

          <p className="mb-4 text-gray-700">
            By the time Overhead Door Corporation purchased the company in 1994, the Genie name had become a symbol of trust and reliability for millions of customers around the world who sought out the brand from professional dealers, home centers, hardware stores, and wholesale clubs. Its continuing focus on product quality, innovation and service remain the hallmark of the Genie legacy.  
          </p>

          <p className="mb-4 text-gray-700">
            Today, Genie manufactures remote-controlled garage door opening systems and accessories for multiple distribution channels. The openers include advanced features such as a 140 volt DC motor, Intellicode remote access security system that automatically changes the security code to one of the billions of combinations each time the transmitter is activated, as well as the Safe-T-Beam infrared system that senses objects in the door's path to prevent entrapment.  
          </p>

          <p className="mb-4 text-gray-700">
            Genie's customer support of homeowners, along with dealers and retailers, is the industry best, and is one of the main reasons why Genie is so well recognized in the homeowner market.  
          </p>
        </div>


        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1st Card */}
          <Card className="bg-white border-l-4 border-red-600 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                47+ Years of Expert Service
              </h3>
              <p className="mb-3">
                Over <strong>47 years</strong> of experience in garage door repair and troubleshooting.  
                We are a garage door repair company you can trust to repair, fix, or replace your 
                garage door, springs, or opener. <span className="text-red-600 font-semibold">
                Call us - we offer 24-hour emergency service.</span>
              </p>
              <p className="text-sm text-gray-600">
                We are recognized by the  
                <strong> SOUTHERN CALIFORNIA GARAGE DOOR NETWORK ASSOCIATION</strong> as one of the best 
                garage door repair companies serving Los Angeles, Orange County and San Fernando Valley.
              </p>
            </CardContent>
          </Card>

          {/* 2nd Card */}
          <Card className="bg-white border-l-4 border-blue-600 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Our Specialization
              </h3>
              <p className="mb-2">
                Garage door <strong>sales, installation, repair</strong> and <strong>service</strong> {' '}
                in your area is the <em>only</em> work we do-and it's always performed professionally.
              </p>
              <p className="text-sm text-gray-600">
                Joseph specializes in the maintenance, installation, and 
                replacement of <strong>all types</strong> of garage doors openers and garage door spring replacements. We deliver top-of-the-line 
                parts-fast, friendly, and on time.
              </p>
            </CardContent>
          </Card>

          {/* 3rd Card */}
          <Card className="bg-white border-l-4 border-green-600 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                New Steel Sectional Roll-Up Doors
              </h3>
              <p className="text-sm text-gray-600">
                (16×7 two-car garage, white/almond/brown, standard hardware, upgraded to 2 springs &  
                ball-bearing wheels, your choice of long or short panel) — only  
                <strong className="text-green-600"> $1535.00 installed</strong>.
              </p>
              
            </CardContent>
          </Card>

          {/* 4th Card */}
          <Card className="bg-white border-l-4 border-purple-600 shadow-lg flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                New Genie 2025 Model Garage Door Openers
              </h3>
              {/* Model list */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs text-gray-700 mb-6">
                {[
                  "Model 4162","Model 4062",
"Model 4063",
"Model 4142",
"Model 4042",
"Model 4043",
"Model 3142",
"Model 3042",
"Model 3122",
                  "Model 3022",
                  "Model 7155",
                  "Model 7055",
                  "Model 7135",
                  "Model 7035",
                  "Model 7033",
                  "Model 3155",
                  "Model 3055",
                  "Model 3053",
                  "Model 3135",
                  "Model 3035",
                  "Model 3033",
                  "Model 2155",
                  "Model 2055",
                  "Model 2053",
                  "Model 2135",
                  "Model 2035",
                  "Model 2033",
                  "Model 1155",
                  "Model 1055",
                  "Model 1135",
                  "Model 1035",
                ].map((model, idx) => (
                  <span key={idx} className="block">
                    {model}
                  </span>
                ))}
              </div>

              {/* call-to-action button pushed to bottom */}
              <div className="mt-auto">
                <a
                  href="tel:3232705387"
                  className="
                    flex items-center justify-center
                    w-full px-4 py-3
                    bg-purple-600 text-white font-semibold
                    rounded-full shadow
                    hover:bg-purple-700 transition
                  "
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 323-270-5387
                </a>
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  );
}
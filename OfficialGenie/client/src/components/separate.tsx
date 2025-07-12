// src/components/separate.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import GenieLogo from "@/assets/images/GenieLogo.png";

const Separate: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
              {/* Broken Springs Explanation */}
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Broken Garage Door Springs</h2>
          
          <p className="mb-4 text-gray-700">
            Garage door springs and torsion springs for sectional roll-up doors can pose a serious  
            safety risk if you try to replace them yourself after one breaks. A broken or shattered  
            spring can send sharp shrapnel flying in any direction—especially if it lacks a safety  
            cable—putting anyone inside the garage at risk of injury or death.
          </p>
          <p className="mb-4 text-gray-700">
            Modern roll-up sectional doors pose little risk when a torsion spring fails. These springs  
            are mounted over a torsion tube shaft that both lifts the door and retains broken pieces—  
            preventing them from flying around the garage.
          </p>
          <p className="mb-4 text-gray-700">
            In contrast, flip-up (one-piece) doors with old-style springs can send ballistic chunks  
            of steel flying upon failure. Newer springs incorporate a core rod inside the coil as a  
            built-in safety feature—retaining broken fragments. <span className="font-semibold">
            If your springs lack the proper safety cable or core rod, call us to replace them today.</span>
          </p>
          <p className="text-gray-700">
            Your best bet is to have your garage door springs professionally replaced. We’ll adjust  
            your door, service the opener, and ensure the job is done safely and correctly—at a cost  
            that’s affordable and worth the peace of mind.
          </p>
        </div>
        {/* Pricing & Specials */}
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-500">Sale Prices & Special Offers</h2>
         

          <Card className="bg-white shadow-lg rounded-xl border-0">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left: Price List */}
                <div className="flex-1">
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>
                      New Genie ½ HP belt drive with 2 transmitters & battery backup:{' '}
                      <strong>$660.00</strong>
                    </li>
                    <li>
                      New Genie 1¼ HP belt drive with 2 transmitters & battery backup:{' '}
                      <strong>$770.00</strong>
                    </li>
                    <li>
                      Chamberlain ½ HP chain drive with 2 transmitters & battery backup:{' '}
                      <strong>$740.00</strong>
                    </li>
                    <li>
                      Chamberlain ½ HP belt drive with 2 transmitters & battery backup:{' '}
                      <strong>$740.00</strong>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Prices include tax & installation. With 47 years of experience, call us today for all your
                    garage door needs.
                  </p>
                </div>

                {/* Right: Big Logo */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <img
                    src={GenieLogo}
                    alt="Genie Logo"
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};

export default Separate;

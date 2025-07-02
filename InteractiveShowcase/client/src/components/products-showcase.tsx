import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, X } from 'lucide-react';

import {
  Battery,
  Volume2,
  Wifi,
  Shield,
  Car,
  Smartphone,
  Zap,
  CheckCircle,
} from 'lucide-react';

// Brand and model images
import genie750 from '../assets/image/Genie.png';
import genieConnect from '../assets/image/genieConnect.png';
import genieScrew from '../assets/image/genieScrew.png';
import chamberlainChain from '../assets/image/chamberlain chain drive.png';
import chamberlainBelt from '../assets/image/chamberlainBelt.png';
import chamberlainQuiet from '../assets/image/chamberlain belt drive.png';
import liftmasterView from '../assets/image/liftmasterView.png';
import liftmasterChain from '../assets/image/liftmasterChain.png';

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  note?: string;
  image: string;
  description?: string;
  features: string[];
}


const genieProducts: Product[] = [
  {
    id: 'g750',
    title: '2025 Belt Drive Genie 750 1-1/4 HP Opener',
    subtitle: 'with Battery Backup (Model 7055-TKV)',
    price: '$770.00',
    note: 'Installed (tax & labor included)',
    image: genie750,
    description: `The Belt Drive 750 belt drive garage door opener is an ultra-quiet garage door opener with a steel-reinforced belt, making it the ideal choice for homeowners where sound could be an issue. This garage door opener has a powerful DC motor. This Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. This transition from home power to running on the battery happens instantly when the main power is out. Like all Genie garage door openers, the StealthDrive 750 comes equipped with Intellicode rolling code technology that prevents unauthorized persons from opening your garage door. The Genie garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening.`,
    features: [
      "1¼ HPc DC motor lifts doors up to 7' & 500 lbs",
      'Up to 50-cycle battery backup',
      'Intellicode rolling-code security',
      'HomeLink + Car2U built-in',
      'Safe-T-Beam infrared sensors',
    ],
  },
  {
    id: 'gc',
    title: 'Belt Drive Connect Model 7155-TKV',
    subtitle: 'Smartphone-Controlled & Battery Backup',
    price: '$840.00',
    note: 'Installed (tax & labor included)',
    image: genieConnect,
    description: `The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home, while app alerts keep you in control and your garage secure. The Genie Aladdin Connect smartphone app is free and allows you to set up virtual keys to individual users through their own app, and is compatible with Alexa, and Google Assistant. The Belt Drive Connect smart garage door opener has a powerful DC motor with Genie Sense technology standard. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. The battery backup will power the garage door opener for up to 50 cycles when the main power is out. The Belt Drive Connect includes many accessories for safety and convenience. Included are two pre-programmed 3-button garage door opener remotes, a wireless keypad and a multi-function wall console that provides you with a light control button and a vacation lock. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This Genie garage door opener is packed full of features that allow you to open, close and monitor your garage door safely. For use on residential sectional garage doors only.`,
    features: [
      '1¼ HP Genie Sense DC motor',
      'Aladdin Connect Wi-Fi & voice control',
      '50-cycle battery backup',
      '2 remotes, keypad & console',
      'Safe-T-Beam infrared sensors',
    ],
  },
  {
    id: 'gs',
    title: 'Signature Series 2 HP Premium Screw Drive',
    subtitle: 'Wi-Fi Enabled & Battery Backup',
    price: '$915.00',
    note: 'Installed (tax & labor included)',
    image: genieScrew,
    description: `The Signature Series premium screw drive smart garage door opener has an ultra-quiet 2 HPc DC motor that provides the ultimate combination of power and speed. The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home. The Genie Aladdin Connect smartphone app is free and allows you to set up individual users through their own app and set up virtual keys to operate your garage door opener. It also has a 140-Volt DC motor paired with a maintenance-free direct screw drive system that increases strength, power and provides unmatched durability, making it the ideal choice to open the heaviest garage doors. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. You will also enjoy the added conveniences of 2 pre-programmed 3 button remotes and a wall control panel with an independent light button and vacation lock for added security. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This premium screw drive garage door opener is made with an enclosed rail design for safety and many years of reliable operation.`,
    features: [
      '2 HPc DC motor & screw drive',
      'Aladdin Connect smartphone control',
      '50-cycle battery backup',
      '2 remotes & vacation-lock console',
      'Safe-T-Beam infrared sensors',
    ],
  },
];

const chamberlainProducts: Product[] = [
  {
    id: 'cc',
    title: '½ HP Smart Chain Drive (C2212T)',
    subtitle: 'with Battery Backup',
    price: '$755.00',
    note: 'Installed w/ 2 remotes',
    image: chamberlainChain,
    description: `Chamberlain is one of the most trusted brand of garage door openers, designed with the safety of your home and family in mind. For the 70% of homeowners who use their garage door as the main entry to their home, a power outage can become not only an inconvenience but a major safety and security issue. The C2212T comes with integrated battery backup to allow you to safely get in and out of your garage even when the power is out, and integrated myQ technology lets you control, secure and monitor your garage from the myQ app – anytime, from anywhere.`,
    features: [
      'Heavy-duty chain drive',
      'myQ smartphone control',
      'Amazon Key delivery',
      'Whisper-quiet motor & soft start/stop',
      'Integrated battery backup',
    ],
  },
  {
    id: 'cb',
    title: '½ HP Smart Belt Drive (B2211T)',
    subtitle: 'with Battery Backup',
    price: '$740.00',
    note: 'Installed w/ 2 remotes',
    image: chamberlainBelt,
    description: `Chamberlain is the most trusted brand of garage door openers, designed with the safety of your home and family in mind. For the 70% of homeowners who use their garage door as the main entry to their home, a power outage can become not only an inconvenience but a major safety and security issue. The B2211T comes with integrated battery backup to allow you to safely get in and out of your garage even when the power is out and the ultra-quiet operation ensures for comfortable living spaces near the garage. Additionally, integrated myQ technology lets you control, secure and monitor your garage from the myQ app – anytime, from anywhere.`,
    features: [
      'Ultra-quiet belt drive',
      'myQ smartphone monitoring',
      'Amazon Key delivery',
      'Integrated battery backup',
      '6-year motor & 5-year belt warranty',
    ],
  },
  {
    id: 'cq',
    title: '¾ HP Smart Belt Drive (B4613T)',
    subtitle: 'LED Lighting & Battery Backup',
    price: '$855.00',
    note: 'Installed w/ 2 remotes',
    image: chamberlainQuiet,
    description: `The garage is a place for all your home’s storage. It’s where you keep your tools, sports equipment, toys, and it’s a place where you keep some of your most expensive possessions such as your car. Unleash your garage’s full potential with the B4613T Chamberlain Garage Door Opener powered by myQ.`,
    features: [
      '1,000-lumen LED lighting',
      'BILT 3D setup',
      'Whisper-quiet belt drive',
      'myQ app integration',
      'Integrated battery backup',
    ],
  },
];

const liftmasterProducts: Product[] = [
  {
    id: 'lv',
    title: '87504-267 Secure View™',
    subtitle: 'Camera, LED Lighting & Battery Backup',
    price: 'Contact for price',
    note: 'Dealer installed',
    image: liftmasterView,
    description: `The LiftMaster 87504-267 is a premium smart garage door opener that seamlessly integrates a built-in camera with two-way audio into the myQ® app, allowing homeowners to securely monitor and communicate with visitors in real time from anywhere. Its 360° LED light ring delivers 2,000 lumens to uniformly illuminate the entire garage, while the included battery backup ensures uninterrupted access during power outages. An ultra-quiet DC motor and steel-reinforced belt drive keep noise to a minimum—ideal for living spaces adjoining the garage—while Amazon Key™ compatibility enables secure, in-garage deliveries you can watch unfold live. Finally, myQ Diagnostics provides proactive health reports and instant error alerts through the app, empowering users to troubleshoot issues early and enlist professional service when needed. Together, these features deliver unmatched convenience, security, and peace of mind for modern homeowners.`,
    features: [
      'Integrated camera & audio',
      '360° LED lighting',
      'Battery backup included',
      'Amazon Key & myQ Diagnostics',
      'Lifetime motor & belt warranties',
    ],
  },
  {
    id: 'lc',
    title: '87802 Chain Drive Smart Opener',
    subtitle: 'LED Lighting & Battery Backup',
    price: 'Contact for price',
    note: 'Dealer installed',
    image: liftmasterChain,
    description: `The LiftMaster 87802 is a robust, smart chain-drive opener engineered to lift the heaviest doors with ease while delivering best-in-class convenience and security. Its Corner-to-Corner Lighting™ LED ring casts 2,000 lumens of bright, long-lasting illumination across every inch of your garage, and integrated battery backup guarantees reliable access even during power outages. Through the myQ® app, you can remotely monitor and control door activity, receive proactive Health Reports and instant error alerts via myQ Diagnostics, and grant secure, in-garage Amazon Key™ deliveries in real time. Backed by a lifetime motor warranty, five-year parts and chain warranties, and a one-year accessory warranty, this opener offers homeowners durable performance, total peace of mind, and seamless integration into today’s connected lifestyle.`,
    features: [
      'Heavy-duty chain drive',
      '360° LED corner-to-corner lighting',
      'Amazon Key delivery',
      'myQ Diagnostics',
      'Integrated battery backup',
    ],
  },
];


const allGroups = [
  { title: 'Genie Models', items: genieProducts },
  { title: 'Chamberlain Models', items: chamberlainProducts },
  { title: 'LiftMaster Models', items: liftmasterProducts },
];

const getFeatureIcon = (feature: string) => {
  if (/battery/i.test(feature)) return Battery;
  if (/quiet/i.test(feature)) return Volume2;
  if (/wi[-]?fi|smartphone|aladdin/i.test(feature)) return Wifi;
  if (/security|intellicode/i.test(feature)) return Shield;
  if (/homeLink|car2u/i.test(feature)) return Car;
  if (/myQ|aladdin/i.test(feature)) return Smartphone;
  if (/hp|motor/i.test(feature)) return Zap;
  return CheckCircle;
};

const getBadgeInfo = (product: Product) => {
  if (product.price.startsWith('$7') || product.price.startsWith('$8')) {
    return { label: 'Best Value', color: 'bg-green-500' };
  }
  if (product.subtitle?.toLowerCase().includes('smartphone')) {
    return { label: 'Smart Home', color: 'bg-blue-500' };
  }
  return { label: 'Popular', color: 'bg-orange-500' };
};


export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {allGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {group.items.map((product, idx) => {
                    const badge = getBadgeInfo(product);
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -50 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        layout
                      >
                        <Card className="product-card bg-white rounded-2xl shadow-xl overflow-hidden group">
                          <div className="relative h-64 overflow-hidden">
                            <div
                              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                              style={{ backgroundImage: `url(${product.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <Badge
                              className={`absolute top-4 left-4 ${badge.color} text-white animate-pulse`}
                            >
                              {badge.label}
                            </Badge>
                            {product.note && (
                              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                {product.note}
                              </div>
                            )}
                          </div>

                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {product.title}
                            </h3>

                            <div className="space-y-2 mb-6">
                              {product.features.map((feat, fidx) => {
                                const Icon = getFeatureIcon(feat);
                                return (
                                  <motion.div
                                    key={fidx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: fidx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center text-sm"
                                  >
                                    <Icon className="w-4 h-4 text-green-500 mr-2" />
                                    <span className="truncate">{feat}</span>
                                  </motion.div>
                                );
                              })}
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <span className="text-3xl font-bold text-orange-500">
                                  {product.price}
                                </span>
                                <span className="text-gray-500 text-sm"> installed</span>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <Button
                                asChild
                                className="w-full bg-orange-500 hover:bg-orange-600 group"
                              >
                                <a
                                  href="tel:323-270-5387"
                                  className="flex items-center justify-center"
                                >
                                  <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                                  Call to Order: 323-270-5387
                                </a>
                              </Button>

                              <Button
                                variant="outline"
                                onClick={() => setSelectedProduct(product)}
                                className="w-full"
                              >
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-xl max-w-lg w-full mx-4 p-6 max-h-[90vh] overflow-y-auto"
            >
              {/* close “X” in top-right */}
              <X
                onClick={() => setSelectedProduct(null)}
                className="w-6 h-6 text-gray-500 hover:text-gray-800 cursor-pointer absolute top-4 right-4"
              />

              <h3 className="text-2xl font-bold mb-4">
                {selectedProduct.title}
              </h3>
              <p className="text-gray-700 mb-6 whitespace-pre-line">
                {selectedProduct.description}
              </p>
              <div className="text-right">
                <Button onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
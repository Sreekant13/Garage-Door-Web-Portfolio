import React, { useState, useEffect } from 'react';
import {
  Battery,
  Smartphone,
  ShieldCheck,
  Zap,
  Wifi,
  Lock,
  Key,
  Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';

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
      'HomeLink + Car2U built‑in',
      'Safe‑T‑Beam infrared sensors',
    ],
  },
  {
    id: 'gc',
    title: 'Belt Drive Connect Model 7155-TKV',
    subtitle: 'Smartphone‑Controlled & Battery Backup',
    price: '$840.00',
    note: 'Installed (tax & labor included)',
    image: genieConnect,
    description: `The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home, while app alerts keep you in control and your garage secure. The Genie Aladdin Connect smartphone app is free and allows you to set up virtual keys to individual users through their own app, and is compatible with Alexa, and Google Assistant. The Belt Drive Connect smart garage door opener has a powerful DC motor with Genie Sense technology standard. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. The battery backup will power the garage door opener for up to 50 cycles when the main power is out. The Belt Drive Connect includes many accessories for safety and convenience. Included are two pre-programmed 3-button garage door opener remotes, a wireless keypad and a multi-function wall console that provides you with a light control button and a vacation lock. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This Genie garage door opener is packed full of features that allow you to open, close and monitor your garage door safely. For use on residential sectional garage doors only.`,
    features: [
      '1¼ HP Genie Sense DC motor',
      'Aladdin Connect Wi‑Fi & voice control',
      '50-cycle battery backup',
      '2 remotes, keypad & console',
      'Safe‑T‑Beam infrared sensors',
    ],
  },
  {
    id: 'gs',
    title: 'Signature Series 2 HP Premium Screw Drive',
    subtitle: 'Wi‑Fi Enabled & Battery Backup',
    price: '$915.00',
    note: 'Installed (tax & labor included)',
    image: genieScrew,
    description: `The Signature Series premium screw drive smart garage door opener has an ultra-quiet 2 HPc DC motor that provides the ultimate combination of power and speed. The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home. The Genie Aladdin Connect smartphone app is free and allows you to set up individual users through their own app and set up virtual keys to operate your garage door opener. It also has a 140-Volt DC motor paired with a maintenance-free direct screw drive system that increases strength, power and provides unmatched durability, making it the ideal choice to open the heaviest garage doors. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. You will also enjoy the added conveniences of 2 pre-programmed 3 button remotes and a wall control panel with an independent light button and vacation lock for added security. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This premium screw drive garage door opener is made with an enclosed rail design for safety and many years of reliable operation.`,
    features: [
      '2 HPc DC motor & screw drive',
      'Aladdin Connect smartphone control',
      '50-cycle battery backup',
      '2 remotes & vacation-lock console',
      'Safe‑T‑Beam infrared sensors',
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
    description: `Chamberlain is one of the most trusted brand of garage door openers, designed with the safety of your home and family in mind. For the 70% of homeowners who use their garage door as the main entry to their home, a power outage can become not only an inconvenience but a major safety and security issue. The C2212T comes with integrated battery backup to allow you to safely get in and out of your garage even when the power is out, and integrated myQ technology lets you control, secure and monitor your garage from the myQ app - anytime, from anywhere.`,
    features: [
      'Heavy-duty chain drive',
      'myQ smartphone control',
      'Amazon Key delivery',
      'Whisper‑quiet motor & soft start/stop',
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
    description: `Chamberlain is the most trusted brand of garage door openers, designed with the safety of your home and family in mind. For the 70% of homeowners who use their garage door as the main entry to their home, a power outage can become not only an inconvenience but a major safety and security issue. The B2211T comes with integrated battery backup to allow you to safely get in and out of your garage even when the power is out and the ultra-quiet operation ensures for comfortable living spaces near the garage. Additionally, integrated myQ technology lets you control, secure and monitor your garage from the myQ app - anytime, from anywhere. `,
    features: [
      'Ultra‑quiet belt drive',
      'myQ smartphone monitoring',
      'Amazon Key delivery',
      'Integrated battery backup',
      '6‑year motor & 5‑year belt warranty',
    ],
  },
  {
    id: 'cq',
    title: '¾ HP Smart Belt Drive (B4613T)',
    subtitle: 'LED Lighting & Battery Backup',
    price: '$855.00',
    note: 'Installed w/ 2 remotes',
    image: chamberlainQuiet,
    description: `The garage is a place for all your home’s storage. It’s where you keep your tools, sports equipment, toys, and it’s a place where you keep some of your most expensive positions are stored such as your car. Unleash your garage’s full potential with the B4613T Chamberlain Garage Door Opener powered by myQ.`,
    features: [
      '1,000‑lumen LED lighting',
      'BILT 3D setup',
      'Whisper‑quiet belt drive',
      'myQ app integration',
      'Integrated battery backup',
    ],
  },
];

const liftmasterProducts: Product[] = [
  {
    id: 'lv',
    title: '87504-267 Secure View™ Belt Drive',
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
      'Heavy‑duty chain drive',
      '360° LED corner-to-corner lighting',
      'Amazon Key delivery',
      'myQ Diagnostics',
      'Integrated battery backup',
    ],
  },
];

// Pastel hex codes for backgrounds


// Dark background swatches
const bgColors = ['#1f2937','#111827','#374151','#1e3a8a','#4b5563'];

type CardProps = { product: Product; bgColor: string };
function Card({ product, bgColor }: CardProps) {
  // map keywords to varied icons
  const iconFor = (feat: string) => {
    if (/battery/i.test(feat)) return <Battery className="inline-block mr-2 text-yellow-400" size={16}/>;
    if (/smartphone/i.test(feat)) return <Smartphone className="inline-block mr-2 text-green-400" size={16}/>;
    if (/wi[-]?fi|agconnect|myq/i.test(feat)) return <Wifi className="inline-block mr-2 text-cyan-400" size={16}/>;
    if (/security|intellicode|rolling-code|encryption/i.test(feat)) return <Lock className="inline-block mr-2 text-red-400" size={16}/>;
    if (/Chain Drive|belt drive|screw drive/i.test(feat)) return <Zap className="inline-block mr-2 text-orange-400" size={16}/>;
    if (/HomeLink|Car2U|Amazon Key|key/i.test(feat)) return <Key className="inline-block mr-2 text-indigo-400" size={16}/>;
    // fallback: wrench for maintenance or other features
    return <Wrench className="inline-block mr-2 text-blue-400" size={16}/>;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{ backgroundColor: bgColor }}
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col h-full transition-shadow duration-300"
    >
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-6 rounded-lg" />
      <h3 className="text-2xl font-extrabold text-white mb-2">{product.title}</h3>
      {product.subtitle && <p className="text-sm text-gray-300 mb-4 italic">{product.subtitle}</p>}
      {/* {product.description && <p className="text-gray-200 mb-4 flex-grow leading-relaxed">{product.description}</p>} */}
      {product.description && (
        <div className="max-h-32 overflow-y-auto mb-4 pr-2">
          <p className="text-gray-200 leading-relaxed">{product.description}</p>
        </div>
      )}
      <ul className="list-none mb-6 flex-grow space-y-2">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-start text-gray-200 text-sm">
            {iconFor(f)}<span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:3232705387"
        className="mt-auto inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 rounded-lg text-center font-semibold shadow-lg transition-all duration-200"
      >
        📞 Call 323-270-5387
      </a>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const [colorIdx, setColorIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setColorIdx(i => (i+1) % bgColors.length), 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    
    // <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-4">
    <section
      id="products"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 
                 text-white py-16 px-4 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Genie */}
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-center">Genie Models</h2>
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {genieProducts.map((p,i)=>(
              <Card key={p.id} product={p} bgColor={bgColors[(colorIdx+i)%bgColors.length]} />
            ))}
          </div>
        </div>
        {/* Chamberlain */}
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-center">Chamberlain Models</h2>
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {chamberlainProducts.map((p,i)=>(
              <Card key={p.id} product={p} bgColor={bgColors[(colorIdx+i)%bgColors.length]} />
            ))}
          </div>
        </div>
        {/* LiftMaster */}
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-center">LiftMaster Models</h2>
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {liftmasterProducts.map((p,i)=>(
              <Card key={p.id} product={p} bgColor={bgColors[(colorIdx+i)%bgColors.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

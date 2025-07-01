// src/components/OlderModels.tsx
import { motion } from "framer-motion";

const generalModels = [
  "Alliance", "Blue Max", "Excelerator", "Genie Pro", "Hercules", "Intellicode",
  "Legacy", "Overhead Door", "Pro Max", "Signature Series", "Stealth", "Chamberlain",
  "Craftsman", "Estate Series", "Formula I", "Sears", "Security +", "Whisper Drive",
  "Vemco", "Allister", "All-O-Matic", "Allstar", "Challenger", "Pulsar", "Delta 3",
  "MegaCode", "Moore-O-Matic", "Crusader", "Chief", "Sioux", "Crusader XL",
  "Crusader 200ss", "Crusader 202", "Crusader 202ss", "Crusader 2000",
  "Crusader 2002ss", "GG1950", "1810", "GS900", "920", "940", "975",
  "GS810", "810A", "815", "840", "GS210", "250", "CHAIN DRIVE", "SP99", "SP129",
  "SP229", "CH125", "130", "LD100", "500", "100A", "550A", "LAD125", "555",
  "CM6000", "6000A", "CM60", "70", "80", "60S", "70S", "80S", "PMX60", "70/80",
  "SCREW DRIVE", "GS980", "9800", "880", "8800", "GS820", "8200", "720", "850",
  "800", "PRO82", "98", "88", "90", "PRO83", "93", "PRO88S", "98S", "CM7500",
  "8500", "7500S", "8500S"
];


const oldGenieModels = [
  "Genie 1950", "Genie 1810", "GS900", "Genie 920", "Genie 940", "Genie 975",
  "GS810", "Genie 810", "Genie 815", "Genie 840", "GS210", "Genie 250",
  "CHAIN DRIVE", "SP99", "SP129", "SP229", "CH125", "Genie 130", "LD100",
  "Genie 500", "Genie 100A", "Genie 550A", "LAD125", "Genie 555", "CM6000",
  "6000A", "CM60", "Genie 70", "Genie 80", "Genie 60S", "Genie 70S", "Genie 80S",
  "PMX60", "SCREW DRIVE", "GS980", "Genie 9800", "Genie 880", "Genie 8800",
  "GS820", "Genie 8200", "Genie 720", "Genie 850", "Genie 800",
  "PRO82", "Genie 98", "Genie 88", "Genie 90", "PRO83", "Genie 93",
  "PRO88S", "Genie 98S", "CM7500", "Genie 8500", "Genie 7500S", "Genie 8500S",
  "SD Series", "Genie 9500", "Genie 9000", "Genie 8000", "Genie 2500",
  "Genie 5000", "GXL", "GX", "G Series", "Genie 10000"
];

const beltDriveModels = [
  "GPS1200-IC", "GPS700-IC",
  "PRO706-BC", "PRO0800-BC",
  "PRO1000-BC", "PRO1200-BC"
];

const exceleratorModels = [
  "PRO99-2IC", "CMD9900-IC", "ISD990-2", "ISD1000"
];

const screwDriveModels = [
  "PictureGenie 400", "Genie 401", "Genie 404", "Genie 450", "Genie 459",
  "Genie 8600", "Genie PRO", "GS980", "9800", "880", "8800", "GS820", "8200",
  "7200", "850", "800", "PRO82", "Genie 98", "Genie 88", "Genie 90",
  "PRO83/93", "PRO88S/98S", "CM7500", "CM8500", "CM7500S", "CM8500S",
  "G-CL SERIES", "IS SERIES", "CSD 0706", "CSD 0800", "ALC 60", "ALC 70",
  "ALC 80", "75-IC", "85-IC", "RCD 225", "RCD 250", "RCD 500", "RCD 550",
  "CM7600-IC", "CM8600-IC", "PRO95", "404", "450", "409", "459", "419A",
  "420", "414", "419", "SD 9500", "SD 9000", "SD 8000", "SD 2500", "SD 5000",
  "GXL", "GX", "G Series", "10000"
];

const liftmasterModels = [
  "3800", "3850", "3840", "3595", "3585", "3280", "3275",
  "3265", "3245", "3240", "3255", "3130", "1355", "1345"
];

const chamberlainModels = [
  "WD822ks", "WD822kls", "DD610s", "DD612s", "DD612kls",
  "PD420", "PD420-2", "PD460-2k", "PD460-2", "PD422D", "PD432-D"
];

export default function OlderModels() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const renderBadges = (arr: string[]) =>
    arr.map((m) => (
      <span
        key={m}
        className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm"
      >
        {m}
      </span>
    ));

  return (
    // <section id="older-models" className="py-20 bg-gray-50">
    <section
      id="vintage-models"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center mb-4"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          🚪 Older Models We Service
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          From classic belt drives to vintage openers, we keep your garage moving - no matter the era!
        </motion.p>

        <div className="space-y-12">
          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.3 }}>
            <h3 className="text-xl font-semibold mb-4">General & Legacy Models</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(generalModels)}</div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.4 }}>
            <h3 className="text-xl font-semibold mb-4">Vintage Genie Models</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(oldGenieModels)}</div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5 }}>
            <h3 className="text-xl font-semibold mb-4">Genie Belt Drive</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(beltDriveModels)}</div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.6 }}>
            <h3 className="text-xl font-semibold mb-4">Genie Excelerator</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(exceleratorModels)}</div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.7 }}>
            <h3 className="text-xl font-semibold mb-4">Older Genie Screw Drive Openers</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(screwDriveModels)}</div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.8 }}>
            <h3 className="text-xl font-semibold mb-4">LiftMaster Models</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(liftmasterModels)}</div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.9 }}>
            <h3 className="text-xl font-semibold mb-4">Chamberlain Models</h3>
            <div className="flex flex-wrap gap-2">{renderBadges(chamberlainModels)}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
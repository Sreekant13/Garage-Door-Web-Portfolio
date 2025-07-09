import React from 'react';

const allBrands = [
  'Alliance', 'Blue Max', 'CodeDodger', 'Excelerator', 'Genie Pro', 'Hercules',
  'Intellicode', 'Legacy', 'Lift-A-Door Medallion', 'Norelco', 'OverDrive',
  'Overhead Door', 'Phantom', 'Pro Max', 'Python', 'Signature', 'Stealth',
  'Access Master', 'Billion Code', 'Chamberlain', 'Craftsman', 'Estate Series',
  'Formula I', 'Garage Master', 'Master Mechanic', 'Power Drive', 'Sears',
  'Security +', 'Whisper Drive', 'Lightmaker', 'Quiet Glide Secure Code',
  'U-Install', 'Vemco', 'Whistler', 'Allister', 'All-O-Matic', 'Allstar',
  'Challenger GTO', 'MVP', 'Pulsar', 'AccessPro', 'AM/II', 'Delta 3 MegaCode',
  'Moore-O-Matic', 'Over Head Door', 'Crusader', 'Chief', 'Sioux',
  'Moore-o-matic', 'Crusader 200', 'Crusader 200ss', 'Crusader 202',
  'Crusader 202ss', 'Crusader 2000', 'Crusader 2002ss', 'Crusader 800',
];

const genieVintage = [
  'Genie 1950','Genie 1810','GS900','Genie 920','Genie 940','Genie 975',
  'GS810','Genie 810','Genie 815','Genie 840','GS210','Genie 250',
  'CHAIN DRIVE','SP99','SP129','SP229','CH125','Genie 130','LD100',
  'Genie 500','Genie 100A','Genie 550A','LAD125','Genie 555','CM6000',
  '6000A','CM60','Genie 70','Genie 80','Genie 60S','Genie 70S','Genie 80S',
  'PMX60','Genie 70/80',
];
const genieChain = [
  'SP99','SP129','SP229','CH125','130','LD100','500','100A','550A',
  'LAD125','555','CM6000','6000A','CM60','70','80','60S','70S','80S',
  'PMX60','70/80',
];
const genieScrew = [
  'Genie 9800','Genie 880','Genie 8800','GS820','Genie 8200','Genie 720',
  'Genie 850','Genie 800','PRO82','Genie 98','Genie 88','Genie 90','PRO83',
  'Genie 93','PRO88S','Genie 98S','CM7500','Genie 8500','Genie 7500S',
  'Genie 8500S','SD Series','Genie 9500','Genie 9000','Genie 8000',
  'Genie 2500','Genie 5000','GXL','GX','G Series','Genie 10000',
];

const stanleyModels = [
  '5100','5105','5170','5300SD','5350','5360','5400 w/r','7000','7005','7100',
  '7105','7200','7205','7270','7400','7405','T120','T125','T130','T135','T140',
  'T145','1100','1105','1150','1155','1200','1205','1500','1505','1800','1805',
  '2000.06','2005.6','2100','2200','2205','3000.6','3005.6','3100','3105',
  '3205','3206','3220','3225','4100SD','7051(.06-.14)','7052(.06-.14)',
  '7059(.06-.14)','GT200','GT300','GT400','MT310','TT100','TT200','TT300',
  'V1000','V2000','GD350','GD355','D1000','D2000','ST100','ST200','ST300',
  'ST400','ST500','SD320','SD350','SD450','SD550','Lightmaker 7500','7505',
  '7600','7605','Lightmaker GL450','Lightmaker 6000','6005','6500','6505',
  'Lightmaker SL700','7300','7305','2500','2505','3500','3505','SB600',
];

const liftmasterModels = ['3800','3850','3840','3595','3585','3280','3275','3265','3245','3240','3255','3130','1355','1345'];

const chamberlainModels = ['WD822ks','WD822kls','DD610s','DD612s','DD612kls','PD420','PD420-2','PD460-2k','PD460-2','PD422D','PD432-D'];

const OlderModel: React.FC = () => (
  <section id="models" className="p-6 bg-gradient-to-br from-purple-900 to-pink-600">
    <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">Vintage & Legacy Garage Door Brands and Models</h1>

    <div className="space-y-8">
      {/* All Brands */}
      <div>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">All Brands</h2>
        <div className="flex flex-wrap gap-2">
          {allBrands.map((brand) => (
            <span key={brand} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Genie Models */}
      <div>
        <h1 className="text-2xl font-semibold text-green-600 mb-2">GENIE Models</h1>
        <h2 className="mt-4 font-medium text-green-500">GENIE Vintage Models</h2>
        <div className="flex flex-wrap gap-2">
          {genieVintage.map((model) => (
            <span key={model} className="px-2 py-1 bg-green-200 text-green-900 rounded text-xs">
              {model}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-medium text-green-500">GENIE Chain Drive Models</h3>
        <div className="flex flex-wrap gap-2">
          {genieChain.map((model) => (
            <span key={model} className="px-2 py-1 bg-green-200 text-green-900 rounded text-xs">
              {model}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-medium text-green-500">GENIE Screw Drive Models</h3>
        <div className="flex flex-wrap gap-2">
          {genieScrew.map((model) => (
            <span key={model} className="px-2 py-1 bg-green-200 text-green-900 rounded text-xs">
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* Stanley Vemco */}
      <div>
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Stanley Vemco Models</h2>
        <div className="flex flex-wrap gap-2">
          {stanleyModels.map((model) => (
            <span key={model} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* LiftMaster */}
      <div>
        <h2 className="text-2xl font-semibold text-red-600 mb-2">LiftMaster Models</h2>
        <div className="flex flex-wrap gap-2">
          {liftmasterModels.map((model) => (
            <span key={model} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* Chamberlain */}
      <div>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Chamberlain Models</h2>
        <div className="flex flex-wrap gap-2">
          {chamberlainModels.map((model) => (
            <span key={model} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              {model}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OlderModel;

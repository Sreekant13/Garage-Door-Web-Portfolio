// client/src/lib/data/index.ts
import searsModels from "../lib/data/searsModels.json";
import stanleyModels from "../lib/data/stanleyModels.json";
// import genieModels from "./genieModels.json";      // if you split that out too
// import springSpecs from "./springSpecs.json";

export { searsModels, stanleyModels, }; //genieModels, springSpecs };


export  const allBrands = [
    "Alliance", "Blue Max", "CodeDodger", "Excelerator", "Genie Pro", "Hercules",
    "Intellicode", "Legacy", "Lift-A-Door Medallion", "Norelco", "OverDrive",
    "Overhead Door", "Phantom", "Pro Max", "Python", "Signature", "Stealth",
    "Access Master", "Billion Code", "Chamberlain", "Craftsman", "Estate Series",
    "Formula I", "Garage Master", "Master Mechanic", "Power Drive", "Sears",
    "Security +", "Whisper Drive", "Lightmaker", "Quiet Glide Secure Code",
    "U-Install", "Vemco", "Whistler", "Allister", "All-O-Matic", "Allstar",
    "Challenger GTO", "MVP", "Pulsar", "AccessPro", "AM/II", "Delta 3 MegaCode",
    "Moore-O-Matic", "Over Head Door", "Crusader", "Chief", "Soiux",
    "Moore-o-matic", "crusader 200", "crusader 200ss", "crusader 202",
    "crusader 202ss", "crusader 2000", "crusader 2002ss", "crusader", "800",
    "GG1950", "1810", "GS900", "920", "940", "975", "GS810", "810A", "815",
    "840", "GS210", "250", "CHAIN DRIVE", "SP99", "SP129", "SP229", "CH125",
    "130", "LD100", "500", "100A", "550A", "LAD125", "555", "CM6000", "6000A",
    "CM60", "70", "80", "60S", "70S", "80S", "PMX60", "70/80", "SCREW DRIVE",
    "GS980", "9800", "880", "8800", "GS820", "8200", "720", "850", "800",
    "PRO82", "98", "88", "90", "PRO83", "93", "PRO88S", "98S", "CM7500", "8500",
    "7500S", "8500S", "SD Series", "9500", "9000", "8000", "2500", "5000",
    "GXL", "GX", "G Series", "9500", "9000", "8000", "2500", "5000", "10000",
  ];

export  const genieBrands = [
    "Genie 1950", "Genie 1810", "GS900", "Genie 920", "Genie 940", "Genie 975",
    "GS810", "Genie 810", "Genie 815", "Genie 840", "GS210", "Genie 250",
    "CHAIN DRIVE", "SP99", "SP129", "SP229", "CH125", "Genie 130", "LD100",
    "Genie 500", "Genie 100A", "Genie 550A", "LAD125", "Genie 555", "CM6000",
    "6000A", "CM60", "Genie 70", "Genie 80", "Genie 60S", "Genie 70S",
    "Genie 80S", "PMX60", "Genie 70", "Genie 80", "SCREW DRIVE", "GS980",
    "Genie 9800", "Genie 880", "Genie 8800", "GS820", "Genie 8200", "Genie 720",
    "Genie 850", "Genie 800", "PRO82", "Genie 98", "Genie 88", "Genie 90",
    "PRO83", "Genie 93", "PRO88S", "Genie 98S", "CM7500", "Genie 8500",
    "Genie 7500S", "Genie 8500S", "SD Series", "Genie 9500", "Genie 9000",
    "Genie 8000", "Genie 2500", "Genie 5000", "GXL", "GX", "G Series",
    "Genie 9500", "Genie 9000", "Genie 8000", "Genie 2500", "Genie 5000",
    "Genie 10000",
  ];

export  const stanleyVemco = [
    "Stanley 5100", "5105", "5170", "5300SD", "5350", "5360", "5400 w/r",
    "Stanley 7000", "7005", "7100", "7105", "7200", "7205", "7270", "7400",
    "7405", "Stanley T120", "T125", "T130", "T135", "T140", "T145",
    "Stanley 1100", "1105", "1150", "1155", "1200", "1205", "1500", "1505",
    "1800", "1805", "2000.06", "2005.6", "2100", "2200", "2205", "3000.6",
    "3005.6", "3100", "3105", "3205", "3206", "3220", "3225", "4100SD",
    "7051(.06-.14)", "7052(.06-.14)", "7059(.06-.14)", "Stanley GT200",
    "GT300", "GT400", "MT310", "TT100", "TT200", "TT300", "V1000", "V2000",
    "GD350", "GD355", "Stanley D1000", "D2000", "ST100", "ST200", "ST300",
    "ST400", "ST500", "SD320", "SD350", "SD450", "SD550", "Stanley Lightmaker 7500",
    "7505", "7600", "7605", "Stanley Lightmaker GL450", "Stanley Lightmaker 6000",
    "6005", "6500", "6505", "Stanley Lightmaker SL700", "Stanley 7300",
    "7305", "Stanley 2500", "2505", "3500", "3505", "SB600",
  ];

export  const liftmasterModels = [
    "3800", "3850", "3840", "3595", "3585", "3280", "3275", "3265", "3245",
    "3240", "3255", "3130", "1355", "1345",
  ];

export  const chamberlainModels = [
    "WD822ks", "WD822kls", "DD610s", "DD612s", "DD612kls", "PD420", "PD420-2",
    "PD460-2k", "PD460-2", "PD422D", "PD432-D",
  ];

export  const genieBeltDrive = [
    "GPS1200-IC – GPS700-IC",
    "PRO706-BC – PRO0800-BC",
    "PRO1000-BC – PRO1200-BC",
  ];

export  const genieExcelerator = [
    "PRO99-2IC", "CMD9900-IC", "ISD990-2", "ISD1000",
  ];

export  const genieScrewDrive = [
    "GS980", "9800", "880", "8800",
    "GS820", "8200", "7200", "850", "800",
    "PRO82", "98", "88", "90",
    "PRO83", "93",
    "PRO88S", "98S",
    "CM7500", "8500", "7500S", "8500S",
    "G-CL SERIES",
    "IS SERIES",
    "CSD 0706", "CSD 0800",
    "ALC 60", "ALC 70", "ALC 80", "ALC 75-IC", "ALC 85-IC",
    "RCD 225", "RCD 250", "RCD 500", "RCD 550",
    "CM7600-IC", "CM8600-IC", "PRO95",
    "404", "450", "409", "459", "419A", "420", "414", "419", "800",
    "8200", "8800",
    "SD SERIES",
    "9500", "9000", "8000", "2500", "5000",
    "GXL", "GX", "G SERIES",
    "9500", "9000", "2500", "5000", "10000",
  ];


export const supportedBrands = [
  { name: "LiftMaster", specialty: "Professional Grade" },
  { name: "Sears", specialty: "Craftsman" },
  { name: "Genie", specialty: "Intellicode" },
  { name: "Stanley", specialty: "Vemco" },
  { name: "Chamberlain", specialty: "MyQ Technology" },
  { name: "Linear", specialty: "Access Master" }
];

export const brandCategories = [
  {
    category: "Premium Brands",
    brands: [
      "LiftMaster Professional",
      "Chamberlain MyQ",
      "Genie Intellicode",
      "Linear Access Master",
      "Overhead Door Python"
    ]
  },
  {
    category: "Standard Brands",
    brands: [
      "Sears Craftsman",
      "Stanley Vemco",
      "Blue Max",
      "Allstar",
      "Multi-Code"
    ]
  },
  {
    category: "Legacy Brands",
    brands: [
      "Doorman",
      "Pulsar",
      "Wayne Dalton",
      "Raynor",
      "Amarr"
    ]
  }
];

export const serviceAreas = [
  "Agoura Hills, Ca. 91301",
  "Arleta, Ca. 91331",
  "Beverly Hills, Ca. 90210",
  "Burbank, Ca. 91501",
  "Canoga Park, Ca. 91303",
  "Calabasas, Ca. 91302",
  "Chatsworth, 91311",
  "Encino, Ca. 91316",
  "Granada Hills, Ca. 91344",
  "Knollwood, Ca. 91344",
  "Lake Balboa, Ca. 91406",
  "Lakeview Terrace, Ca. 91342",
  "La Tuna Canyon, Ca. 91352",
  "Mission Hills, Ca. 91345",
  "North Hills, Ca. 91343",
  "North Hollywood, Ca. 91601",
  "Northridge, Ca. 91324",
  "Pacific Palisades, Ca. 90272",
  "Pacoima, Ca. 91331",
  "Panorama City, Ca. 91402",
  "Porter Ranch, Ca. 91326",
  "Reseda, Ca. 91335",
  "San Fernando, Ca. 91340",
  "Sherman Oaks, Ca. 91403",
  "Shadow Hills, Ca. 91040",
  "Studio City, Ca. 91604",
  "Sun Valley, Ca. 91352",
  "Sylmar, Ca. 91342",
  "Tarzana, Ca. 91356",
  "Toluca Lake, Ca. 91602",
  "Toluca woods, Ca. 91601",
  "Valley Village, Ca. 91607",
  "Valley Glen, Ca. 91401",
  "Van Nuys, Ca. 91401",
  "Winnetka, Ca. 91306",
  "West Hills, Ca. 91307",
  "West Toluca Lake, Ca. 91601",
  "Woodland Hills, Ca. 91364"
];

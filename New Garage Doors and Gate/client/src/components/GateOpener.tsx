import React from 'react';

const manufacturers = [
  { name: 'LiftMaster', url: 'http://www.liftmaster.com/' },
  { name: 'Linear', url: 'http://www.linearcorp.com/' },
  { name: 'Manaras Operators', url: 'http://www.manaras.com/' },
  { name: 'Skylink Group', url: 'http://www.skylinkhome.com/' },
  { name: 'Clopay Building Products', url: 'http://www.clopaydoor.com/' },
  { name: 'Overhead Door', url: 'http://www.overheaddoor.com/' },
  { name: 'Dorene', url: 'http://www.gateopeners.com/' },
  { name: 'Miller Edge', url: 'http://www.milleredge.com/' },
  { name: 'Genie', url: 'http://www.geniecompany.com/' },
  { name: 'Martin Door Manufacturing', url: 'http://www.martindoor.com/' },
  { name: 'CHI', url: 'http://www.chiohd.com/' },
  { name: 'Delden Garage Doors', url: 'http://www.deldenmfg.com/' },
  { name: 'Chamberlain', url: 'http://www.liftmaster.com/' },
  { name: 'Controlled Access', url: 'http://www.controlledaccess.com/' },
  { name: 'DoorKing', url: 'http://www.doorking.com/' },
  { name: 'Multi Code', url: 'http://www.linearcorp.com/' },
  { name: 'Holmes', url: 'http://www.holmesgaragedoor.com/' },
];

const GateOpenerInfo: React.FC = () => (
  <section id="partners" className="bg-gradient-to-r from-green-800 to-blue-700 text-white p-6 shadow-lg ">
    <h2 className="text-3xl font-extrabold mb-4 text-center">
      WE REPAIR ALL MAKES AND MODELS OF SLIDE, SWING AND OVERHEAD ELECTRIC GATE OPENERS FOR OVER 47 YEARS
    </h2>
    <div className="flex flex-wrap justify-center">
      {manufacturers.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="m-2 px-4 py-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition font-semibold"
        >
          {name}
        </a>
      ))}
    </div>
  </section>
);

export default GateOpenerInfo;

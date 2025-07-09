// src/components/info.tsx
import React from 'react';

export default function Info() {
  return (
    <section id="info" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Community Highlights
        </h2>

        {/* Descanso Gardens */}
        <div className="space-y-2">
          <p>We are members of</p>
          <p><strong>Descanso Gardens</strong></p>
          <p><strong>1418 Descanso Dr, La Cañada Flintridge, CA 91011</strong></p>
          <p>
            <strong>
              <a
                href="https://www.descansogardens.org"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.descansogardens.org
              </a>
            </strong>
          </p>
          <p>
            <strong>
              La Cañada Flintridge’s best-known attraction is Descanso Gardens, a cultural institution and botanical garden at 1418 Descanso Dr.
            </strong>
          </p>
        </div>

        {/* JPL */}
        <div className="space-y-2">
          <p><strong>My  son interned at JPL</strong></p>
          <p><strong>JPL in La Cañada Flintridge, CA</strong></p>
          <p>
            <strong>NASA’s Jet Propulsion Laboratory</strong>
          </p>
          <p>
            <strong>
              <a
                href="https://www.jpl.nasa.gov"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.jpl.nasa.gov
              </a>
            </strong>
            ,
          </p>
          <p>
            <strong>
              One of NASA’s 11 major centers is located on 177 acres in La Cañada Flintridge and is open for free, pre-scheduled tours on Monday and Wednesday afternoons. So space aficionados, as well as those with an interest in rocketry and science, in general, need not travel to Florida or Houston to get a glimpse into the world of the National Aeronautics and Space Administration.
            </strong>
          </p>
          <p>
            <strong>
              “You can schedule a tour by visiting www.jpl.nasa.gov, clicking on ‘public events’ and then on ‘tours’,” explained Kim Lievense, manager of the Public Services Office for the Jet Propulsion Laboratory (JPL).
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

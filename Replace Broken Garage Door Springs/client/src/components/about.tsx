// src/pages/about.tsx
import React from "react";

type AboutProps = {
  customTitle?: string;
};

const phoneNumbers = [
  "818-351-3125",
  "323-225-2898",
  "562-506-1365",
  "310-734-0910",
  "714-782-9570",
  "626-251-2180",
];

const externalLinks = [
  "https://www.geniecompany.com",
  "https://www.chamberlain.com",
  "https://www.liftmaster.com",
  "https://www.marantecamerica.com",
];

export default function About({ customTitle }: AboutProps) {
  return (
    <section id="about" className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-4 space-y-12">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-green-900">
            {customTitle ?? "Valley Garage Door and Spring Repair"}
          </h1>
          <p className="text-lg leading-relaxed">
            We provide fast reliable service at affordable rates. No sale push,
            no gimmicks. We repair all makes and models of garage doors, garage
            door openers and the replacement of garage door springs. All of our
            trucks are well stocked with the most common repair parts. We also
            stock our trucks with a very large inventory of garage door springs
            unlike some of our competitors who have very little inventory and
            try to drive up your job’s cost by having to get the parts and come
            back to finish the job. If we don’t have the part we don’t charge a
            return trip fee.
          </p>
        </div>

        {/* Phone Numbers */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
            Call Us
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {phoneNumbers.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="bg-green-100 text-green-900 font-medium rounded shadow py-2 text-center"
              >
                {num}
              </a>
            ))}
          </div>
        </div>

        {/* Services Description */}
        <div className="prose max-w-none">
          <p>
            Do you have a broken garage door? Do you have a broken garage door
            spring? Do you have a broken garage door opener? Our garage door
            repair company can repair your garage door fast and affordable. Our
            garage door repairmen specialize in the repair and maintenance of
            garage doors, garage door openers, replacement of garage door
            springs and electric gates. We stock our trucks with the most
            common parts for garage doors including garage door springs for one
            piece and sectional garage doors. We’ve been serving the valley and
            surrounding areas for over 47 years. We try to perform all services
            on time and in most cases in 1 day. We will repair your broken
            garage door fast with our experienced technicians, and for less
            money than most other companies in the San Fernando Valley. We fix
            broken garage door openers, garage door springs and garage doors.
          </p>

          <p>
            Our business is family owned and operated. We believe in providing
            our customers with the best quality service and installation and
            with a smile. We sell and repair Genie garage door openers as well
            as Liftmaster garage door openers. We repair all makes and models
            of garage doors and openers including Alliance, Blue Max, CodeDodger,
            Excelerator, Genie Pro, Hercules, Intellicode, Legacy, Lift-A-Door
            Medallion, Norelco, OverDrive, Overhead Door, Mid America, Phantom,
            Pro Max, Python, Signature, Stealth, Access Master, Billion Code,
            Chamberlain, Craftsman, Estate Series, Formula I, Garage Master,
            Master Mechanic, Power Drive, Sears, Security +, Whisper Drive,
            Lightmaker, Quiet Glide Secure Code, U-Install, Vemco, Whistler,
            Allister, All-O-Matic, Allstar, Challenger GTO, MVP, Pulsar,
            AccessPro, AM/II, Delta 3 MegaCode, Moore-O-Matic, Over Head Door,
            Crusader, Chief, Sioux, Moore-o-matic, crusader 200, crusader
            200ss, crusader, Scientific, crusader 2002, crusader 2002ss,
            crusader 202, crusader 202ss, Mesa.
          </p>
        </div>

        {/* Prices */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
            Prices
          </h2>
          <div className="space-y-4">
            <p>
              Our service call is <strong>$130.00</strong> which includes a half
              hour labor; most repairs are done within a half hour. If it runs
              over that, every half hour after is <strong>$80.00</strong>. We
              work Monday – Sunday at standard rates.
            </p>
            <p>
              Our full focus is serving our customers—that’s why we are still
              in business after 47 years. We always go the Extra Mile to make
              your garage door needs perfect. We pride ourselves on the superior
              quality of our garage door repair and on providing every customer
              with unsurpassed customer service, so whether you’re a contractor,
              homeowner, or apartment owner on a budget—we do our best to help
              you. We guarantee the most professional and satisfying experience
              possible.
            </p>
            <p>
              Please keep in mind that sometimes we do run late because of
              traffic, unexpected time on a job, or an employee calling in
              sick. We appreciate your patience; once on site, if you need us
              for an extra 20 minutes or an unexpected 2 hours, we will provide
              that time as well.
            </p>
          </div>
        </div>

        {/* On-site Work */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
            On-Site Work Only
          </h2>
          <p>
            All of our work is done at your home; we take no work into our shop
            and we have no over-the-counter sales. Our shop is a warehouse for
            trucks and supplies only. If you wish to buy parts over the counter
            to DIY repair, please call around for an 8 to 5 location.
          </p>
          <p>
            Our professional staff is dedicated to making your experience a
            pleasant one. If you need same-day service, we will always try to
            accommodate. Please call as early as possible to secure your slot.
          </p>
        </div>

        {/* Repair Garage Door and Service */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-green-800 mb-2 border-l-4 border-green-600 pl-4">
            Repair Garage Door and Service
          </h2>
          <p>
            We repair, replace and fix all makes or models of garage doors, garage door openers and garage door springs, sectional garage door springs, torsion springs, all garage door spring replacement. We sell galvanized garage door springs which give longer lasting spring life, garage door cables, garage door rollers, repair garage door hinges, repair sectional hardware track and door sections. We also repair garage door operators, repair garage door transmitters, keyless entry systems, photo cells, trolleys and related accessories for garage doors. For garage door repair, please call our office at the phone numbers above.
          </p>
        </div>

        {/* Safety Warning */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-red-700 mb-2 border-l-4 border-red-500 pl-4">
            Never Attempt DIY Spring Replacement
          </h2>
          <p>
            Never attempt replacing a garage door spring unless you are experienced. This can be dangerous and requires special equipment. If you aren't convinced and want to do it yourself always have a neighbor or friend assist you for safety reasons. A garage spring when breaking is loud. If you hear a loud bang when opening or closing your garage door, it’s probably a <strong>BROKEN GARAGE DOOR SPRING</strong>. If the opener is straining to open the garage door, it may be a <strong>BROKEN SPRING</strong>. If the door cocks to one side when you try to open it, it may be a <strong>BROKEN DOOR SPRING</strong>. If you have a broken garage door spring and if your garage door opens, it places a great strain on the garage door opener and you may burn it out. Most garage door springs last between 6 to 12 years on average. Sometimes garage door springs can last up to 30 years. The more often you use your garage door the less often garage door springs brake. People that use there garages primarily for storage and open there garage doors once a month normally will have garage door springs brake every 2 to 4 years. The average two car garage door is opened 6 to 10 times per day. Garage doors and garage door openers are made to be used. Always have your garage door repaired by a professional garage door company. Garage door repairs can be inexpensive compared to a hospital bill if someone gets hurt. If you live in or around the your area call the above phone numbers for service.
          </p>
        </div>

        {/* External Resources */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
            Factory Links
          </h2>
          <ul className="list-disc list-inside text-blue-600 space-y-1">
            {externalLinks.map((href) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {href}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Broken Garage Door Springs */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-red-700 mb-2 border-l-4 border-red-500 pl-4">
            Broken Garage Door Springs
          </h2>
          <p>
            GARAGE DOOR SPRINGS for a one-piece garage door or a sectional garage door, on average, last 6 to 12 years. BROKEN GARAGE DOOR SPRINGS are caused by a variety of factors. When pouring the steel to make the wire for the springs, air bubbles may not escape, causing the spring wire to fail under pressure at a later date. When heat treating the spring wire, if it cools inconsistently, it can develop faults under pressure over time. Garage door springs older than 5 years should all be replaced—why? Because it is cheaper and more cost-effective to replace all the springs at once than to pay for a second service call shortly after the next spring breaks. Broken sectional springs take between 30 and 90 minutes to replace, depending on whether there is one spring or two and on how clean and accessible the work area is. Repair costs for broken sectional springs, including labor, range from $195.00 to $485.00. Broken one-piece springs range from $175.00 to $425.00 installed. We offer same-day service in most cases of spring repair and cover a large service area.
          </p>
          <p>
            The springs on your garage door can pose a serious safety hazard. A spring that breaks or shatters can send sharp shrapnel flying in any direction. Anyone inside the garage when that happens is at serious risk of injury or death. New garage door springs made over the last 15 years or so include internal steel rods to help prevent the spring from exploding outward or through your roof, as well as safety hooks to keep the spring secured to the hardware.
          </p>
          <p>
            Modern roll-up garage door styles - also known as sectional doors pose little risk in the event of spring breakage or shattering. These springs are installed over a shaft that rolls the door to the open position, and the shaft also acts as a retainer to prevent broken springs from going ballistic.
          </p>
          <p> <strong>
            If your old garage door springs lack these safety features, it’s best to replace them. Please call us to schedule an appointment.
          </strong>
            
          </p>
        </div>

        {/* Spring Sizes */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
            Standard Spring Sizes
          </h2>
          <p>
            <strong>One-piece garage door safety springs:</strong> Holmes,
            King, American and Apex manufacture sizes—9×28", 7×28", 5×28",
            3×28", 1×28".
          </p>
          <p>
            <strong>Residential torsion springs (steel doors):</strong> 207,
            218, 225, 234, 243.
          </p>
          <p>
            <strong>Residential torsion springs (wood doors):</strong> 207,
            218, 225, 234, 243, 250, 262, 273; lengths: 26"–42".
          </p>
        </div>

        {/* Opener Maintenance */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-green-800 mb-2 border-l-4 border-green-600 pl-4">
            Repair Garage Door Opener / Garage Door Operator
          </h2>
          <p>
            <strong>Chain drives:</strong> Garage door Chain Drive operators Need little maintenance just oil the chain drive opener with 20 or 30 weight motor oil once every 3 to 5 years depending on the location of where you live? You can also use Silicon or WD-40. Have your garage door professional service at least every 5 years. We will check your garage door for balancing, worn parts, we will also lubricate and service the garage door and opener. Most people don’t realize that garage door springs loose tension over the years and need to be readjusted. If you don’t keep your garage door well balanced it put extra stress on your garage door opener and reduces its life span.
          </p>
          <p>
            <strong>Screw drives:</strong> Screw Drive garage door operators Need very little maintenance. Screw drive garage door openers need multi purpose grease on the screw shaft every 2 to 3 years depending on location of where you live and how often you use your garage door operator. You can buy this grease at any hardware or home build store. Have your garage door professional service at least every 5 years.
          </p>
        </div>

        {/* New Opener Pricing */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
            New Opener Pricing
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              New Genie ½ HP belt drive with 2 transmitters with battery backup: <strong>$660.00</strong>
            </li>
            <li>
              New Genie 1¼ HP belt drive with 2 transmitters with battery backup: <strong>$770.00</strong>
            </li>
            <li>
              Chamberlain ½ HP chain drive with 2 transmitters with battery backup: <strong>$740.00</strong>
            </li>
            <li>
              Chamberlain ½ HP belt drive with 2 transmitters with battery backup: <strong>$740.00</strong>
            </li>
          </ul>
          <p className="mt-2">
            Prices include tax & installation. With 47 years of experience,
            call us today for all your garage door needs.
          </p>
        </div>

        {/* Choosing the Right Opener */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-green-800 mb-2 border-l-4 border-green-600 pl-4">
            Choosing the Right Garage Door Opener
          </h2>
          <p>
            How do I select the right garage door opener and brand? Before selecting an opener, you will need to determine the size and weight of your garage door. This will help to determine the size of the motor needed to lift the garage door. 1/3 HP is more than enough to lift most garage doors. If you have a heavy garage door, you should get a ½ HP. Keep in mind that for very little difference in price, the ½ HP garage door openers also give a better parts warranty. All garage door operators offer most of the same type of safety devices, features, and accessories that you want, so don’t get caught up in sales pitches. Your garage door opener is an important home appliance that will get daily use for many years to come. When making this important purchase, safety, reliability, horsepower, drive type, and quality of installation are important. We have been installing garage door openers for more than 47 years and can offer you expert advice about selecting and installing your new garage door opener.
          </p>
          <p>
            Our advice when selecting a garage door opener by brand and model: Genie makes a good screw-drive garage door opener and has for 50 years (AC motor only); don’t buy the DC-motor units—they’ve had some problems in the past. Genie chain-drive garage door openers have always stunk, in my opinion; LiftMaster makes—and always has made—a better chain-drive opener than Genie. LiftMaster also makes a good screw-drive unit as well, but I prefer the Genie ½ HP AC motor over LiftMaster screw drives. Now, for belt-drive garage door openers, I think they both make a good belt drive—you can’t go wrong either way—but if it were in my house, I would install a LiftMaster belt drive. I hope this information helps you, and I hope to earn your business; please call us for all your garage door repair or service needs as well as for your purchases of new garage door operators.
          </p>
        </div>

        {/* Drive Type Comparison */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-green-800 mb-2 border-l-4 border-green-600 pl-4">
            Belt vs. Screw vs. Chain Drive
          </h2>
          <p>
            <strong>Belt-drive Garage Door Openers:</strong> Belt drives are very quiet at first, but 5 to 10 years later they can sound much like other openers. They don’t use chains, so there’s no metal-on-metal noise. However, belt drives have bearings that wear over time. Belt-driven openers are heavy-duty, maximum-lifting machines with normally quiet operation. I would choose a LiftMaster belt-drive opener over a Genie.
          </p>
          <p>
            <strong>Screw-drive Garage Door Openers:</strong> Screw drives feature a solid-steel direct drive for increased strength. Direct drives have unmatched reliability: no belts, chains, or gears to wear out. Their simple design—the motor shaft connects directly to the drive screw via a coupler—transmits power in a straight line, maximizing efficiency with minimal torque loss. Screw drives can be slightly noisier than belt drives when new. Both Genie and LiftMaster make excellent screw-drive models, and repairs are infrequent.
          </p>
          <p>
            <strong>Chain-drive Garage Door Openers:</strong> Chain drives are among the most affordable operators. They work well on single-panel wood or metal doors and lightweight sectional doors, and they cost a bit less than screw- or belt-drive models. With proper balance, a chain-drive opener can last 15 to 20 years or more. LiftMaster makes the best chain-drive units on the market; Genie’s chain drives have never been as reliable, though they continue to refine their designs.
          </p>
        </div>

        {/* Sears / Craftsman Info */}
        {/* <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-green-800 mb-2 border-l-4 border-green-600 pl-4">
            Sears / Craftsman Openers
          </h2>
          <p>
            Sears (Craftsman) Garage Door Openers – Sears and Craftsman openers are manufactured by LiftMaster. Big-box units (Home Depot, Lowe’s, Orchard, Ace Hardware, Contractors Warehouse, HD Supply, True Value, Sears) use a three-piece track system that is less robust than professional one-piece tracks. Moreover, when you buy from these retailers, hidden fees add up: basic opener prices range from $159 to $220 (depending on horsepower and model), plus sales tax; second remote controls can cost $24–$32 each; installation runs $110–$150; and service contracts $69–$114. Sears will even charge an extra service call to balance or adjust the door—tasks included in a professional installation. A pro installer will balance and service your door at no extra charge to protect the opener warranty.
          </p>
          <p>
            Return Policies – If a big-box store installs the opener and you decline a service warranty, you typically have only 16 days to return a defective unit. After that, you’re forced to deal directly with the manufacturer—good luck!
          </p>
        </div> */}
      </div>
    </section>
  );
}

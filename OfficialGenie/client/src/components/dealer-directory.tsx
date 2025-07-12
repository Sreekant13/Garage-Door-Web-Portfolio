// src/components/DealerDirectory.tsx
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Phone } from "lucide-react";
import type { Dealer } from "@shared/schema";

export default function DealerDirectory() {
  const { data: dealers, isLoading, error } = useQuery<Dealer[]>({
    queryKey: ["/api/dealers"],
  });

  // your service list
  const servicesOffered = [
    "LA CANADA GARAGE DOOR COMPANY",
    "FLINTRIDGE GARAGE DOOR COMPANY",
    "LA CRESENTA GARAGE DOOR REPAIR",
    "SOUTH PASADENA GARAGE DOOR DEALER",
    "SUNLAND GARAGE DOOR DEALER",
    "TUJUNGA GARAGE DOOR COMPANY",
    "GLENDALE GARAGE DOOR COMPANY",
    "LAKE VIEW TERRACE GARAGE DOOR REPAIR",
    "PASADENA GARAGE DOOR COMPANY",
    "BURBANK GARAGE DOOR COMPANY",
    "SUN VALLEY GARAGE DOOR DEALER",
    "SPARR HEIGHTS GARAGE DOOR REPAIR",
    "ALTADENA GARAGE DOOR COMPANY",
    "MONTROSE GARAGE DOOR COMPANY",
    "SHADOW HILLS GARAGE DOOR REPAIR",
    "LA TUNA CANYON GARAGE DOOR REPAIR",
    "PACOIMA GARAGE DOOR COMPANY",
    "ARLETA GARAGE DOOR COMPANY",
    "SAN FERNANDO GARAGE DOOR REPAIR",
    "PACOIMA GARAGE DOOR DEALER",
  ];

  // your zip code list
  const serviceZips = [
    "91214","91011","91042","91040","91342","91011","91020","91202",
    "91207","90215","91501","91504","91352","91006","91008","91001",
    "91104","91023","91107","91206","91203","91103","91104","91106",
    "91105","90041","91107","91214","91011","91042","91040","91342","91011"
  ];

  // palettes to cycle through
  const serviceColors = [
    "bg-red-100 text-red-800",
    "bg-yellow-100 text-yellow-800",
    "bg-green-100 text-green-800",
    "bg-blue-100 text-blue-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
  ];
  const zipColors = [
    "bg-indigo-100 text-indigo-800",
    "bg-teal-100 text-teal-800",
    "bg-orange-100 text-orange-800",
    "bg-lime-100 text-lime-800",
    "bg-emerald-100 text-emerald-800",
    "bg-fuchsia-100 text-fuchsia-800",
  ];

  // loading & error unchanged
  if (isLoading) {
    return (
      <section className="py-16 bg-genie-light">
        {/* ... */}
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-16 bg-genie-light">
        {/* ... */}
      </section>
    );
  }

  const losAngelesDealers = dealers?.filter(d => d.county === "Los Angeles") || [];
  const orangeCountyDealers = dealers?.filter(d => d.county === "Orange") || [];

  return (
    <section
  id="dealers"
  className="py-16 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500"
>
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2
        className="
          text-3xl md:text-4xl font-extrabold
          bg-clip-text text-transparent
          bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500
          mb-4
        "
      >
        Find Your Local Dealer
      </h2>
      <p className="text-lg text-gray-300">
        Genuine Genie dealer in Los Angeles and Orange County
      </p>
    </div>

    {/* Service Coverage */}
    <div className="mb-12">
      <div
        className="
          rounded-2xl
          bg-gradient-to-tr from-blue-300 via-purple-300 to-red-300
          shadow-lg p-8
        "
      >
        <h3 className="flex items-center text-2xl font-bold text-white mb-6">
          <MapPin className="w-6 h-6 text-white mr-3" />
          We offer New {' '}<span className="underline mx-1"> Garage Door Springs </span>,
          <span className="underline mx-1"> {' '} Torsion Springs</span>, 
          and
          <span className="underline mx-1">Broken Spring Repair </span>in:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {servicesOffered.map((loc, i) => (
            <span
              key={loc}
              className={`
                inline-block px-3 py-1 rounded-full text-sm font-medium
                ${serviceColors[i % serviceColors.length]}
              `}
            >
              {loc}
            </span>
          ))}
        </div>

        <h4 className="text-xl font-semibold text-white mb-4">
          Zip Codes Served
        </h4>
        <div className="flex flex-wrap gap-2">
          {serviceZips.map((zip, i) => (
            <span
              key={`${zip}-${i}`}
              className={`
                inline-block px-3 py-1 rounded-full text-sm font-medium
                ${zipColors[i % zipColors.length]}
              `}
            >
              {zip}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

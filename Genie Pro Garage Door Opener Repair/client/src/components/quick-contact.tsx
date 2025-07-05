import { Phone } from "lucide-react";

export default function QuickContact() {
  const phoneNumbers = [
    "323-270-5387",
    "310-915-4151",
    "818-351-3131",
    "562-506-1384"
  ];

  return (
    <section className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {phoneNumbers.map((number) => (
            <a
              key={number}
              href={`tel:${number}`}
              className="hover:text-accent transition-colors flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {number}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

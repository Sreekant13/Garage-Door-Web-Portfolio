// src/components/Contact.tsx
import { Phone, Clock, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import technicianImg from "@/assets/images/joseph.png";

export default function Contact() {
  const infoItems = [
    {
      icon: <Phone className="h-6 w-6 text-yellow-300" />,
      title: "Phone",
      body: (
        <a
          href="tel:323-270-5387"
          className="text-yellow-200 hover:text-white transition"
        >
          323-270-5387
        </a>
      ),
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-300" />,
      title: "Hours",
      body: (
        <>
          <p>Mon – Sun: 6 AM – 10 PM</p>
          <p>Emergency service available</p>
        </>
      ),
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow-300" />,
      title: "Service Promise",
      body: <p>47+ years of trusted service</p>,
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-300" />,
      title: "Special Offer",
      body: (
        <>
          <p className="font-semibold text-yellow-200">
            Free remote control with a new Garage Door Opener
          </p>
          <p>Mention our website when calling</p>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 bg-green-200">
      <div className="container mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-inter font-bold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Need prompt, professional garage door service? Reach out below.
          </p>
        </div>

        {/* Card */}
        <Card className="bg-gradient-to-br from-purple-700 to-indigo-600 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div
              className="
                grid grid-cols-1 md:grid-cols-2 gap-10 
                justify-items-center
                max-w-4xl mx-auto
              "
            >
              {/* LEFT: Info */}
              <div className="space-y-6 text-center md:text-left">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="bg-white/20 p-3 rounded-full mb-2 md:mb-0 md:mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT: Portrait + CTA */}
              <div className="flex flex-col items-center space-y-6 text-center">
                <img
                  src={technicianImg}
                  alt="Our Technician"
                  className="
                    rounded-full border-4 border-white shadow-lg
                    w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80
                  "
                />
                <p className="text-lg md:text-xl font-medium max-w-xs">
                  We’re standing by 7 days a week to get you back on track.
                </p>
                <Button
                  asChild
                  className="
                    bg-yellow-400 text-purple-900 hover:bg-yellow-500 
                    px-8 py-3 rounded-full text-lg
                  "
                >
                  <a href="tel:323-270-5387" className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

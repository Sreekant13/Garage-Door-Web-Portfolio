// src/components/TroubleshootingSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const phoneNumbers = [
  { number: "323.270.5387", primary: true },
  { number: "310.734.0910", primary: false },
  { number: "818.351.3118", primary: false }
];

const commonIssues = [
  {
    title: "Won't Open/Close",
    description:
      "Door won't respond to remote or wall switch. Could be main drive gear (Liftmaster/Chamberlain) or trolley issues (Genie).",
    note:
      "Professional diagnosis recommended - may indicate balance or limit adjustment issues.",
    color: "blue",
    icon: "🔧"
  },
  {
    title: "Jammed or Uneven",
    description:
      "Door appears stuck, moves unevenly, or gets jammed during operation.",
    note:
      "Often caused by faulty cables, worn pulleys, or bent tracks requiring professional repair.",
    color: "orange",
    icon: "⚠️"
  },
  {
    title: "Noisy Operation",
    description:
      "Squeaking, popping, or scraping sounds during door operation.",
    note:
      "Usually indicates lack of lubrication or worn components. Bearings should be lubricated 3-4 times yearly.",
    color: "green",
    icon: "🔊"
  }
];

export default function TroubleshootingSection() {
  return (
    <section className="pt-32 py-20 bg-gradient-to-b from-yellow-400 via-pink-400 to-purple-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Common Issues We Fix
          </h2>
          <p className="text-lg text-gray-700">
            If you notice these symptoms, contact Joseph right away
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commonIssues.map((issue, index) => {
            const colors = {
              blue: ["bg-blue-300", "border-blue-600", "text-blue-600"],
              orange: ["bg-orange-300", "border-orange-600", "text-orange-600"],
              green: ["bg-green-300", "border-green-600", "text-green-600"]
            };
            // use explicit key type to satisfy TS
            const [bg, border, text] = colors[issue.color as keyof typeof colors];
            return (
              <Card
                key={index}
                className={
                  `${bg} border-l-8 ${border} hover:shadow-lg transform hover:scale-105 transition duration-300 rounded-xl`
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full bg-white ${border} text-2xl ${text} shadow-md`}
                    >
                      {issue.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      {issue.title}
                    </h3>
                  </div>
                  <p className="text-gray-800 mb-4">{issue.description}</p>
                  <p className="text-sm text-gray-600">{issue.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 px-4">
          <Card className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Need Help? Call Joseph Now!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {phoneNumbers.map((phone, idx) => (
                  <Button
                    key={idx}
                    asChild
                    className={
                      `px-6 py-3 font-bold text-lg transform transition duration-200 $ {
                        phone.primary
                          ? "bg-white text-purple-600 hover:scale-105"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`
                    }
                  >
                    <a href={`tel:${phone.number}`}>
                      <Phone className="inline-block mr-2" />
                      {`(${phone.number.slice(0,3)}) ${phone.number.slice(3,6)}${phone.number.slice(6)}`}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

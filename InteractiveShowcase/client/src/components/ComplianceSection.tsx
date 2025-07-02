// src/components/ComplianceSection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Phone } from "lucide-react";

export default function ComplianceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
        <Shield className="w-8 h-8 text-orange-500 mr-3" />
        California Compliance
      </h2>
      <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
        <CardContent className="p-8">
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">California Residents</h3>
              <Badge variant="outline" className="border-red-300 text-red-600">
                SB-969 Compliance Required
              </Badge>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            In accordance with California State Law SB-969, all installed garage door openers must have battery backup as of July 1, 2019.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "All our 2025 models include battery backup",
              "SB-969 compliant installation",
              "Professional installation included",
              "Battery lasts 5-7 years",
              "50+ cycles during power outage",
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center text-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>{feat}</span>
              </motion.div>
            ))}
          </div>
          <Button asChild className="w-full bg-red-500 hover:bg-red-600">
            <a href="tel:323-270-5387" className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Learn More: 323-270-5387
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

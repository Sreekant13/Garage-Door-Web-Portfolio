import { useState } from "react";
import { Calculator, Calendar, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function PricingCalculator() {
  const [selectedModel, setSelectedModel] = useState("770");
  const [maintenance, setMaintenance] = useState(false);
  const [warranty, setWarranty] = useState(false);

  const models = [
    { value: "770", label: "Belt Drive 750 - $770.00" },
    { value: "840", label: "Belt Drive Connect - $840.00" },
    { value: "915", label: "Signature Series - $915.00" }
  ];

  const basePrice = parseInt(selectedModel);
  const addOns = (maintenance ? 99 : 0) + (warranty ? 150 : 0);
  const totalPrice = basePrice + addOns;

  return (
    <section id="calculator" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Price Calculator
          </h2>
          <p className="text-xl text-gray-600">
            Get an instant estimate for your garage door opener installation
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2">
                      Select Your Model
                    </Label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a model" />
                      </SelectTrigger>
                      <SelectContent>
                        {models.map((model) => (
                          <SelectItem key={model.value} value={model.value}>
                            {model.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2">
                      Additional Services
                    </Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="balancing"
                          checked={true}
                          disabled
                        />
                        <Label htmlFor="balancing" className="text-sm">
                          Door Balancing (Included)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="maintenance"
                          checked={maintenance}
                          onCheckedChange={(checked) => setMaintenance(checked as boolean)}
                        />
                        <Label htmlFor="maintenance" className="text-sm">
                          Annual Maintenance Plan (+$99)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="warranty"
                          checked={warranty}
                          onCheckedChange={(checked) => setWarranty(checked as boolean)}
                        />
                        <Label htmlFor="warranty" className="text-sm">
                          Extended Warranty (+$150)
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Estimate</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Price:</span>
                      <span className="font-semibold">${basePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Additional Services:</span>
                      <span className="font-semibold">${addOns.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-xl font-bold text-primary">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <Button className="w-full bg-primary text-white hover:bg-blue-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Installation
                    </Button>
                    <a
                      href="tel:323-270-5387"
                      className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-center block"
                    >
                      <Phone className="inline h-4 w-4 mr-2" />
                      Call for Quote
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

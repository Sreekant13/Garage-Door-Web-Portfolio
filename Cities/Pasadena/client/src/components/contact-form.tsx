import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Clock, DollarSign, Award, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock"
  },
  {
    icon: DollarSign,
    title: "Free Phone Estimates",
    description: "No hidden fees or charges"
  },
  {
    icon: Award,
    title: "47+ Years Experience",
    description: "Trusted local expert"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full warranty protection"
  }
];

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Request Submitted!",
      description: "Thank you for your request! We will call you at the provided number within 15 minutes.",
    });
    
    // Reset form
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-professional mb-4">Get a Free Phone Estimate</h2>
          <p className="text-xl text-gray-600">Call now or fill out the form below for immediate service</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className="focus:ring-2 focus:ring-emergency focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(xxx) xxx-xxxx"
                      className="focus:ring-2 focus:ring-emergency focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="focus:ring-2 focus:ring-emergency focus:border-transparent">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="repair">Garage Door Repair</SelectItem>
                        <SelectItem value="opener">Opener Repair</SelectItem>
                        <SelectItem value="spring">Spring Replacement</SelectItem>
                        <SelectItem value="installation">New Installation</SelectItem>
                        <SelectItem value="emergency">Emergency Repair</SelectItem>
                        <SelectItem value="inquiry">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Problem
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      placeholder="Tell us about your garage door issue..."
                      className="focus:ring-2 focus:ring-emergency focus:border-transparent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-emergency hover:bg-emergency/90 text-white py-4 px-6 rounded-lg font-bold transition-colors"
                  >
                    Schedule an appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-emergency p-8 rounded-2xl text-white text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mb-4"
              >
                <Phone size={64} className="mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-red-100 mb-6">For emergency garage door repairs, call now!</p>
              <a 
                href="tel:626-251-2180" 
                className="text-4xl font-bold text-phone-highlight hover:text-white transition-colors block mb-2"
              >
                626-251-2180
              </a>
              <p className="text-red-200">Available 24/7 - No Extra Charge</p>
            </motion.div>

            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-professional mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <feature.icon className="text-2xl text-trust mr-4" size={32} />
                      <div>
                        <p className="font-semibold">{feature.title}</p>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

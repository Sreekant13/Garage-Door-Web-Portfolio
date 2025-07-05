import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqItems = [
    {
      id: "battery-included",
      question: "Does the battery come with new openers?",
      answer: "YES - All new Genie garage door openers come with battery backup included in the box."
    },
    {
      id: "battery-life",
      question: "How long does the battery last?",
      answer: "The battery backup typically lasts 5 to 7 years under normal usage conditions."
    },
    {
      id: "power-outage-cycles",
      question: "How many times will it operate during power outage?",
      answer: "The battery backup will operate your garage door at least 50 times during a power outage."
    },
    {
      id: "battery-replacement",
      question: "How do I know when to replace the battery?",
      answer: "You'll hear a beep every 5 minutes when the battery needs replacement."
    },
    {
      id: "california-requirement",
      question: "Is battery backup required in California?",
      answer: "YES - California State Law SB-969 requires all installed garage door openers to have battery backup as of July 1, 2019."
    }
  ];

  return (
    <section id="battery-faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Battery Backup FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about battery backup systems
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-50 border border-gray-200">
                <Button
                  variant="ghost"
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardContent className="px-6 pb-4">
                        <p className="text-gray-700">{item.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

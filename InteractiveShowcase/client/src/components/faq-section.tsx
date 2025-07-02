import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle, CheckCircle, Battery, RotateCcw, Lightbulb, Gavel } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  icon: any;
  iconColor: string;
}

const faqs: FAQ[] = [
  {
    id: "battery-included",
    question: "Will the battery come in the box?",
    answer: "YES - All our 2025 model garage door openers come with the battery backup included in the box. No additional purchase necessary!",
    icon: CheckCircle,
    iconColor: "text-green-500"
  },
  {
    id: "battery-life",
    question: "How long will the battery last?",
    answer: "5 TO 7 YEARS - The battery backup will typically last 5-7 years under normal use. You'll hear a beep every 5 minutes when it needs replacement.",
    icon: Battery,
    iconColor: "text-amber-500"
  },
  {
    id: "battery-cycles",
    question: "How many times will the battery backup work?",
    answer: "AT LEAST 50 TIMES - The battery backup will operate your garage door at least 50 cycles from the initial power failure, ensuring you're never locked out.",
    icon: RotateCcw,
    iconColor: "text-teal-500"
  },
  {
    id: "battery-features",
    question: "Will other features work on battery power?",
    answer: "YES, EXCEPT FOR THE LIGHTS - All garage door opener features work under battery power, but the lights won't come on to preserve battery life.",
    icon: Lightbulb,
    iconColor: "text-yellow-500"
  },
  {
    id: "multiple-doors",
    question: "Do I need battery backup on every door?",
    answer: "YES, IF BUYING NEW IN CA - California law requires battery backup on every new garage door opener installation if you have multiple doors.",
    icon: Gavel,
    iconColor: "text-red-500"
  },
  {
    id: "speed-change",
    question: "Does the operating speed change on battery power?",
    answer: "YES, SLOWER SPEED - The garage door opener operates at a slower speed when running on battery power to conserve energy and extend battery life.",
    icon: CheckCircle,
    iconColor: "text-blue-500"
  },
  {
    id: "generic-battery",
    question: "Will a generic battery work?",
    answer: "YES - Generic replacement batteries that meet the specifications will work. However, we recommend using OEM batteries for optimal performance and warranty coverage.",
    icon: Battery,
    iconColor: "text-green-500"
  },
  {
    id: "older-openers",
    question: "Can battery backup be added to older Genie openers?",
    answer: "NO - Battery backup cannot be retrofitted to older Genie opener models. It requires a complete opener replacement with a 2025 model that has integrated battery backup.",
    icon: CheckCircle,
    iconColor: "text-red-500"
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <HelpCircle className="w-12 h-12 text-orange-500 mr-4" />
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our garage door openers and battery backup systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="faq-item overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <Icon className={`w-6 h-6 ${faq.iconColor} mr-4 group-hover:animate-pulse`} />
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="flex items-start">
                            <div className="flex-1 pl-10">
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-gray-600 leading-relaxed"
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Our experts are here to help!
          </p>
          <motion.a
            href="tel:323-270-5387"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all shadow-lg"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            Call for Expert Help: 323-270-5387
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "If I purchase a new opener, will the battery come in the box?",
    answer: "YES - All 2025 models come with an integrated battery backup included in the box."
  },
  {
    question: "Is the battery backup replaceable?",
    answer: "YES - The battery backup is easily replaceable when needed."
  },
  {
    question: "Will a generic battery work?",
    answer: "YES - Generic replacement batteries are compatible with our systems."
  },
  {
    question: "Can a battery backup be added to older Genie openers?",
    answer: "NO - Battery backup is only available on newer 2025 model openers."
  },
  {
    question: "How long will the battery last?",
    answer: "The battery backup will last 5 to 7 years under normal use conditions."
  },
  {
    question: "How to know when to replace the battery?",
    answer: "You'll hear a beep every 5 minutes when the battery needs replacement."
  },
  {
    question: "How many times will the battery backup operate the garage door?",
    answer: "The battery backup will operate your garage door at least 50 times during a power outage."
  },
  {
    question: "Will the garage door opener features work under battery power?",
    answer: "YES, all features work except for the lights - they won't come on during battery operation."
  },
  {
    question: "In the event of a power outage, will the operating speed of the opener change?",
    answer: "YES, the garage door opener operates at a slower speed during battery operation."
  },
  {
    question: "If someone has more than one door on their garage, do they have to have a BBU on every door?",
    answer: "YES, if you're buying a new garage door opener in California, each door requires battery backup per state law."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold garage-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl garage-slate">
            Get answers to common questions about garage door openers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-gray-100 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold garage-navy pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="garage-slate h-5 w-5" />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="garage-slate">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

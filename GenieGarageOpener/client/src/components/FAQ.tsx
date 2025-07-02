import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does the battery come in the box with new Genie Garage Door Openers?",
    answer: "YES - All 2025 Genie garage door openers come with battery backup included in the box."
  },
  {
    question: "How long will the Genie battery last?",
    answer: "5 TO 7 YEARS - The battery backup system is designed to last 5-7 years under normal use conditions."
  },
  {
    question: "How many times will the battery operate the Genie door?",
    answer: "AT LEAST 50 TIMES - During a power outage, the battery backup will operate your garage door at least 50 times."
  },
  {
    question: "How will I know when to replace the Genie battery?",
    answer: "YOU'LL HEAR A BEEP EVERY 5 MINUTES - The system will alert you with regular beeping when the battery needs replacement."
  },
  {
    question: "Will other Genie features work during power outage?",
    answer: "YES, EXCEPT FOR THE LIGHTS - All opener features work on battery power except the lights won't come on during operation."
  },
  {
    question: "Can a Genie battery backup be added to older Genie openers?",
    answer: "NO - Battery backup cannot be added to older Genie openers. You'll need a new 2025 model that comes with battery backup included."
  },
  {
    question: "Will a generic battery work on a Genie Garage Door Opener?",
    answer: "YES - Generic replacement batteries that meet the specifications will work with Genie battery backup systems."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-4xl font-bold">Frequently Asked Questions</h2> */}
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about battery backup systems</p> */}
          <div className="flex items-center justify-center mb-6 space-x-2">
            <i className="fas fa-question-circle text-2xl text-garage-blue"/>
            <h2 className="text-4xl font-bold">Genie Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about Genie battery backup systems</p>

        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                className="w-full text-left p-6 border-l-4 border-garage-blue hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <motion.i 
                    className="fas fa-chevron-down text-gray-400 flex-shrink-0"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
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

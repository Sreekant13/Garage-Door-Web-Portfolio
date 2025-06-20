import { motion } from "framer-motion";
import { Shield, Wrench, ThumbsUp } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "1 Year Warranty",
    description: "All new parts and installations covered by our comprehensive one-year warranty and we back all extended factory warranty on parts."
  },
  {
    icon: Wrench,
    title: "47+ Years Experience",
    description: "Nearly five decades of professional garage door repair expertise in Seal Beach and anyone who lives here knows what good work I do. Glad to be recognized as one of the most reliable garage door companies that services Seal Beach."
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We guarantee the highest quality repair services at affordable prices"
  }
];

export default function WarrantyGuarantee() {
  return (
    <section className="py-16 bg-trust text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Guarantee</h2>
          <p className="text-xl text-green-100">Quality workmanship backed by comprehensive warranties</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              className="text-center bg-white bg-opacity-10 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <guarantee.icon className="text-6xl text-phone-highlight mb-4 mx-auto" size={64} />
              <h3 className="text-2xl font-bold mb-4">{guarantee.title}</h3>
              <p className="text-green-100">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl inline-block shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-professional text-xl font-bold mb-4">Get Your Free Estimate Today</p>
            <a 
              href="tel:310-734-0910" 
              className="text-4xl font-bold text-emergency hover:text-urgent transition-colors"
            >
              310-734-0910
            </a>
            <p className="text-gray-600 mt-2">Joseph Lucey - Licensed & Insured</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

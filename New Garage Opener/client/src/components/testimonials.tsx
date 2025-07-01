import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Joseph was professional and installed our new Genie opener quickly. The battery backup feature gives us peace of mind during power outages.",
    author: "Sarah M., Beverly Hills"
  },
  {
    rating: 5,
    text: "47 years in business says it all. Fair pricing, quality work, and the smart features on our new Chamberlain opener are amazing!",
    author: "Mike R., Santa Monica"
  },
  {
    rating: 5,
    text: "Excellent service from start to finish. Joseph balanced our door perfectly and the new opener is whisper quiet. Highly recommend!",
    author: "Lisa K., Pasadena"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative">
      {/* Customer installation background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            47 Years of Satisfied Customers
          </h2>
          <p className="text-xl text-blue-100">
            Thousands of successful installations across Los Angeles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">5.0/5</span>
              </div>
              <p className="text-blue-100 mb-4">{testimonial.text}</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

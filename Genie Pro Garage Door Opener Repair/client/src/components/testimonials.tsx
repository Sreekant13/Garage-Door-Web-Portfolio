import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Woodland Hills",
      rating: 5,
      review: "Joseph was fantastic! Quick installation of our new Genie opener with battery backup. Professional service at a great price.",
      avatar: "M",
      color: "bg-primary"
    },
    {
      name: "David Chen",
      location: "Beverly Hills",
      rating: 5,
      review: "47 years of experience shows! The smart home integration works perfectly with our Alexa. Highly recommend!",
      avatar: "D",
      color: "bg-secondary"
    },
    {
      name: "Sarah Johnson",
      location: "Irvine",
      rating: 5,
      review: "Same day service! Our old opener broke and Joseph had it up and running with a new Genie by afternoon. Excellent!",
      avatar: "S",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">Real reviews from satisfied customers</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{testimonial.rating}.0</span>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.review}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={`${testimonial.color} text-white font-bold`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

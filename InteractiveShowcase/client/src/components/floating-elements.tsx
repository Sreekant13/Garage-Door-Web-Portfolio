import { motion } from "framer-motion";

const floatingElements = [
  { size: "w-4 h-4", color: "bg-orange-500", top: "top-20", left: "left-20", delay: 0 },
  { size: "w-6 h-6", color: "bg-teal-500", top: "top-40", left: "right-20", delay: 1 },
  { size: "w-3 h-3", color: "bg-amber-500", top: "bottom-32", left: "left-1/4", delay: 2 },
  { size: "w-5 h-5", color: "bg-green-500", top: "top-1/3", left: "right-1/4", delay: 0.5 },
  { size: "w-4 h-4", color: "bg-blue-500", top: "top-1/2", left: "left-1/3", delay: 1.5 },
  { size: "w-3 h-3", color: "bg-purple-500", top: "bottom-20", left: "right-1/3", delay: 3 }
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} ${element.top} ${element.left} rounded-full opacity-20`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + element.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay
          }}
        />
      ))}
      
      {/* Additional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-teal-500/5 pointer-events-none" />
    </div>
  );
}

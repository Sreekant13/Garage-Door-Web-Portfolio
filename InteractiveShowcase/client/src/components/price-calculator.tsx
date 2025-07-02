import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Phone, RotateCcw, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface CalculatorOption {
  id: string;
  label: string;
  description: string;
  price: number;
  icon: string;
}

interface CalculatorStep {
  id: number;
  title: string;
  options: CalculatorOption[];
  type: "single" | "multiple";
}

const calculatorSteps: CalculatorStep[] = [
  {
    id: 1,
    title: "Garage door repair price Calculator:",
    type: "single",
    options: [
      { id: "service", label: "Price of Service Call", description: "It includes the first half an hour labor and then $80 per half hour there after.", price: 130, icon: "🏠" },
      { id: "onepiece", label: "Broken Garage Door Springs", description: "Spring costs $43 each on up", price: 43, icon: "🚪" },
      { id: "custom", label: "Custom Door", description: "Specialty or oversized", price: 100, icon: "⚙️" }
      // { id: "Repair", label: "Custom Door Repair", description: "Professional Repair", price: 90, icon: "⚙️" }
    ]
  },
  {
    id: 2,
    title: "Choose your opener type",
    type: "single",
    options: [
      { id: "belt", label: "Belt Drive", description: "Ultra-quiet operation", price: 770, icon: "🔇" },
      { id: "chain", label: "Chain Drive", description: "Reliable and durable", price: 755, icon: "⛓️" },
      { id: "screw", label: "Screw Drive", description: "Powerful 2HP motor", price: 915, icon: "⚡" },
      // { id: "belt+smart", label: "Belt Drive", description: "Powerful motor + Smart Connection", price: 1000, icon: "⚡" },
      // { id: "screwrepair", label: "Screw Drive Repiar", description: "Professional Repair 160 after first half an hour", price: 160, icon: "⚙️" },
      { id: "smart", label: "Smart Connected", description: "Wi-Fi enabled", price: 840, icon: "📱" }
    ]
  },
  {
    id: 3,
    title: "Additional features & services",
    type: "multiple",
    options: [
      { id: "balancing", label: "Door Balancing Service", description: "Ensure smooth operation", price: 75, icon: "⚖️" },
      { id: "remotes", label: "Extra Remote Controls", description: "Additional 2 remotes", price: 50, icon: "🎛️" },
      { id: "sameday", label: "Same-Day Installation", description: "Rush service available", price: 125, icon: "🚀" }
    ]
  }
];

export default function PriceCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentStepData = calculatorSteps.find(step => step.id === currentStep);
  const progress = ((currentStep - 1) / calculatorSteps.length) * 100;

  const handleOptionSelect = (stepId: number, optionId: string, price: number) => {
    const step = calculatorSteps.find(s => s.id === stepId);
    if (!step) return;

    let newSelections = { ...selections };

    if (step.type === "single") {
      newSelections[stepId] = [optionId];
    } else {
      const currentStepSelections = newSelections[stepId] || [];
      if (currentStepSelections.includes(optionId)) {
        newSelections[stepId] = currentStepSelections.filter(id => id !== optionId);
      } else {
        newSelections[stepId] = [...currentStepSelections, optionId];
      }
    }

    setSelections(newSelections);
    calculateTotal(newSelections);
  };

  const calculateTotal = (currentSelections: Record<number, string[]>) => {
    let total = 0;
    
    calculatorSteps.forEach(step => {
      const stepSelections = currentSelections[step.id] || [];
      stepSelections.forEach(selectionId => {
        const option = step.options.find(opt => opt.id === selectionId);
        if (option) {
          total += option.price;
        }
      });
    });

    setTotalPrice(total);
  };

  const nextStep = () => {
    if (currentStep < calculatorSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetCalculator = () => {
    setCurrentStep(1);
    setSelections({});
    setTotalPrice(0);
    setShowResults(false);
  };

  const canProceed = () => {
    const stepSelections = selections[currentStep] || [];
    return stepSelections.length > 0;
  };

  const isOptionSelected = (stepId: number, optionId: string) => {
    const stepSelections = selections[stepId] || [];
    return stepSelections.includes(optionId);
  };

  return (
    <section id="calculator" className="py-20 calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="text-orange-500">Price Calculator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an instant estimate for your garage door opener installation with our gamified calculator.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-morphism border-white/20">
            <CardContent className="p-8">
              {!showResults ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Progress</span>
                      <span className="text-white font-semibold">{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  {/* Current Step */}
                  <AnimatePresence mode="wait">
                    {currentStepData && (
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                          <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-lg">
                            {currentStep}
                          </span>
                          {currentStepData.title}
                        </h3>

                        <div className={`grid gap-4 ${currentStepData.options.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                          {currentStepData.options.map((option, index) => (
                            <motion.button
                              key={option.id}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              onClick={() => handleOptionSelect(currentStep, option.id, option.price)}
                              className={`calc-option p-6 rounded-xl border-2 transition-all text-left ${
                                isOptionSelected(currentStep, option.id)
                                  ? "border-orange-500 bg-orange-500/20 selected"
                                  : "border-white/20 bg-white/10 hover:border-orange-500 hover:bg-white/20"
                              }`}
                            >
                              <div className="text-3xl mb-4">{option.icon}</div>
                              <h4 className="font-semibold text-white mb-2">{option.label}</h4>
                              <p className="text-sm text-gray-300 mb-3">{option.description}</p>
                              {option.price > 0 && (
                                <Badge variant="secondary" className="bg-amber-500 text-white">
                                  +{formatPrice(option.price)}
                                </Badge>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <Button
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      variant="outline"
                      className="glass-morphism text-white border-white/30 hover:bg-white/30"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    
                    <Button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      {currentStep === calculatorSteps.length ? "Calculate" : "Next"}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </>
              ) : (
                /* Results */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Your Custom Quote</h3>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl font-bold text-orange-500 mb-4"
                  >
                    {formatPrice(totalPrice)}
                  </motion.div>
                  
                  <p className="text-white text-xl mb-6">Total Installation Cost</p>
                  
                  <div className="text-sm text-gray-300 mb-8 space-y-2">
                    <p>✓ Professional installation included</p>
                    <p>✓ Battery backup (California compliant)</p>
                    <p>✓ 2 remote controls</p>
                    <p>✓ 47 years of expertise</p>
                    <p>✓ Same-day installation available</p>
                  </div>

                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-lg">
                      <a href="tel:323-270-5387" className="flex items-center justify-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Schedule Installation: 323-270-5387
                      </a>
                    </Button>
                    <Button 
                      onClick={resetCalculator}
                      variant="outline" 
                      size="lg"
                      className="w-full glass-morphism text-white border-white/30 hover:bg-white/30"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Start Over
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

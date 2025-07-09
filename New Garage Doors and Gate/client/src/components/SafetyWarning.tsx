import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function SafetyWarning() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SAFETY FIRST</h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                KEEP CHILDREN AWAY FROM MOVING GARAGE DOORS AT ALL TIMES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">⚠️ Garage Door Spring Repair Warning</h4>
                  <p className="text-gray-700 mb-4">
                    Never attempt garage door spring repair unless you are experienced. This can be dangerous and requires special equipment.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🔧 Professional Service Required</h4>
                  <p className="text-gray-700 mb-4">
                    Springs under high tension can cause serious injury. Our trained technicians have the proper tools and expertise for safe repairs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

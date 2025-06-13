import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Cog,
  Smartphone,
  Wrench,
  Cloud,
  Award,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  TriangleAlert,
} from "lucide-react"

export interface ProductTabsProps {
  value: string
  onValueChange: (value: string) => void
}

const tabItems = [
  { value: "specifications", label: "Specifications" },
  { value: "features",       label: "Features & Benefits" },
  { value: "installation",   label: "2025 Repair Guide" },
  { value: "support",        label: "Support" },
]

export default function ProductTabs({ value, onValueChange }: ProductTabsProps) {
  return (
    <section id="specifications" className="scroll-mt-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={value} onValueChange={onValueChange} className="w-full">
          
          {/* TAB BUTTONS */}
          <TabsList className="
            flex
            flex-wrap        /* allow wrapping onto multiple lines */
            w-full           /* fill whole width */
            gap-1           
            mb-8 
            bg-gray-100 
            rounded-lg
          ">
            {tabItems.map((tab) => (
              <TabsTrigger 
                // className="snap-start flex-shrink-0 px-4 py-2"
                key={tab.value} 
                value={tab.value}
                className="flex-1 text-center py-2 px-4"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* SPECIFICATIONS */}
          <TabsContent id="specifications" value="specifications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Technical Specifications
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <dl className="space-y-4">
                      {[
                        ["Model Number:", "202SS"],
                        ["Motor Power:", "1/3 and 1/2 HP"],
                        ["Drive Type:", "Screw Drive"],
                        ["Door Height:", "Up to 7 feet"],
                        ["Door Weight:", "Up to 450 lbs"],
                        ["Power Supply:", "120V, 60Hz"],
                        ["Warranty:", "1 Year"],
                      ].map(([dt, dd]) => (
                        <div className="flex justify-between" key={dt}>
                          <dt className="font-medium text-gray-900">{dt}</dt>
                          <dd className="text-gray-700">{dd}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Physical Dimensions
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <dl className="space-y-4">
                      {[
                        ["Unit Length:", "8 and 10 feet"],
                        ["Unit Width:", "8 inches"],
                        ["Unit Height:", "10 inches"],
                        ["Weight:", "76 lbs"],
                        ["Rail Length:", "7'6 and 9'6 feet"],
                        ["Clearance Required:", "2 inches minimum"],
                      ].map(([dt, dd]) => (
                        <div className="flex justify-between" key={dt}>
                          <dt className="font-medium text-gray-900">{dt}</dt>
                          <dd className="text-gray-700">{dd}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* FEATURES & BENEFITS */}
          <TabsContent id="features" value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Safety Features",
                  items: [
                    "Auto-reverse safety mechanism",
                    "Photobeam safety system",
                    "Manual release for power outages",
                    "Rolling code remote security",
                  ],
                },
                {
                  icon: Cog,
                  title: "Performance",
                  items: [
                    "Heavy-duty 1/3 and 1/2 HP motor",
                    "Quiet operation technology",
                    "Smooth screw drive system",
                    "Reliable steel construction",
                  ],
                },
                {
                  icon: Smartphone,
                  title: "Convenience",
                  items: [
                    "Remote control included",
                    "LED lighting system",
                    "Easy installation process",
                    "Low maintenance requirements",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Installation",
                  items: [
                    "Pre-assembled components",
                    "Clear installation manual",
                    "Standard hardware included",
                    "Professional support available",
                  ],
                },
                {
                  icon: Cloud,
                  title: "Durability",
                  items: [
                    "Weather-resistant coating",
                    "Corrosion-resistant materials",
                    "Temperature rated -20°F to 140°F",
                    "1-year manufacturer warranty",
                  ],
                },
                {
                  icon: Award,
                  title: "Quality",
                  items: [
                    "UL Listed for safety",
                    "FCC compliant remote system",
                    "ISO 9001 manufacturing",
                    "Industry leading reliability",
                  ],
                },
              ].map(({ icon: Icon, title, items }) => (
                <Card key={title}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-brand-blue mr-3" />
                      <h4 className="text-lg font-medium text-gray-900">{title}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {items.map((it) => (
                        <li key={it}>• {it}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* INSTALLATION */}
          <TabsContent id="installation" value="installation">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Repair Guide</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Parts</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "New V-Belts",
                        "New Trolley",
                        "New Starter Capacitor",
                        "Used Logic Boards",
                        "Relay",
                        "Light Elements",
                      ].map((tool) => (
                        <li key={tool} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Repair Costs</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Service Call: $130 (includes first half hour of labor)",
                        "Every half hour there after $80",
                        "Free phone estimates",
                        "1 year parts and labor warranty on new parts",
                        "47 years in business",
                        "Free phone call: (323)-270-5387",
                      ].map((item) => (
                        <li key={item} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* SUPPORT */}
          <TabsContent id="support" value="support">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support & Maintenance</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h4>
                    <ul className="space-y-3">
                      {[
                        { icon: Phone,     title: "Technical Support", detail: "(323) 270-5387" },
                        { icon: Mail,      title: "Email Support",      detail: "josephlucey@yahoo.com" },
                        { icon: Clock,     title: "Hours",              detail: "Mon-Sun 6AM-10PM PST" },
                      ].map(({ icon: Icon, title, detail }) => (
                        <div className="flex items-center" key={title}>
                          <Icon className="h-5 w-5 text-brand-blue mr-3" />
                          <div>
                            <p className="font-medium">{title}</p>
                            <p className="text-sm text-gray-600">{detail}</p>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Parts Available</h4>
                    <ul className="space-y-3">
                      {[
                        ["New V-Belts"],
                        ["New Trolley"],
                        ["New Starter Capacitor"],
                        ["Used Logic Boards"]
                      ].map(([t, d]) => (
                        <div className="flex justify-between" key={t}>
                          <p className="font-medium">{t}</p><p className="text-sm text-gray-600">{d}</p>
                        </div>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Schedule</h4>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        ["Monthly",   "Test safety reverse feature"],
                        ["Monthly",   "Clean photobeam sensors"],
                        ["Quarterly", "Lubricate screw shaft"],
                        ["Every 5 years",  "Professional inspection recommended"],
                        ["As needed", "Replace remote batteries"],
                      ].map(([f, t]) => (
                        <div className="flex justify-between items-center py-2 border-b border-gray-200" key={f+t}>
                          <span className="font-medium">{f}</span><span className="text-sm text-gray-600">{t}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Troubleshooting</h4>
                {[
                  { title: "Door won't open/close", tips: ["Check power connection","Verify remote battery","Test safety sensors alignment","Check for obstructions"] },
                  { title: "Noisy operation",      tips: ["Lubricate chain or screw shaft","Check for loose hardware","Inspect chain tension","Contact service ((323) 270-5387) if noise persists"] },
                ].map(({ title, tips }) => (
                  <Card key={title}>
                    <CardContent className="p-4">
                      <h5 className="font-medium text-gray-900 mb-2">{title}</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tips.map((t) => <li key={t}>• {t}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

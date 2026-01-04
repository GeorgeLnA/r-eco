import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Check, ArrowRight, Zap, Home, Battery, Car, TreePine, Sun } from "lucide-react";

const technologies = [
  {
    title: "Solar PV",
    subtitle: "Photovoltaic Solar Panels",
    description: "Generate solar energy to power your home, store electricity in a battery for later use, or sell back to the grid with the Smart Export Guarantee scheme.",
    icon: <Sun className="w-8 h-8" />,
    features: [
      "Smart Export Guarantee",
      "Battery storage compatible",
      "25-year warranty",
      "Roof or ground mounted",
      "Real-time monitoring"
    ],
    incentives: ["Smart Export Guarantee"],
    color: "bg-yellow-100"
  },
  {
    title: "Air Source Heat Pumps",
    subtitle: "Efficient Heating & Cooling",
    description: "Utilise a full central heating solution to provide air conditioning, radiator and underfloor heating, and/or a hot water supply, by transferring air in and out of a building.",
    icon: <Home className="w-8 h-8" />,
    features: [
      "Central heating",
      "Air conditioning", 
      "Hot water supply",
      "Underfloor heating compatible",
      "Year-round operation"
    ],
    incentives: ["Green Homes Grant", "Renewable Heat Incentive"],
    color: "bg-gray-100"
  },
  {
    title: "Battery Storage",
    subtitle: "Energy Independence",
    description: "Store electricity to power your home at night or during an outage; and/or take advantage of Smart Metering and Time of Use Tariffs to maximise your hour-by-hour energy usage.",
    icon: <Battery className="w-8 h-8" />,
    features: [
      "Certified Tesla Powerwall Installer",
      "Backup power during outages",
      "Time of use optimization",
      "Smart metering compatible",
      "Scalable capacity"
    ],
    incentives: ["Smart Export Guarantee"],
    color: "bg-green-100"
  },
  {
    title: "EV Charging",
    subtitle: "Electric Vehicle Charging",
    description: "Charge your electric vehicle at the convenience of your own home to take advantage of solar energy, a Time of Use Tariff, or stable residential electricity rates.",
    icon: <Car className="w-8 h-8" />,
    features: [
      "Fast charging capability",
      "Solar PV integration",
      "Smart charging features",
      "Multiple connector types",
      "Weather resistant"
    ],
    incentives: ["OLEV Grant"],
    color: "bg-purple-100"
  },
  {
    title: "Biomass Boilers",
    subtitle: "Carbon Neutral Heating",
    description: "Utilise a full central heating and hot water solution for your entire home by burning wood chips, pellets, and/or logs in a carbon neutral biomass boiler.",
    icon: <TreePine className="w-8 h-8" />,
    features: [
      "Carbon neutral heating",
      "Wood chips, pellets, or logs",
      "Central heating & hot water",
      "Automatic fuel feeding",
      "High efficiency ratings"
    ],
    incentives: ["Green Homes Grant", "Renewable Heat Incentive"],
    color: "bg-orange-100"
  },
  {
    title: "Solar Thermal",
    subtitle: "Solar Water Heating",
    description: "Collect sunlight to heat the air and/or water in your home, store thermal energy for later use, or convert it to electricity to power your appliances.",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Hot water heating",
      "Space heating support",
      "Thermal energy storage",
      "Backup heating integration",
      "Low maintenance"
    ],
    incentives: ["Green Homes Grant", "Renewable Heat Incentive"],
    color: "bg-red-100"
  }
];

export default function Technology() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6">
              Technology
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              To harness the elements. Renewable resources provide a reliable and sustainable supply of energy, 
              and there's a multitude of technologies available to suit every home and business.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Renewable Energy Technologies
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              We offer a comprehensive range of renewable energy solutions to help you achieve energy independence 
              and reduce your environmental impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-tryba-alto rounded-xl p-8 hover:shadow-lg transition-all group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center text-tryba-aqua-deep`}>
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-tryba-aqua-deep mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-tryba-boulder font-medium mb-3">
                      {tech.subtitle}
                    </p>
                    <p className="text-tryba-dove-gray mb-6">
                      {tech.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-tryba-aqua-deep mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {tech.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-tryba-aqua-deep flex-shrink-0" />
                            <span className="text-sm text-tryba-dove-gray">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-tryba-aqua-deep mb-3">Available Incentives:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.incentives.map((incentive, incentiveIndex) => (
                          <span 
                            key={incentiveIndex}
                            className="bg-tryba-yellow text-tryba-aqua-deep px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {incentive}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-tryba-aqua-deep group-hover:text-white transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Combinations */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Integrated Energy Systems
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              Combine multiple technologies for maximum efficiency and energy independence. 
              Our expert team will design the perfect system for your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Solar + Battery
              </h3>
              <p className="text-tryba-dove-gray mb-6">
                Combine solar PV with battery storage to maximize self-consumption and provide backup power during outages.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">24/7 renewable energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Backup power security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Maximum energy independence</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Heat Pump + Solar
              </h3>
              <p className="text-tryba-dove-gray mb-6">
                Power your heat pump with solar energy for ultra-efficient heating and cooling with minimal running costs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Ultra-low running costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Zero carbon heating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Year-round comfort</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Complete Energy System
              </h3>
              <p className="text-tryba-dove-gray mb-6">
                Solar PV, battery storage, heat pump, and EV charging all integrated into one comprehensive system.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Total energy independence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Optimized efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tryba-aqua-deep" />
                  <span className="text-sm text-tryba-dove-gray">Future-ready home</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Incentives */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Government Incentives & Support
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              Take advantage of government schemes designed to support renewable energy adoption and reduce installation costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-tryba-cyan-light rounded-xl p-8">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Green Homes Grant
              </h3>
              <p className="text-tryba-dove-gray mb-4">
                Government vouchers worth up to £5,000 (or £10,000 for low income households) to help cover the cost of installing energy efficient improvements.
              </p>
              <div className="text-sm text-tryba-dove-gray">
                <strong>Eligible for:</strong> Heat Pumps, Biomass Boilers, Solar Thermal
              </div>
            </div>

            <div className="bg-tryba-cyan-light rounded-xl p-8">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Renewable Heat Incentive
              </h3>
              <p className="text-tryba-dove-gray mb-4">
                Quarterly payments for 7 years for renewable heat technologies, helping to offset the cost of installation and provide ongoing income.
              </p>
              <div className="text-sm text-tryba-dove-gray">
                <strong>Eligible for:</strong> Heat Pumps, Biomass Boilers, Solar Thermal
              </div>
            </div>

            <div className="bg-tryba-cyan-light rounded-xl p-8">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Smart Export Guarantee
              </h3>
              <p className="text-tryba-dove-gray mb-4">
                Get paid for excess electricity you generate and export back to the grid. Rates vary by supplier but provide ongoing income from your solar system.
              </p>
              <div className="text-sm text-tryba-dove-gray">
                <strong>Eligible for:</strong> Solar PV, Battery Storage
              </div>
            </div>
          </div>
        </div>
      </section>

              {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-[98vw] mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-6">
              Which Technology is Right for You?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Our experts will assess your property, energy usage, and goals to recommend the perfect renewable energy solution. 
              Book your free consultation today.
            </p>
            <Button className="bg-white text-black px-10 py-6 rounded-full text-lg font-medium">
              Get Technology Recommendations
            </Button>
          </div>
        </section>

      {/* Footer */}
      <footer className="border-t border-tryba-alto">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-black text-lg font-normal mb-6">HAPPY HOME</h4>
              <div className="space-y-4">
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">About Us</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Projects</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Consultation</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Technology</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Partners</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Associations</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-black text-lg font-normal mb-6">Services</h4>
              <div className="space-y-4">
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Solar PV</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Heat Pumps</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Battery Storage</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">EV Charging</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Biomass Boilers</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Solar Thermal</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-black text-lg font-normal mb-6">Contact & Support</h4>
              <div className="space-y-4">
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Oxford, OX2 6QH</a>
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

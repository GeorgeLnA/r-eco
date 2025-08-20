import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Design & Consultation",
    description: "Our consultation process is purposefully designed to determine whether an investment in renewable technologies is right for you.",
    features: [
      "Initial energy assessment",
      "Technology recommendations", 
      "Site feasibility study",
      "Financial projections",
      "Government incentives guidance"
    ],
    icon: "🎯"
  },
  {
    title: "System Installation", 
    description: "Our team has over 40 years of combined practical experience within the energy industry and is skilled across multiple technical disciplines.",
    features: [
      "Professional installation team",
      "MCS certified installations",
      "Quality materials and components",
      "Minimal disruption to your home",
      "Full system commissioning"
    ],
    icon: "🔧"
  },
  {
    title: "Maintenance & Repair",
    description: "As with everything in life - complex technologies require ongoing support. We'll be here to provide assistance when you need it.",
    features: [
      "Regular system health checks",
      "Performance monitoring",
      "Preventive maintenance",
      "Emergency repair service",
      "Component replacement"
    ],
    icon: "🛠️"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-[#588157]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We're with you, every step of the way. As a workers' cooperative, every member of our team 
              has a stake in the business and is committed to delivering exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Comprehensive Renewable Energy Services
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide complete support for your renewable energy journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-tryba-alto rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-medium text-[#588157] mb-4">
                  {service.title}
                </h3>
                <p className="text-tryba-dove-gray mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#588157] flex-shrink-0" />
                      <span className="text-tryba-dove-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The R-ECO Way */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              The R-ECO Way
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              Maintaining cooperative values in a very competitive industry requires a unique approach to business. 
              Our service is grounded in the following principles:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tryba-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span className="text-2xl font-bold text-[#588157]">R</span>
              </div>
                              <h3 className="text-xl font-medium text-[#588157] mb-3">
                  Responsible
                </h3>
              <p className="text-tryba-dove-gray">
                We're putting in the work to ensure our business operations have a net-positive impact 
                on humanity and the Earth beyond the superficial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tryba-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span className="text-2xl font-bold text-[#588157]">E</span>
              </div>
                              <h3 className="text-xl font-medium text-[#588157] mb-3">
                  Effective
                </h3>
              <p className="text-tryba-dove-gray">
                We focus on finding appropriate and practical solutions to fit your requirements and budget, 
                whilst making our process as accessible as you desire.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tryba-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span className="text-2xl font-bold text-[#588157]">C</span>
              </div>
                              <h3 className="text-xl font-medium text-[#588157] mb-3">
                  Competent
                </h3>
              <p className="text-tryba-dove-gray">
                In a constantly changing industry, our team members continue to develop and test our technical 
                capabilities in order to stay ahead of the curve.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tryba-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span className="text-2xl font-bold text-[#588157]">O</span>
              </div>
                              <h3 className="text-xl font-medium text-[#588157] mb-3">
                  Organised
                </h3>
              <p className="text-tryba-dove-gray">
                We've designed our workflow to limit excessive bureaucracy, unwarranted disruption, 
                and unnecessary delays; resulting in a smooth process from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-6">
                Serving Oxfordshire and Beyond
              </h2>
              <p className="text-xl text-tryba-dove-gray mb-8">
                Based in Oxford, we serve customers across Oxfordshire and surrounding counties. 
                Our local knowledge and nationwide experience ensure we can deliver exceptional 
                renewable energy solutions wherever you are.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-tryba-aqua-deep" />
                  <span className="text-tryba-dove-gray">Oxfordshire and surrounding counties</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#588157]" />
                  <span className="text-tryba-dove-gray">Urban and rural installations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#588157]" />
                  <span className="text-tryba-dove-gray">Residential and commercial projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#588157]" />
                  <span className="text-tryba-dove-gray">New builds and retrofit installations</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-tryba-cyan-light rounded-xl p-8">
                <h3 className="text-2xl font-medium text-[#588157] mb-6">
                  Why Choose R-ECO?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#588157] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#588157]">Worker's Cooperative</div>
                      <div className="text-tryba-dove-gray text-sm">Every team member has a stake in your success</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#588157] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#588157]">15+ Years Experience</div>
                      <div className="text-tryba-dove-gray text-sm">Hundreds of successful installations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#588157] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#588157]">MCS Certified</div>
                      <div className="text-tryba-dove-gray text-sm">Quality assured installations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#588157] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#588157]">Ongoing Support</div>
                      <div className="text-tryba-dove-gray text-sm">We're here for the lifetime of your system</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#588157]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Our team is ready to help you explore renewable energy options for your home or business. 
            Get in touch today for your free, no-obligation consultation.
          </p>
          <Button className="bg-white text-[#588157] px-10 py-6 rounded-full text-lg font-medium">
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-tryba-alto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-black text-lg font-normal mb-6">R-ECO</h4>
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
                <a href="#" className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">01865 595 264</a>
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

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-[#588157]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Making our planet more sustainable. Over 15 years we've completed hundreds of installations 
              and delivered bespoke energy systems of the highest standard.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="/1-small.jpg"
                  alt="Solar panels on roof"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tryba-yellow text-tryba-aqua-deep px-3 py-1 rounded-full text-sm font-medium">
                    Solar PV
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-tryba-aqua-deep mb-3">
                Residential Solar PV Installation
              </h3>
              <p className="text-tryba-dove-gray mb-4">
                A 4kW solar PV system installed for the Harrison family, featuring ground-mounted panels with 
                an ingenious augered anchor system supporting variable height stanchions on a steep hillside.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-sm">4kW System</span>
                <span className="bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-sm">Ground Mounted</span>
                <span className="bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-sm">Smart Export</span>
              </div>
              <blockquote className="italic text-tryba-dove-gray border-l-4 border-tryba-yellow pl-4">
                "We gave Stuart and his team a tricky brief- to install solar panels on a steep hillside behind 
                our thatched cottage. R-ECO came up with an ingenious solution and we are very pleased with the results."
                <cite className="block mt-2 font-medium">- Nick & Mary Harrison</cite>
              </blockquote>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="/2-small.jpg"
                  alt="Solar panels on roof"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tryba-yellow text-tryba-aqua-deep px-3 py-1 rounded-full text-sm font-medium">
                    Heat Pump
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-tryba-aqua-deep mb-3">
                Air Source Heat Pump System
              </h3>
              <p className="text-tryba-dove-gray mb-4">
                Complete heating system replacement featuring an air source heat pump providing central heating, 
                hot water, and air conditioning for a modern family home.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-sm">12kW System</span>
                <span className="bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-sm">RHI Eligible</span>
                <span className="bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-sm">Year Round</span>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-tryba-aqua-deep mb-2">500+</div>
              <div className="text-tryba-dove-gray">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tryba-aqua-deep mb-2">15+</div>
              <div className="text-tryba-dove-gray">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tryba-aqua-deep mb-2">2MW+</div>
              <div className="text-tryba-dove-gray">Solar Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tryba-aqua-deep mb-2">100%</div>
              <div className="text-tryba-dove-gray">Customer Satisfaction</div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-normal text-tryba-cyprus mb-8 text-center">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={`${i % 2 === 0 ? '/4-small.jpg' : '/9-small.jpg'}`}
                      alt={`Project ${i}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Project</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                      {/* CTA Section */}
            <div className="text-center bg-[#588157] py-20 px-6 rounded-xl">
              <h2 className="text-3xl font-normal text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a bespoke renewable energy solution for your home or business.
              </p>
              <Button className="bg-white text-[#588157] px-10 py-6 rounded-full text-lg">
                Get Your Free Consultation
              </Button>
            </div>
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
                <a href className="block text-tryba-dove-gray text-xl hover:text-tryba-aqua-deep">Battery Storage</a>
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

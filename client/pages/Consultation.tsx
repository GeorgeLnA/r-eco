import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { MapPin, Mail, Clock, CheckCircle } from "lucide-react";

export default function Consultation() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Renewable energy could be the next step on your path to a sustainable future. 
              We offer a free, no-strings-attached consultation to help you make the right decision.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Our Consultation Process
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              We know upgrading to a renewable energy system is a big decision. Our structured approach 
              ensures you get the information you need to make an informed choice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-tryba-aqua-deep font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-tryba-aqua-deep mb-2">
                    Informal Discussions
                  </h3>
                  <p className="text-tryba-dove-gray">
                    Determine your current energy usage and forecast your future requirements. 
                    We'll discuss your goals, budget, and any specific concerns you may have.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-tryba-aqua-deep font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-tryba-aqua-deep mb-2">
                    A Technical Survey
                  </h3>
                  <p className="text-tryba-dove-gray">
                    Explore and outline your options with an in-person visit or remote video survey. 
                    We'll assess your property's suitability for various renewable technologies.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-tryba-aqua-deep font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-tryba-aqua-deep mb-2">
                    A Preliminary Design
                  </h3>
                  <p className="text-tryba-dove-gray">
                    Gain insight from a renewable energy system designed specifically for you. 
                    We'll create detailed plans showing potential installations and expected performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-tryba-aqua-deep font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-tryba-aqua-deep mb-2">
                    An Initial Estimate
                  </h3>
                  <p className="text-tryba-dove-gray">
                    Give your feedback to ensure we find the right balance between cost and utility. 
                    We'll provide transparent pricing with no hidden costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-tryba-cyan-light rounded-xl p-8">
                <h3 className="text-2xl font-medium text-tryba-aqua-deep mb-6">
                  What's Included
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tryba-aqua-deep" />
                    <span className="text-tryba-dove-gray">Comprehensive energy assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tryba-aqua-deep" />
                    <span className="text-tryba-dove-gray">Technology recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tryba-aqua-deep" />
                    <span className="text-tryba-dove-gray">Financial projections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tryba-aqua-deep" />
                    <span className="text-tryba-dove-gray">Government incentives guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tryba-aqua-deep" />
                    <span className="text-tryba-dove-gray">No-obligation quotation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tryba-aqua-deep" />
                    <span className="text-tryba-dove-gray">Ongoing support and advice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-6">
                Book Your Free Consultation
              </h2>
              <p className="text-xl text-tryba-dove-gray mb-8">
                Ready to explore renewable energy for your home? Get in touch and we'll arrange 
                your free consultation at a time that works for you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-tryba-aqua-deep" />
                  <div>
                    <div className="font-medium text-tryba-aqua-deep">Email</div>
                    <div className="text-tryba-dove-gray">hello@happyhome.co.uk</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-tryba-aqua-deep" />
                  <div>
                    <div className="font-medium text-tryba-aqua-deep">Address</div>
                    <div className="text-tryba-dove-gray">8 Benson Place, Oxford, OX2 6QH</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-tryba-aqua-deep" />
                  <div>
                    <div className="font-medium text-tryba-aqua-deep">Hours</div>
                    <div className="text-tryba-dove-gray">Mon-Fri: 9:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Property Address
                  </label>
                  <Input placeholder="Your property address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Interested Technologies
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Solar PV", "Heat Pumps", "Battery Storage", "EV Charging", "Solar Thermal", "Biomass"].map((tech) => (
                      <label key={tech} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300 text-tryba-aqua-deep" />
                        <span className="text-sm text-tryba-dove-gray">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Additional Information
                  </label>
                  <Textarea 
                    placeholder="Tell us about your energy goals, current usage, or any specific requirements..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full bg-black text-white py-6 rounded-full text-lg">
                  Book Free Consultation
                </Button>
                
                <p className="text-sm text-tryba-dove-gray text-center">
                  By submitting this form, you agree to our privacy policy. We'll only use your information 
                  to provide your consultation and will never share it with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-6">
            Ready to Start Your Renewable Energy Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Book your free consultation today and let our experts guide you to the perfect renewable energy solution.
          </p>
          <Button className="bg-white text-black px-10 py-6 rounded-full text-lg font-medium">
            Book Your Free Consultation
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

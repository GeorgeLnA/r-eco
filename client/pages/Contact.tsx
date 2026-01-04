import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Thank you for your interest in HAPPY HOME. Feel free to reach out and open up a conversation 
              using the contact form or via our chatbot.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-8">
                Get in Touch
              </h2>
              <p className="text-xl text-tryba-dove-gray mb-8">
                We're here to help you explore renewable energy options for your home or business. 
                Our team is ready to answer your questions and provide expert guidance.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-tryba-aqua-deep" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tryba-aqua-deep mb-2">Email</h3>
                    <p className="text-tryba-dove-gray mb-2">hello@happyhome.co.uk</p>
                    <p className="text-sm text-tryba-boulder">
                      Send us detailed information about your project and we'll get back to you 
                      within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-tryba-aqua-deep" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tryba-aqua-deep mb-2">Address</h3>
                    <p className="text-tryba-dove-gray mb-2">
                      8 Benson Place<br />
                      Oxford, OX2 6QH<br />
                      United Kingdom
                    </p>
                    <p className="text-sm text-tryba-boulder">
                      Based in Oxford, we serve customers across Oxfordshire and surrounding counties.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-tryba-aqua-deep" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tryba-aqua-deep mb-2">Business Hours</h3>
                    <div className="text-tryba-dove-gray space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-sm text-tryba-boulder mt-2">
                      For urgent inquiries outside business hours, please leave a message and we'll 
                      respond first thing the next business day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tryba-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-tryba-aqua-deep" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tryba-aqua-deep mb-2">Live Chat</h3>
                    <p className="text-tryba-dove-gray mb-2">Available on our website</p>
                    <p className="text-sm text-tryba-boulder">
                      Use our chatbot in the bottom right corner for quick questions or to be 
                      connected with the right team member.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-tryba-cyan-light rounded-xl p-8">
              <h3 className="text-2xl font-medium text-tryba-aqua-deep mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" required />
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
                  <Input placeholder="Your property address (for site assessments)" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Inquiry Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md text-tryba-dove-gray">
                    <option value="">Select inquiry type</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="solar-pv">Solar PV Installation</option>
                    <option value="heat-pump">Heat Pump Installation</option>
                    <option value="battery">Battery Storage</option>
                    <option value="ev-charging">EV Charging</option>
                    <option value="biomass">Biomass Boiler</option>
                    <option value="solar-thermal">Solar Thermal</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tryba-aqua-deep mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please tell us about your renewable energy needs, current energy usage, goals, or any specific questions you have..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded border-gray-300 text-tryba-aqua-deep" 
                      required
                    />
                    <span className="text-sm text-tryba-dove-gray">
                      I agree to HAPPY HOME's privacy policy and consent to being contacted about my inquiry. 
                      I understand my information will only be used to respond to my request and will 
                      not be shared with third parties. *
                    </span>
                  </label>
                </div>
                
                            <Button className="w-full bg-black text-white py-6 rounded-full text-lg font-medium">
              Send Message
            </Button>
                
                <p className="text-sm text-tryba-boulder text-center">
                  * Required fields. We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              Based in Oxford, we provide renewable energy installations across Oxfordshire and surrounding counties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-tryba-aqua-deep mb-3">Primary Areas</h3>
              <ul className="space-y-2 text-tryba-dove-gray">
                <li>Oxford</li>
                <li>Abingdon</li>
                <li>Banbury</li>
                <li>Bicester</li>
                <li>Didcot</li>
                <li>Witney</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-tryba-aqua-deep mb-3">Oxfordshire</h3>
              <ul className="space-y-2 text-tryba-dove-gray">
                <li>Chipping Norton</li>
                <li>Faringdon</li>
                <li>Henley-on-Thames</li>
                <li>Thame</li>
                <li>Wallingford</li>
                <li>Wantage</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-tryba-aqua-deep mb-3">Surrounding Counties</h3>
              <ul className="space-y-2 text-tryba-dove-gray">
                <li>Berkshire</li>
                <li>Buckinghamshire</li>
                <li>Gloucestershire</li>
                <li>Warwickshire</li>
                <li>Wiltshire</li>
                <li>Northamptonshire</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-tryba-aqua-deep mb-3">Project Types</h3>
              <ul className="space-y-2 text-tryba-dove-gray">
                <li>Residential homes</li>
                <li>Commercial buildings</li>
                <li>New build properties</li>
                <li>Retrofit installations</li>
                <li>Rural properties</li>
                <li>Urban developments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Company Information
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-tryba-cyan-light rounded-xl p-8 text-center">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Legal Information
              </h3>
              <div className="space-y-2 text-tryba-dove-gray">
                <p><strong>Company Name:</strong><br />The Renewable Energy Co-operative Ltd</p>
                <p><strong>Registration Number:</strong><br />992 4156 93</p>
                <p><strong>Registered Address:</strong><br />8 Benson Place, Oxford, OX2 6QH</p>
              </div>
            </div>

            <div className="bg-tryba-cyan-light rounded-xl p-8 text-center">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Certifications
              </h3>
              <div className="space-y-2 text-tryba-dove-gray">
                <p>MCS Certified Installer</p>
                <p>ELECSA Approved</p>
                <p>RECC Member</p>
                <p>Co-operatives UK Member</p>
                <p>Independent Warranty Association</p>
              </div>
            </div>

            <div className="bg-tryba-cyan-light rounded-xl p-8 text-center">
              <h3 className="text-xl font-medium text-tryba-aqua-deep mb-4">
                Quick Response
              </h3>
              <div className="space-y-2 text-tryba-dove-gray">
                <p><strong>Email:</strong> Response within 24 hours</p>
                <p><strong>Form:</strong> Response within 24 hours</p>
                <p><strong>Emergency:</strong> Leave message for next day callback</p>
              </div>
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
            Contact us today for your free consultation. Our team is ready to help you explore 
            the best renewable energy solutions for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="bg-white text-black border-white hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-medium"
            >
              Book Free Consultation
            </Button>
          </div>
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

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Users, Award, Heart, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Stuart Henderson",
    role: "Founder & Lead Engineer",
    bio: "15+ years in renewable energy with expertise in complex installations and system design.",
    image: "/1-small.jpg"
  },
  {
    name: "Sarah Mitchell", 
    role: "Technical Director",
    bio: "Specialist in heat pump technology and sustainable heating solutions.",
    image: "/2-small.jpg"
  },
  {
    name: "James Thompson",
    role: "Installation Manager", 
    bio: "MCS certified installer with expertise in solar PV and battery storage systems.",
    image: "/4-small.jpg"
  }
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Responsible",
    description: "We're putting in the work to ensure our business operations have a net-positive impact on humanity and the Earth beyond the superficial."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Effective", 
    description: "We focus on finding appropriate and practical solutions to fit your requirements and budget, whilst making our process as accessible as you desire."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Competent",
    description: "In a constantly changing industry, our team members continue to develop and test our technical capabilities in order to stay ahead of the curve."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Organised",
    description: "We've designed our workflow to limit excessive bureaucracy, unwarranted disruption, and unnecessary delays; resulting in a smooth process from start to finish."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-[#135872]">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6">
              About Cozy Home Solutions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Cozy Home Solutions is at the heart of the renewable energy transition. Founded in 2006, The Renewable Energy Co-operative 
              has 15 years experience blending enthusiasm for technological innovation with cooperative values.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-tryba-dove-gray">
                <p>
                  Founded in 2006, The Renewable Energy Co-operative has 15 years experience blending enthusiasm 
                  for technological innovation and practicality with cooperative values and a long-term, 
                  purpose-driven perspective towards effective energy solutions.
                </p>
                <p>
                  As an employee-owned business at the cutting-edge of an expansive industry, our people are 
                  acknowledged as our greatest and foremost asset; investment in one future benefits our shared future.
                </p>
                <p>
                  The complementary, and diverse, nature of the attitudes, competencies, and skills present within 
                  our team provides a bedrock upon which our common values and collective purpose are cultivated.
                </p>
                <p>
                  This commitment to shared prosperity is the driving force behind our steadfast work ethic and 
                  deep-rooted dedication to delivering the highest standards.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/9-small.jpg"
                alt="Solar panels on roof"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Our Values
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              These values are embodied within every member of our organisation; people who are living and working 
              with purpose naturally lead humanity to a more prosperous world for all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tryba-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-[#135872]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-[#135872] mb-3">
                  {value.title}
                </h3>
                <p className="text-tryba-dove-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperative Model */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <img 
                src="/13-small.jpg"
                alt="Solar panels on roof"
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-6">
                Why We're a Cooperative
              </h2>
              <div className="space-y-6 text-tryba-dove-gray">
                <p>
                  As a workers' cooperative, every member of our team has a stake in the business. Whether it's 
                  on call with one of our technicians, a collaborative effort towards a complex project design, 
                  or seeing our directors climb a scaffold to mount your solar panels; with Cozy Home Solutions you know we're in this together.
                </p>
                <p>
                  This model ensures that every decision we make is guided by our collective values and long-term 
                  thinking rather than short-term profit. It means we're invested in building lasting relationships 
                  with our customers and delivering exceptional service.
                </p>
                <p>
                  Our cooperative structure allows us to reinvest in our team's development, ensuring we stay 
                  at the forefront of renewable energy technology while maintaining our commitment to quality and sustainability.
                </p>
              </div>
              <div className="mt-8">
                <div className="bg-tryba-cyan-light rounded-xl p-6">
                  <h3 className="text-lg font-medium text-[#135872] mb-3">
                    Co-operatives UK Member
                  </h3>
                  <p className="text-tryba-dove-gray text-sm">
                    Registered as Co-operative Society 992 4156 93 with the Financial Conduct Authority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              Our experienced team combines over 40 years of renewable energy expertise with a passion 
              for sustainable solutions and cooperative values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-medium text-[#135872] mb-2">
                  {member.name}
                </h3>
                <p className="text-tryba-boulder font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-tryba-dove-gray text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-6">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-tryba-dove-gray mb-8">
                At Cozy Home Solutions, we're in this together. By embracing the elements today, we're contributing towards 
                a thriving world where energy sovereignty is ubiquitous; healthy, natural environments are abundant; 
                and meaningful opportunity is open to all individuals and communities for generations to come.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#135872] mb-2">500+</div>
                  <div className="text-tryba-dove-gray">Renewable installations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#135872] mb-2">15+</div>
                  <div className="text-tryba-dove-gray">Years of experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#135872] mb-2">2MW+</div>
                  <div className="text-tryba-dove-gray">Solar capacity installed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-tryba-cyan-light">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-normal text-tryba-cyprus mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-tryba-dove-gray max-w-3xl mx-auto">
              We maintain the highest standards through professional certifications and industry partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="text-2xl font-bold text-[#135872]">MCS</div>
              </div>
              <p className="text-sm text-tryba-dove-gray">MCS Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="text-2xl font-bold text-[#135872]">COOP</div>
              </div>
              <p className="text-sm text-tryba-dove-gray">Co-operatives UK</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="text-2xl font-bold text-[#135872]">RECC</div>
              </div>
              <p className="text-sm text-tryba-dove-gray">Renewable Energy Consumer Code</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="text-2xl font-bold text-[#135872]">IWA</div>
              </div>
              <p className="text-sm text-tryba-dove-gray">Independent Warranty Association</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="text-2xl font-bold text-[#135872]">ELECSA</div>
              </div>
              <p className="text-sm text-tryba-dove-gray">Electrical Safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#135872]">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Whether you're looking for renewable energy solutions for your home or interested in joining our cooperative, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#135872] px-8 py-6 rounded-full text-lg font-medium">
              Get Your Free Consultation
            </Button>
            <Button 
              variant="outline" 
              className="bg-white text-[#135872] border-white hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-medium"
            >
              Learn About Careers
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-tryba-alto">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-black text-lg font-normal mb-6">Cozy Home Solutions</h4>
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

import { Check, ChevronDown, Home, ShieldCheck, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Import product images
import ashpImage from "../assets/ashp.png";
import powerwallImage from "../assets/powerwall.png";
import biomassBoilerImage from "../assets/biomass-boiler.png";
import homeChargerImage from "../assets/home-charger.png";
import solarPanelImage from "../assets/solar-panel.png";
import solarThermalImage from "../assets/solar-thermal.png";

export default function Index() {
  const [selectedStep, setSelectedStep] = useState(1);
  
  const processSteps = [
    {
      id: 1,
      title: "Free Survey & Consultation",
      description: "We start with a comprehensive free survey to assess your home's insulation needs. Our experts will evaluate your property and recommend the best solutions tailored to your requirements and budget.",
      image: "/1-small.jpg"
    },
    {
      id: 2,
      title: "Professional Installation: 20+ years experience",
      description: "Our experienced team has over 20 years of expertise in insulation installation. We use premium materials like SupaBead, HYBRIS, and SuperFOIL to ensure the highest quality results.",
      image: "/2-small.jpg"
    },
    {
      id: 3,
      title: "Quality Assurance & Certification",
      description: "All our work is MCS and HIES certified, ensuring you receive quality installations that meet the highest industry standards. Your investment is fully protected.",
      image: "/4-small.jpg"
    },
    {
      id: 4,
      title: "Ongoing Support & Warranties",
      description: "We stand behind our work with comprehensive warranties - 30 years on solar panels, 10 years on batteries and inverters. Our team is here to provide ongoing support whenever you need it.",
      image: "/9-small.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center">
        <video 
          src="/cc.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-5 uppercase">
              Welcome to<br />
              Cozy Home Solutions
            </h1>
            <p className="text-white/95 text-base lg:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              One of the UK's most trusted home insulation companies. Improve comfort, lower energy bills, and future proof your property.
            </p>
            <Button className="bg-white text-[#135872] hover:bg-white/95 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-tryba-alto py-12">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <ShieldCheck className="w-10 h-10 text-[#135872]" />
              </div>
              <div>
                <h3 className="text-[#135872] text-xl font-medium mb-2">
                  20+ Years Experience
                </h3>
                <p className="text-tryba-dove-gray text-base">
                  One of the UK's most trusted home insulation companies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Home className="w-10 h-10 text-[#135872]" />
              </div>
              <div>
                <h3 className="text-[#135872] text-xl font-medium mb-2">
                  Lower Energy Bills
                </h3>
                <p className="text-tryba-dove-gray text-base">
                  Improve comfort and reduce heating costs year-round.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Sun className="w-10 h-10 text-[#135872]" />
              </div>
              <div>
                <h3 className="text-[#135872] text-xl font-medium mb-2">
                  Solar & Insulation
                </h3>
                <p className="text-tryba-dove-gray text-base">
                  Complete solutions from insulation to solar panels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <span className="block text-xs tracking-widest text-tryba-dove-gray uppercase mb-2">Our Services</span>
            <h2 className="text-[#135872] text-4xl lg:text-5xl font-normal leading-tight">
              High-Performance Insulation Solutions
            </h2>
            <p className="text-tryba-dove-gray text-lg mt-4 max-w-3xl">
              From loft insulation and cavity wall insulation to solar panel systems and loft boarding, we specialise in helping you improve comfort, lower energy bills, and future-proof your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                key: "spray-foam",
                title: "Spray Foam Insulation",
                image: "/shutterstock_1505440952-2048x1365.jpg",
                blurb:
                  "Over 20 years experience in residential and commercial spray foam. Solves heat loss and condensation issues on brick, stone, plasterboard, and more.",
                tags: ["20+ Years Experience", "Residential & Commercial"],
              },
              {
                key: "cavity-wall",
                title: "Cavity Wall Insulation",
                image: "/image0-21-pic.jpeg",
                blurb:
                  "SupaBead is next-generation graphite-based EPS insulation. Cost-effective full-fill solution that speeds up construction.",
                tags: ["SupaBead System", "High Performance"],
              },
              {
                key: "hybris",
                title: "HYBRIS Insulation",
                image: "/shutterstock_1505440952-2048x1365.jpg",
                blurb:
                  "Market leader in modern insulation with unique honeycomb structure. Significantly reduces energy consumption while providing maximum comfort.",
                tags: ["Actis HYBRIS", "Energy Efficient"],
              },
              {
                key: "superfoil",
                title: "SuperFOIL Insulation",
                image: "/cropped-2019-03-11-2-768x668.webp",
                blurb:
                  "Perfect for pitched roof construction. Easy installation with no excessive measuring or cutting required. Reduces thermal bridging issues.",
                tags: ["Quick Installation", "Retrofit & New Build"],
              },
              {
                key: "solar",
                title: "Solar Panels",
                image: solarPanelImage,
                blurb:
                  "Fox Elite Installer. From small residential setups to commercial solar power plants. Lower bills, energy independence, reduced carbon footprint.",
                tags: ["Fox Elite Installer", "MCS Certified"],
              },
              {
                key: "loft-boarding",
                title: "Loft Boarding",
                image: "/shutterstock_237359374-2048x1365.jpg",
                blurb:
                  "Durable and cost-effective loft flooring systems. Create safe, usable storage areas while maintaining proper insulation protection.",
                tags: ["Safe Storage", "Meets Regulations"],
              },
            ].map((product) => (
              <Dialog key={product.key}>
                <DialogTrigger asChild>
                  <button className="group text-left bg-white border border-tryba-alto rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="relative overflow-hidden rounded-xl mb-6 bg-white">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-56 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-normal text-black mb-2">{product.title}</h3>
                    <p className="text-tryba-dove-gray mb-4 text-sm">
                      {product.blurb}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-2 bg-tryba-cyan-light text-tryba-aqua-deep px-2 py-1 rounded text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-tryba-aqua-deep" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{product.title}</DialogTitle>
                    <DialogDescription className="text-base">
                      {product.blurb}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-56 object-contain bg-white rounded-lg"
                    />
                    <div className="space-y-3">
                      {[
                        "Professional installation",
                        "20+ years experience",
                        "Free quote & survey",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#135872] mt-1" />
                          <span className="text-tryba-dove-gray">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>



      {/* Solar Panel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#135872] text-4xl lg:text-5xl font-normal leading-tight mb-6">
                The Solar Solution
              </h2>
              <p className="text-tryba-dove-gray text-lg leading-relaxed mb-6">
                From a small solar set-up on your residential property to a full-scale solar power plant atop your commercial premises. We're Fox Elite Installers here to guide you in your solar journey.
              </p>
              <p className="text-tryba-dove-gray text-lg leading-relaxed mb-6">
                The advantages of solar panels include lower electricity bills, energy independence and reduced carbon footprint. MCS certified installations with HIES protection.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">450kW Bi-Facial Black on Black Panels</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">Modula Lithium-Ion Battery System</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">30 Year Panel Warranty / 10 Year Battery Warranty</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">Flexible Monthly Payments from £75/month</span>
                </div>
              </div>
              <Button className="bg-[#135872] text-white px-10 py-6 rounded-full">
                Get Instant Solar Quote
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/Panel-bat6.webp"
                alt="Solar panels and battery system installation"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-sm">
                <h3 className="text-xl font-medium text-[#135872] mb-2">Easy, Affordable Solar</h3>
                <p className="text-2xl font-bold text-[#135872] mb-1">£0 UPFRONT</p>
                <p className="text-lg text-tryba-dove-gray mb-3">From £75 A Month</p>
                <p className="text-xs text-tryba-dove-gray">12 Panels • 3.6kW Inverter • 5kW Battery • MCS Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Loft Boarding Section */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#135872] text-4xl lg:text-5xl font-normal leading-tight mb-6">
                Boarding Lofts The Easy Way
              </h2>
              <p className="text-tryba-dove-gray text-xl leading-relaxed mb-6">
                Looking to upgrade your storage space? Our loft boarding systems offer a durable and cost-effective way to create safe, usable storage areas without the expense of a full renovation.
              </p>
              <p className="text-tryba-dove-gray text-xl leading-relaxed mb-6">
                We follow all loft boarding regulations, ensuring proper insulation protection and structural safety. Get more from your home - maximize storage and improve functionality with tailored solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">Meets All Loft Boarding Regulations</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">Proper Insulation Protection</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">Structural Safety Guaranteed</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#135872] mt-1" />
                  <span className="text-tryba-dove-gray">Cost-Effective Storage Solution</span>
                </div>
              </div>
              <Button className="bg-[#135872] text-white px-10 py-6 rounded-full">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/shutterstock_237359374-2048x1365.jpg"
                alt="Loft boarding installation"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[#135872] text-4xl lg:text-5xl font-normal leading-tight mb-4">
                With Over 20 Years Experience Specialising in Insulation
              </h2>
              <p className="text-tryba-dove-gray text-xl leading-relaxed">
                You can trust Cozy Home Solutions to aid your home improvement journey
              </p>
            </div>
            <div className="lg:pl-20 text-center lg:text-left">
              <p className="text-tryba-dove-gray text-lg leading-relaxed mb-4">
                We are proud to be one of the UK's leading insulation companies. We specialise in both traditional and spray foam insulation, cavity wall insulation, conservatory roof insulation, and Solar Energy.
              </p>
              <p className="text-tryba-dove-gray text-lg leading-relaxed">
                We offer a wide range of solutions to help you on your home improvement journey, so you can trust us to provide high-quality insulation services that will keep your home warm and efficient for years to come!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[98vw] mx-auto px-4 lg:px-8">
          <div className="bg-[#135872] rounded-xl p-6 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-16">
              <img 
                src="/1-small.jpg"
                alt="Solar panels on roof"
                className="w-full h-48 lg:h-80 object-cover rounded-xl"
              />
              <img 
                src="/2-small.jpg"
                alt="Solar panels on roof"
                className="w-full h-48 lg:h-80 object-cover rounded-xl"
              />
            </div>
            
            <div className="border-t border-white/20 pt-8 lg:pt-16">
              <h2 className="text-white text-2xl lg:text-4xl xl:text-5xl font-normal leading-tight mb-6 lg:mb-12 text-center">
                Get a Free Quote Today
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-white text-base lg:text-xl leading-relaxed mb-6 lg:mb-8 text-center">
                  Whether you're exploring wall insulation, thermal insulation, solar panels for your home, or a complete energy upgrade, we're here to help. We guarantee to beat any like-for-like quote – that's our Cozy Promise.
                </p>
                <div className="text-center space-y-4">
                  <Button className="bg-white text-[#135872] px-10 py-6 rounded-full text-lg font-medium hover:bg-gray-100">
                    Get Free Quote & Survey
                  </Button>
                  <p className="text-white text-sm">
                    Finance available from 10.9% APR Representative
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-tryba-cyprus text-4xl lg:text-5xl font-normal leading-tight mb-6">
                We're with you, every step of the way
              </h2>
              <div className="w-full max-w-lg">
                <img 
                  src={processSteps.find(step => step.id === selectedStep)?.image}
                  alt="Process step visualization"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-8">
              {processSteps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex gap-8 border-b border-tryba-alto pb-8 cursor-pointer transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg -m-4 ${
                    selectedStep === step.id ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <span className={`text-base pt-2 font-medium ${
                    selectedStep === step.id ? 'text-[#135872]' : 'text-tryba-dove-gray'
                  }`}>
                    {String(step.id).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-3xl font-normal mb-4 ${
                      selectedStep === step.id ? 'text-[#135872]' : 'text-tryba-dove-gray'
                    }`}>
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-tryba-dove-gray text-base leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SuperFOIL Section */}
      <section className="border-b border-tryba-alto py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[#135872] text-4xl lg:text-5xl font-normal leading-tight">
              What is our SuperFOIL Solution?
            </h2>
            <p className="text-tryba-dove-gray text-xl mt-6 max-w-4xl">
              SuperFOIL is the perfect insulation choice for your pitched roof construction, from retrofit applications to new builds. SuperFOIL manufactures a wide range of products suitable for under rafter and over rafter installation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <div className="group cursor-pointer">
              <img 
                src="/9-small.jpg"
                alt="SuperFOIL insulation installation"
                className="w-full h-96 object-cover rounded-xl mb-4"
              />
              <div className="flex gap-2 mb-4">
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Quick Installation</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Retrofit</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">New Build</span>
              </div>
              <h3 className="text-black text-2xl font-normal leading-tight">
                Easy and Quick Fitting Methods
              </h3>
              <p className="text-tryba-dove-gray mt-2">
                No excessive measuring or cutting required like standard loft insulation. Our innovative continuous layer installation reduces time while avoiding thermal bridging.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <img 
                src="/13-small.jpg"
                alt="Professional insulation service"
                className="w-full h-96 object-cover rounded-xl mb-4"
              />
              <div className="flex gap-2 mb-4">
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">20+ Years</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Expert Team</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Premium Quality</span>
              </div>
              <h3 className="text-black text-2xl font-normal leading-tight">
                Years of experience mean highest quality
              </h3>
              <p className="text-tryba-dove-gray mt-2">
                We constantly adapt our processes to ensure we always provide the highest quality installations using the best materials available.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[#135872] text-white px-10 py-6 rounded-full">
              Learn More About SuperFOIL
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-[#135872] text-4xl lg:text-5xl font-normal leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="lg:pl-28">
              <p className="text-tryba-dove-gray text-xl leading-relaxed">
                Spray foam insulation, cavity wall, HYBRIS, SuperFOIL, solar panels, and loft boarding. Find all the answers to your questions about home insulation and energy solutions.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="border border-tryba-alto rounded-xl p-4 mb-8">
              {[
                {
                  question: "What type of insulation is best for my home?",
                  answer: "The best insulation depends on your property type and needs. Spray foam is excellent for hard-to-reach areas and complex surfaces. Cavity wall insulation with SupaBead is perfect for standard cavity walls. HYBRIS and SuperFOIL work brilliantly for loft and roof insulation. We offer free surveys to recommend the optimal solution for your home."
                },
                {
                  question: "How much can I save with proper insulation?",
                  answer: "Proper insulation can reduce your energy bills by 25-40% annually. Loft insulation alone can save up to £355 per year, while cavity wall insulation can save around £395 per year. Combined with our solar panel systems, you could see even greater savings and faster return on investment."
                },
                {
                  question: "What is spray foam insulation and where can it be used?",
                  answer: "Spray foam insulation is a versatile solution that expands to fill gaps and create an airtight seal. With 20+ years experience, we can apply it to brick, stone, plasterboard, corrugated sheets, concrete, and metal. It solves heat loss and condensation issues while providing superior thermal performance for both residential and commercial properties."
                },
                {
                  question: "How long does insulation installation take?",
                  answer: "Most insulation projects are completed quickly. Loft insulation typically takes 1-2 days, cavity wall insulation can be done in a single day, and spray foam installations usually take 1-3 days depending on the area. We work efficiently to minimize disruption to your home."
                },
                {
                  question: "Do you offer solar panel financing?",
                  answer: "Yes! We offer flexible financing from £75 per month with £0 upfront cost. Finance is available from 10.9% APR Representative. Our solar packages include 450kW Bi-Facial Black on Black Panels, Modula Lithium-Ion Battery, Fox Hybrid Inverter, with 30-year panel warranty and 10-year battery warranty."
                },
                {
                  question: "What warranties do you provide?",
                  answer: "Our solar panels come with a 30-year warranty, while batteries and inverters have 10-year warranties. All installations are MCS and HIES certified. We also offer ongoing maintenance and support packages to ensure your system performs optimally for years to come."
                },
                {
                  question: "Why choose Cozy Home Solutions?",
                  answer: "With 20+ years experience, we're one of the UK's most trusted insulation companies. We're Fox Elite Installers, offer a price-match guarantee (the Cozy Promise), use only premium materials like SupaBead, HYBRIS, and SuperFOIL, and provide comprehensive service from free surveys to ongoing maintenance and support."
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-tryba-alto last:border-b-0">
                  <button 
                    className="flex items-center justify-between w-full text-left py-4 px-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setSelectedStep(selectedStep === index + 1 ? 0 : index + 1)}
                  >
                    <span className="text-black text-xl font-normal pr-8">{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-black flex-shrink-0 transition-transform ${
                        selectedStep === index + 1 ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {selectedStep === index + 1 && (
                    <div className="px-2 pb-4">
                      <p className="text-tryba-dove-gray text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
                                                     <Button className="bg-[#135872] text-white px-10 py-6 rounded-full">
              View FAQ
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="bg-[#135872] py-20">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl lg:text-4xl font-normal mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Cozy Home Solutions is proud to be MCS certified, HIES protected, and a Fox Elite Installer. We're fully accredited and regulated by the Financial Conduct Authority.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-white text-xl font-medium mb-2">MCS Certified</h3>
              <p className="text-white/80 text-sm">Quality installations to the highest standards</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-white text-xl font-medium mb-2">Fox Elite Installer</h3>
              <p className="text-white/80 text-sm">Premium solar panel systems expert</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-white text-xl font-medium mb-2">HIES Protected</h3>
              <p className="text-white/80 text-sm">Your investment is fully protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#135872] border-t border-[#0d4557]">
        <div className="max-w-[98vw] mx-auto px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Cozy Home Solutions</h4>
              <div className="space-y-4">
                <a href="#" className="block text-white/80 text-xl hover:text-white">Home</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Insulation</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Solar Panels</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Loft Boarding</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Blog</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Commercial</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
              <div className="space-y-4">
                <a href="#" className="block text-white/80 text-xl hover:text-white">Spray Foam Insulation</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Cavity Wall Insulation</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">HYBRIS Insulation</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">SuperFOIL Insulation</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Solar Panels</a>
                <a href="#" className="block text-white/80 text-xl hover:text-white">Loft Boarding</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <a href="tel:08006889666" className="block text-white/80 text-xl hover:text-white">0800 688 9666</a>
                <a href="mailto:hello@cozyhomesolutions.co.uk" className="block text-white/80 text-xl hover:text-white">hello@cozyhomesolutions.co.uk</a>
                <p className="text-white/80 text-base">Unit 2, Old Station Yard</p>
                <p className="text-white/80 text-base">Watlington Road, Cowley</p>
                <p className="text-white/80 text-base">Oxford, OX4 6FE</p>
                <p className="text-white/80 text-sm mt-4">MON - FRI: 09:00 - 17:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="text-center space-y-4">
              <p className="text-white/70 text-sm">
                Cozy Home Solutions Ltd is an appointed representative of HTG Finance Limited which is authorised and regulated by the Financial Conduct Authority.
              </p>
              <p className="text-white/70 text-sm">
                Registered in England No: 12245890 | VAT Registration No: 339543185
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

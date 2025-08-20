import { Check, ChevronDown, MapPin, Car, Home, Leaf, ShieldCheck, Umbrella, Sun, Play } from "lucide-react";
import { useState } from "react";
import SplineAnimation from "../components/SplineAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      title: "Design & Consultation",
      description: "Our consultation process is purposefully designed to determine whether an investment in renewable technologies is right for you. If not, we'll be honest, and advise appropriate actions for your situation.",
      image: "/1-small.jpg"
    },
    {
      id: 2,
      title: "System Installation: 40+ years combined experience",
      description: "Our team has over 40 years of combined practical experience within the energy industry and is skilled across multiple technical disciplines.",
      image: "/2-small.jpg"
    },
    {
      id: 3,
      title: "Maintenance & Repair: Complex technologies support",
      description: "As with everything in life - complex technologies require ongoing support. We'll be here to provide assistance when you need it.",
      image: "/4-small.jpg"
    },
    {
      id: 4,
      title: "Cooperative values: We're in this together",
      description: "As a workers' cooperative, every member of our team has a stake in the business and is committed to delivering exceptional service.",
      image: "/9-small.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[770px] flex items-start pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/person-near-alternative-energy-plant.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-base mb-6">
              Renewable energy solutions for a sustainable future
            </p>
            <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6 uppercase">
              Embrace the power<br />
              of nature
            </h1>
            <Button className="bg-[#588157] text-white px-10 py-6 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-tryba-alto py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 flex-shrink-0">
                <Car className="w-8 h-8 text-[#588157]" />
              </div>
              <div>
                <h3 className="text-[#588157] text-xl font-medium mb-1">
                  Responsible solutions
                </h3>
                <p className="text-tryba-dove-gray text-sm">
                  Net-positive impact on humanity and the Earth.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 flex-shrink-0">
                <Home className="w-8 h-8 text-[#588157]" />
              </div>
              <div>
                <h3 className="text-[#588157] text-xl font-medium mb-1">
                  Effective energy systems
                </h3>
                <p className="text-tryba-dove-gray text-sm">
                  Practical solutions to fit your requirements and budget.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 flex-shrink-0">
                <Leaf className="w-8 h-8 text-[#588157]" />
              </div>
              <div>
                <h3 className="text-[#588157] text-xl font-medium mb-1">
                  Competent & organised
                </h3>
                <p className="text-tryba-dove-gray text-sm">
                  40+ years combined experience in renewable energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <span className="block text-xs tracking-widest text-tryba-dove-gray uppercase mb-2">Technology</span>
            <h2 className="text-[#588157] text-4xl lg:text-5xl font-normal leading-tight">
              To harness the elements
            </h2>
            <p className="text-tryba-dove-gray text-lg mt-4 max-w-3xl">
              Renewable resources provide a reliable and sustainable supply of energy — and there are many
              technologies that can work beautifully together in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                key: "ashp",
                title: "Air Source Heat Pumps",
                image: ashpImage,
                blurb:
                  "A full central heating solution that provides heating and hot water by transferring heat between outdoor air and your home.",
                tags: ["Green Homes Grant", "Renewable Heat Incentive"],
              },
              {
                key: "battery",
                title: "Battery Storage",
                image: powerwallImage,
                blurb:
                  "Store solar electricity to power your home at night or during outages and make the most of smart tariffs.",
                tags: ["Certified Tesla Powerwall Installer"],
              },
              {
                key: "biomass",
                title: "Biomass Boilers",
                image: biomassBoilerImage,
                blurb:
                  "A carbon-neutral heating and hot water solution using wood pellets, chips or logs.",
                tags: ["Green Homes Grant", "Renewable Heat Incentive"],
              },
              {
                key: "ev",
                title: "EV Charging",
                image: homeChargerImage,
                blurb:
                  "Charge at home conveniently and take advantage of smart or off‑peak tariffs for the lowest running costs.",
                tags: ["Smart Meter Ready"],
              },
              {
                key: "pv",
                title: "Solar PV",
                image: solarPanelImage,
                blurb:
                  "Generate clean electricity for your home and sell surplus back to the grid through the Smart Export Guarantee.",
                tags: ["Smart Export Guarantee"],
              },
              {
                key: "thermal",
                title: "Solar Thermal",
                image: solarThermalImage,
                blurb:
                  "Collect sunlight to heat water for your home, reduce boiler runtime and cut gas usage.",
                tags: ["Green Homes Grant", "Renewable Heat Incentive"],
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
                        "Professional design & installation",
                        "MCS certified quality",
                        "Ongoing maintenance & support",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#588157] mt-1" />
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



      {/* R-ECO Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[#588157] text-4xl lg:text-5xl font-normal leading-tight text-center mb-16">
            R-ECO is at the heart of the renewable energy transition
          </h2>
          
          {/* Video Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="relative rounded-xl overflow-hidden">
              <video 
                src="/cc.mp4"
                className="w-full h-96 object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#588157] flex-shrink-0" />
                <span className="text-[#588157] text-lg sm:text-2xl font-medium text-center">
                  MCS Certified installations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Umbrella className="w-5 h-5 sm:w-6 sm:h-6 text-[#588157] flex-shrink-0" />
                <span className="text-[#588157] text-lg sm:text-2xl font-medium text-center">
                  Worker's cooperative values
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-[#588157] flex-shrink-0" />
                <span className="text-[#588157] text-lg sm:text-2xl font-medium text-center">
                  15+ years experience
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[#588157] text-white px-10 py-6 rounded-full">
              About R-ECO
            </Button>
          </div>
        </div>
      </section>



      {/* Main Solutions Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="text-center lg:text-left">
              <h2 className="text-tryba-cyprus text-4xl lg:text-5xl font-normal leading-tight mb-4">
                Making our planet more sustainable with R-ECO renewable energy solutions!
              </h2>
            </div>
            <div className="lg:pl-20 text-center lg:text-left">
              <p className="text-tryba-dove-gray text-xl leading-relaxed mb-2">
                Over 15 years we've completed hundreds of installations and delivered bespoke energy systems of the highest standard.
              </p>
              <p className="text-tryba-dove-gray text-xl leading-relaxed">
                As a <strong>worker's cooperative</strong>, every member of our team has a stake in the business and we're committed to cooperative values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#588157] rounded-xl p-6 lg:p-20">
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
                Renewable energy could be the next step on your path to a sustainable future
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-white text-base lg:text-xl leading-relaxed mb-6 lg:mb-8 text-center">
                  We know upgrading to a renewable energy system is a big decision, and that's why we offer a free, no-strings-attached consultation
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-full p-1">
                    <div className="hidden sm:flex items-center gap-3 flex-1 px-4 py-3">
                      <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <Input
                        placeholder="Start your consultation journey"
                        className="border-0 text-base bg-transparent focus:ring-0 px-0 placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="bg-white text-[#588157] px-10 py-4 rounded-full text-lg font-medium">
                      Free Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                    selectedStep === step.id ? 'text-[#588157]' : 'text-tryba-dove-gray'
                  }`}>
                    {String(step.id).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-3xl font-normal mb-4 ${
                      selectedStep === step.id ? 'text-[#588157]' : 'text-tryba-dove-gray'
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

      {/* SOLAR PV Card Section */}
      <section className="py-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full">
            {/* SOLAR PV Card */}
            <div className="relative h-[900px] rounded-xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[#588157] rounded-xl">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex-1 relative flex flex-col items-center justify-center">
                    <div className="w-full h-[700px] rounded-xl overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center mx-auto">
                        <SplineAnimation 
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#588157]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                                <h3 className="text-white text-3xl font-normal mb-4">
              Solar PV Domestic Installation
            </h3>
                    <p className="text-white text-xl leading-relaxed mb-6">
                      Generate solar energy to power your home, store electricity in a battery for later use, or sell back to the grid with the Smart Export Guarantee scheme.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Design & Consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Technical Survey</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">System Installation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">MCS Certified</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Maintenance & Repair</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Smart Export Guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* Guide Section */}
      <section className="border-b border-tryba-alto py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[#588157] text-4xl lg:text-5xl font-normal leading-tight">
              To harness the elements - renewable technologies
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
                          <div className="group cursor-pointer">
                <img 
                  src="/9-small.jpg"
                  alt="Solar panels on roof"
                  className="w-full h-96 object-cover rounded-xl mb-4"
                />
              <div className="flex gap-2 mb-4">
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Solar PV</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Battery Storage</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Smart Export</span>
              </div>
              <h3 className="text-black text-2xl font-normal leading-tight">
                Solar PV installation for your home
              </h3>
            </div>
            
                          <div className="group cursor-pointer">
                <img 
                  src="/13-small.jpg"
                  alt="Solar panels on roof"
                  className="w-full h-96 object-cover rounded-xl mb-4"
                />
              <div className="flex gap-2 mb-4">
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Heat Pumps</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">EV Charging</span>
                <span className="bg-black/5 text-black px-2 py-1 rounded text-sm">Biomass</span>
              </div>
              <h3 className="text-black text-2xl font-normal leading-tight">
                Renewable energy technologies guide
              </h3>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[#588157] text-white px-10 py-6 rounded-full">
              View all technologies
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
                          <h2 className="text-[#588157] text-4xl lg:text-5xl font-normal leading-tight">
              R-ECO answers all your questions about renewable energy
            </h2>
            </div>
            <div className="lg:pl-28">
              <p className="text-tryba-dove-gray text-xl leading-relaxed">
                Heat pumps, solar PV, battery storage, EV charging, biomass, solar thermal. Find all the answers to your questions thanks to our renewable energy expertise.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="border border-tryba-alto rounded-xl p-4 mb-8">
              {[
                {
                  question: "What renewable energy system is right for my home?",
                  answer: "The best renewable energy system depends on your home's location, roof orientation, energy consumption, and budget. Solar PV is excellent for most homes, while heat pumps work well for heating and cooling. Our consultation process evaluates your specific needs to recommend the optimal solution."
                },
                {
                  question: "What are the benefits of air source heat pumps?",
                  answer: "Air source heat pumps provide efficient heating and cooling, reduce carbon emissions by up to 70%, lower energy bills, require minimal maintenance, and can work in temperatures as low as -15°C. They're also eligible for government grants and can increase your property value."
                },
                {
                  question: "How does battery storage work with solar PV?",
                  answer: "Battery storage captures excess solar energy during the day for use at night or during power outages. This maximizes your solar investment, reduces grid dependency, and can provide backup power. Smart systems automatically manage charging and discharging for optimal efficiency."
                },
                {
                  question: "What government incentives are available?",
                  answer: "Current incentives include the Smart Export Guarantee (SEG) for selling excess energy, 0% VAT on energy-saving materials, and potential grants through local authorities. We stay updated on all available schemes to maximize your savings and return on investment."
                },
                {
                  question: "How long does a renewable energy installation take?",
                  answer: "Typical installations take 1-3 days for solar PV, 2-5 days for heat pumps, and 1-2 days for battery storage. The entire process from consultation to completion usually takes 4-8 weeks, including design, permits, and grid connection approval."
                },
                {
                  question: "What maintenance is required for my system?",
                  answer: "Solar PV systems require minimal maintenance - just annual inspections and occasional cleaning. Heat pumps need annual servicing, while batteries require periodic health checks. We offer comprehensive maintenance packages to ensure optimal performance and longevity."
                },
                {
                  question: "How do I become energy independent?",
                  answer: "Energy independence comes from combining multiple renewable technologies: solar PV for generation, battery storage for energy management, heat pumps for efficient heating, and smart controls for optimization. Our systems can reduce grid dependency by up to 80-90%."
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
                                                     <Button className="bg-[#588157] text-white px-10 py-6 rounded-full">
              View FAQ
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Info Section */}
      <section className="bg-[#588157] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h3 className="text-white text-xl font-medium mb-4">
              Founded in 2006, The Renewable Energy Co-operative
            </h3>
            <p className="text-tryba-alto text-base leading-relaxed mb-6">
              Has 15 years experience blending enthusiasm for technological innovation and practicality with cooperative values and a long-term, purpose-driven perspective towards effective energy solutions.
            </p>
            <p className="text-tryba-alto text-base font-bold mb-6">
              At R-ECO, we're in this together
            </p>
            <p className="text-tryba-alto text-base leading-relaxed">
              By embracing the elements today, we're contributing towards a thriving world where energy sovereignty is ubiquitous.
            </p>
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

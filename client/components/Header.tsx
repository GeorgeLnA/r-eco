import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#135872] via-[#1a6d8c] to-[#135872] shadow-lg backdrop-blur-sm border-b border-white/10">
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-[#0d4557]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+44 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@cozyhomesolutions.co.uk</span>
              </div>
            </div>
            <div className="text-white/60">
              Eco-Friendly Solutions for Your Home
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img
                  src="/CozyHome-Solutions.webp"
                  alt="Cozy Home Solutions Logo"
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation - Center */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/20 shadow-md backdrop-blur-sm border border-white/30"
                      : "text-white/90 hover:text-white hover:bg-white/10 hover:shadow-sm hover:backdrop-blur-sm hover:border hover:border-white/20"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Mobile Menu Button - Right */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <Button 
              asChild
              className="hidden lg:inline-flex bg-white text-[#135872] hover:bg-white/95 font-semibold rounded-full px-7 py-3 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-transparent hover:border-white/50"
            >
              <Link to="/consultation">Free Consultation</Link>
            </Button>

            {/* Secondary CTA for mobile */}
            <Button 
              asChild
              className="lg:hidden bg-white/20 text-white hover:bg-white/30 font-medium rounded-full px-5 py-2.5 text-sm backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Link to="/consultation">Quote</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`lg:hidden p-3 rounded-full transition-all duration-200 backdrop-blur-sm border ${
                mobileMenuOpen 
                  ? "bg-white/25 border-white/40 shadow-md" 
                  : "bg-white/15 border-white/25 hover:bg-white/25 hover:border-white/40 hover:shadow-md"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-white" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-3 pt-3 pb-6 space-y-2 bg-[#0d4557]/95 rounded-xl mt-3 backdrop-blur-sm border border-white/20 shadow-xl">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-5 py-3.5 text-base font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/25 font-semibold shadow-md border border-white/30"
                        : "text-white/90 hover:text-white hover:bg-white/15 hover:shadow-sm hover:border hover:border-white/20"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile contact info */}
              <div className="pt-5 mt-4 border-t border-white/25">
                <div className="px-5 py-3 space-y-3 text-sm text-white/80">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-white/15 rounded-full">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <span>+44 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-white/15 rounded-full">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <span>info@cozyhomesolutions.co.uk</span>
                  </div>
                </div>
                
                <div className="px-5 py-4">
                  <Button 
                    asChild
                    className="w-full bg-white text-[#135872] hover:bg-white/95 font-semibold rounded-full py-3.5 shadow-md hover:shadow-lg transition-all duration-200 border border-transparent hover:border-white/50"
                  >
                    <Link to="/consultation" onClick={() => setMobileMenuOpen(false)}>
                      Get Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

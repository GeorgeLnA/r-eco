import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Consultation", href: "/consultation" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-tryba-alto">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">

              <span className="ml-2 text-xl font-semibold text-[#588157]">R-ECO</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-[#588157]"
                    : "text-tryba-dove-gray hover:text-[#588157]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              asChild
              className="hidden lg:inline-flex bg-[#588157] text-white rounded-full px-6"
            >
              <Link to="/consultation">Free Consultation</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-tryba-aqua-deep" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-tryba-aqua-deep" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-[#588157] bg-tryba-cyan-light"
                    : "text-tryba-dove-gray hover:text-[#588157] hover:bg-tryba-cyan-light"
                }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild
                  className="w-full bg-[#588157] text-white rounded-full"
                >
                  <Link to="/consultation">Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

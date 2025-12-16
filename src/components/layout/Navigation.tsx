'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brand: 'Tes',
  links: [
    { name: 'Home', href: '#hero' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ],
  ctaText: 'Get Started',
  ctaHref: '/signup',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#hero')}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              data-editable="brand"
            >
              {config.brand}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {config.links.map((link, idx) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-editable={`links[${idx}].name`}
                  data-editable-href={`links[${idx}].href`}
                  data-href={link.href}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-editable="ctaText"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              {config.ctaText}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {config.links.map((link, idx) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                  data-editable={`links[${idx}].name`}
                  data-editable-href={`links[${idx}].href`}
                  data-href={link.href}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-editable="ctaText"
                  data-editable-href="ctaHref"
                  data-href={config.ctaHref}
                >
                  {config.ctaText}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

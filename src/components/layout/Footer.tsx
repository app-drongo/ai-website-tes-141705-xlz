'use client';

import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brand: 'Tes',
  description: 'Automate your business operations with intelligent workflows.',
  links: [
    {
      title: 'Product',
      items: [
        { name: 'Features', href: '#hero' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Status', href: '/status' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Security', href: '/security' },
      ]
    }
  ],
  copyright: '© 2024 Tes. All rights reserved.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-foreground" data-editable="brand">
                {config.brand}
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md" data-editable="description">
              {config.description}
            </p>
          </div>

          {/* Links Sections */}
          {config.links.map((section, sectionIdx) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4" data-editable={`links[${sectionIdx}].title`}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-editable={`links[${sectionIdx}].items[${itemIdx}].name`}
                      data-editable-href={`links[${sectionIdx}].items[${itemIdx}].href`}
                      data-href={item.href}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground" data-editable="copyright">
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

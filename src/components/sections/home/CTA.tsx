'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Shield } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  title: 'Ready to Transform Your Business?',
  subtitle: 'Join thousands of companies already automating their workflows and boosting productivity by 40%. Start your free trial today and see results in minutes.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Schedule Demo',
  secondaryCtaHref: '/demo',
  trustBadge: '14-day free trial • No credit card required',
  backgroundImageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
  stats: [
    { icon: 'Users', value: '10,000+', label: 'Active Users' },
    { icon: 'TrendingUp', value: '40%', label: 'Productivity Boost' },
    { icon: 'Shield', value: '99.9%', label: 'Uptime' },
    { icon: 'Zap', value: '5min', label: 'Setup Time' }
  ],
  features: [
    'No setup fees or hidden costs',
    'Cancel anytime with one click',
    '24/7 customer support included',
    'Enterprise-grade security'
  ]
} as const;

type CTAProps = Partial<typeof DEFAULT_CTA>;

export default function CTA(props: CTAProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();

  const handlePrimaryCTA = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryCTA = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Users: Users,
      TrendingUp: TrendingUp,
      Shield: Shield,
      Zap: Zap,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="cta" className="bg-background text-foreground py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.backgroundImageUrl}
          alt="Call to action background"
          fill
          className="object-cover opacity-5"
          data-editable-src="backgroundImageUrl"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span data-editable="title">{config.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group px-8 py-4 text-lg"
                onClick={handlePrimaryCTA}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 px-8 py-4 text-lg"
                onClick={handleSecondaryCTA}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Trust Badge */}
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 text-base px-4 py-2"
            >
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {config.stats.map((stat, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur-sm text-card-foreground border-border hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center text-primary mb-3">
                    {getIcon(stat.icon)}
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features List */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span data-editable={`features[${idx}]`}>{feature}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to get started? It takes less than 5 minutes to set up.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 group px-8 py-4 text-lg"
              onClick={handlePrimaryCTA}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
            >
              <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg" />
    </section>
  );
}

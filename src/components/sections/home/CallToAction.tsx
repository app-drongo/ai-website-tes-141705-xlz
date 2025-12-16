'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Star } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  title: 'Ready to Transform Your Business?',
  subtitle: 'Join thousands of companies already using our automation platform to streamline operations and boost productivity.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Schedule Demo',
  secondaryCtaHref: '/demo',
  features: [
    'No setup fees',
    '14-day free trial',
    'Cancel anytime',
    '24/7 support included'
  ],
  stats: [
    { icon: 'Users', value: '10,000+', label: 'Active Users' },
    { icon: 'TrendingUp', value: '40%', label: 'Productivity Boost' },
    { icon: 'Star', value: '4.9/5', label: 'Customer Rating' }
  ],
  trustBadge: 'Trusted by industry leaders',
  urgency: 'Limited time: Get 2 months free with annual plans',
  backgroundPattern: true
} as const;

type CallToActionProps = Partial<typeof DEFAULT_CTA>;

export default function CallToAction(props: CallToActionProps) {
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
      Star: Star,
      Zap: Zap,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="cta" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 text-foreground py-20 relative overflow-hidden">
      {/* Background Pattern */}
      {config.backgroundPattern && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgency Badge */}
        {config.urgency && (
          <div className="text-center mb-8">
            <Badge 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors animate-pulse"
            >
              <Zap className="h-3 w-3 mr-1" />
              <span data-editable="urgency">{config.urgency}</span>
            </Badge>
          </div>
        )}

        {/* Main Content */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Trust Badge */}
          <div className="mb-8">
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={handlePrimaryCTA}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
            >
              <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 group backdrop-blur-sm bg-background/50"
              onClick={handleSecondaryCTA}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
            >
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {config.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span data-editable={`features[${idx}]`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {config.stats.map((stat, idx) => (
            <Card key={idx} className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-2xl font-bold mb-1">
                  <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            No credit card required • Start in minutes • Cancel anytime
          </p>
          <Button
            onClick={handlePrimaryCTA}
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
            data-editable-href="primaryCtaHref"
            data-href={config.primaryCtaHref}
          >
            <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

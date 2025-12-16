'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  Smartphone, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Businesses',
  subtitle: 'Everything you need to automate your workflows and boost productivity. Our comprehensive platform delivers enterprise-grade capabilities with simple, intuitive design.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      icon: 'Zap',
      title: 'AI-Powered Automation',
      description: 'Intelligent workflows that learn and adapt to your business processes, reducing manual tasks by up to 80%.',
      benefits: ['Smart task routing', 'Predictive analytics', 'Auto-optimization'],
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards to keep your data safe.',
      benefits: ['256-bit encryption', 'Multi-factor auth', 'Audit trails'],
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: 'Users',
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools that keep your team synchronized and productive across all projects.',
      benefits: ['Live editing', 'Team workspaces', 'Role-based access'],
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: 'BarChart3',
      title: 'Advanced Analytics',
      description: 'Comprehensive insights and reporting to track performance and identify optimization opportunities.',
      benefits: ['Custom dashboards', 'Real-time metrics', 'Export reports'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: 'Clock',
      title: '24/7 Monitoring',
      description: 'Continuous system monitoring with instant alerts and 99.9% uptime guarantee for mission-critical operations.',
      benefits: ['Real-time alerts', 'Performance tracking', 'Automatic backups'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Ready',
      description: 'Native mobile apps and responsive design ensure full functionality across all devices and platforms.',
      benefits: ['iOS & Android apps', 'Offline sync', 'Push notifications'],
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ],
  additionalFeatures: [
    { icon: 'Globe', title: 'Global CDN', description: 'Lightning-fast performance worldwide' },
    { icon: 'Lock', title: 'Data Privacy', description: 'Your data stays private and secure' },
    { icon: 'Zap', title: 'API Access', description: 'Integrate with 1000+ tools' },
    { icon: 'Users', title: 'Unlimited Users', description: 'No per-seat pricing limits' }
  ],
  stats: {
    customers: '10,000+',
    uptime: '99.9%',
    integrations: '500+',
    countries: '50+'
  }
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCTA = () => {
    navigate(config.ctaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Zap: Zap,
      Shield: Shield,
      Users: Users,
      BarChart3: BarChart3,
      Clock: Clock,
      Smartphone: Smartphone,
      Globe: Globe,
      Lock: Lock,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid gap-12 lg:gap-16 mb-20">
          {config.features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`grid gap-8 lg:gap-12 items-center ${
                idx % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-xl">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Feature #{idx + 1}
                  </Badge>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
                
                {/* Benefits List */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <div key={benefitIdx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <span data-editable={`features[${idx}].benefits[${benefitIdx}]`}>{benefit}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border border-border">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    data-editable-src={`features[${idx}].imageUrl`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">And Much More...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.additionalFeatures.map((feature, idx) => (
              <Card key={idx} className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-200 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3 text-primary">
                    {getIcon(feature.icon)}
                  </div>
                  <CardTitle className="text-lg">
                    <span data-editable={`additionalFeatures[${idx}].title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`additionalFeatures[${idx}].description`}>{feature.description}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                <span data-editable="stats.customers">{config.stats.customers}</span>
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                <span data-editable="stats.uptime">{config.stats.uptime}</span>
              </div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                <span data-editable="stats.integrations">{config.stats.integrations}</span>
              </div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                <span data-editable="stats.countries">{config.stats.countries}</span>
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience these powerful features?
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group px-8 py-4 text-lg"
            onClick={handleCTA}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

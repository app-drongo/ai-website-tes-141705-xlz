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
  Workflow, 
  Bot, 
  Globe, 
  Lock, 
  Smartphone, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Businesses',
  subtitle: 'Everything you need to automate your workflows and boost productivity. Our comprehensive platform provides enterprise-grade tools with simple, intuitive interfaces.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      icon: 'Workflow',
      title: 'Visual Workflow Builder',
      description: 'Create complex automation workflows with our intuitive drag-and-drop interface. No coding required.',
      benefits: ['Drag & drop interface', 'Pre-built templates', 'Real-time testing'],
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      icon: 'Bot',
      title: 'AI-Powered Automation',
      description: 'Leverage artificial intelligence to optimize your workflows and make smart decisions automatically.',
      benefits: ['Smart decision making', 'Pattern recognition', 'Predictive analytics'],
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      icon: 'Globe',
      title: 'Universal Integrations',
      description: 'Connect with 500+ popular apps and services. From CRM to email marketing, we integrate with everything.',
      benefits: ['500+ integrations', 'API connections', 'Custom webhooks'],
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      icon: 'BarChart3',
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your automation performance with comprehensive reporting and analytics.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Performance metrics']
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced access controls.',
      benefits: ['SOC 2 compliant', 'End-to-end encryption', 'Role-based access']
    },
    {
      icon: 'Clock',
      title: 'Real-time Monitoring',
      description: 'Monitor your workflows in real-time with instant alerts and detailed execution logs.',
      benefits: ['Live monitoring', 'Instant alerts', 'Detailed logs']
    },
    {
      icon: 'Users',
      title: 'Team Collaboration',
      description: 'Work together seamlessly with shared workspaces, role-based permissions, and team management.',
      benefits: ['Shared workspaces', 'Team permissions', 'Collaboration tools']
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Access',
      description: 'Manage your automations on the go with our fully responsive mobile interface and native apps.',
      benefits: ['Mobile responsive', 'Native apps', 'Offline access']
    },
    {
      icon: 'Lock',
      title: 'Data Protection',
      description: 'Your data is protected with advanced encryption, regular backups, and GDPR compliance.',
      benefits: ['GDPR compliant', 'Regular backups', 'Data encryption']
    }
  ],
  stats: [
    { value: '500+', label: 'Integrations' },
    { value: '99.9%', label: 'Uptime' },
    { value: '10M+', label: 'Tasks Automated' },
    { value: '24/7', label: 'Support' }
  ]
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
      Workflow: Workflow,
      Bot: Bot,
      Globe: Globe,
      BarChart3: BarChart3,
      Shield: Shield,
      Clock: Clock,
      Users: Users,
      Smartphone: Smartphone,
      Lock: Lock,
      Zap: Zap,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-6 w-6" />;
  };

  const featuredFeatures = config.features.filter(feature => feature.featured);
  const regularFeatures = config.features.filter(feature => !feature.featured);

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Features */}
        {featuredFeatures.length > 0 && (
          <div className="mb-20">
            <div className="grid gap-12 lg:gap-16">
              {featuredFeatures.map((feature, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                          {getIcon(feature.icon)}
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          Featured
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">
                        <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {feature.benefits.map((benefit, benefitIdx) => (
                          <li key={benefitIdx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span data-editable={`features[${idx}].benefits[${benefitIdx}]`}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={handleCTA}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                        data-editable-href="ctaHref"
                        data-href={config.ctaHref}
                      >
                        <span data-editable="ctaText">{config.ctaText}</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    
                    {/* Image */}
                    <div className={isEven ? '' : 'lg:col-start-1'}>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border border-border">
                        <Image
                          src={feature.imageUrl || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                          alt={feature.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                          data-editable-src={`features[${idx}].imageUrl`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Features Grid */}
        {regularFeatures.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularFeatures.map((feature, idx) => {
              const actualIdx = featuredFeatures.length + idx;
              return (
                <Card key={idx} className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {getIcon(feature.icon)}
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      <span data-editable={`features[${actualIdx}].title`}>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <span data-editable={`features[${actualIdx}].description`}>{feature.description}</span>
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIdx) => (
                        <li key={benefitIdx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span data-editable={`features[${actualIdx}].benefits[${benefitIdx}]`}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience these powerful features?
          </p>
          <Button 
            size="lg" 
            onClick={handleCTA}
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
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
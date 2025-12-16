'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Users, Clock, Video, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_VIDEO_CALL = {
  title: 'See Our Platform in Action',
  subtitle: 'Book a personalized demo with our automation experts. Discover how our platform can transform your business workflows in just 30 minutes.',
  ctaText: 'Schedule Free Demo',
  ctaHref: '/demo',
  secondaryCtaText: 'Watch Video Tour',
  secondaryCtaHref: '/video-tour',
  videoUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  videoThumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  features: [
    {
      icon: 'Users',
      title: 'Expert Consultation',
      description: 'Get personalized advice from our automation specialists'
    },
    {
      icon: 'Clock',
      title: '30-Minute Session',
      description: 'Quick and focused demo tailored to your needs'
    },
    {
      icon: 'Video',
      title: 'Live Demonstration',
      description: 'See real workflows and automation examples'
    },
    {
      icon: 'Calendar',
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for you'
    }
  ],
  benefits: [
    'Personalized workflow recommendations',
    'ROI calculator for your specific use case',
    'Integration planning session',
    'Q&A with automation experts',
    'Custom demo environment setup'
  ],
  trustBadge: 'No commitment required • 100% free consultation',
  stats: {
    avgDemoTime: '30 min',
    satisfactionRate: '98%',
    implementationTime: '< 1 week'
  }
} as const;

type VideoCallProps = Partial<typeof DEFAULT_VIDEO_CALL>;

export default function VideoCall(props: VideoCallProps) {
  const config = { ...DEFAULT_VIDEO_CALL, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Users: Users,
      Clock: Clock,
      Video: Video,
      Calendar: Calendar,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Video;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="video-call" className="bg-muted/30 text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <Badge 
                variant="secondary" 
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                Free Demo Available
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What You'll Get:</h3>
              <div className="grid grid-cols-1 gap-3">
                {config.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <span data-editable={`benefits[${idx}]`}>{benefit}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                onClick={handlePrimaryCTA}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
                onClick={handleSecondaryCTA}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <span data-editable="stats.avgDemoTime">{config.stats.avgDemoTime}</span>
                </div>
                <div className="text-xs text-muted-foreground">Average Demo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <span data-editable="stats.satisfactionRate">{config.stats.satisfactionRate}</span>
                </div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <span data-editable="stats.implementationTime">{config.stats.implementationTime}</span>
                </div>
                <div className="text-xs text-muted-foreground">Setup Time</div>
              </div>
            </div>
          </div>

          {/* Video Column */}
          <div className="relative">
            <Card className="bg-card text-card-foreground border-border shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={config.videoThumbnail}
                    alt="Video call demo preview"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-editable-src="videoThumbnail"
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-primary/90 text-primary-foreground hover:bg-primary backdrop-blur-sm shadow-lg rounded-full h-16 w-16 p-0"
                        onClick={handleSecondaryCTA}
                        data-editable-href="secondaryCtaHref"
                        data-href={config.secondaryCtaHref}
                      >
                        <Play className="h-6 w-6 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  )}
                  
                  {/* Demo Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Video className="h-3 w-3 mr-1" />
                      Live Demo
                    </Badge>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      5:30
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of businesses already automating their workflows
          </p>
          <Button
            size="lg"
            onClick={handlePrimaryCTA}
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
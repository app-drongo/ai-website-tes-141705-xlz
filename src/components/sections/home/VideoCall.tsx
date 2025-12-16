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
  subtitle: 'Watch a live demonstration of how our automation platform can transform your business operations. Get personalized insights and answers to your questions.',
  videoThumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  primaryCtaText: 'Schedule Demo Call',
  primaryCtaHref: '/demo',
  secondaryCtaText: 'Watch Video',
  secondaryCtaHref: '/video',
  features: [
    {
      icon: 'Users',
      title: 'Personalized Demo',
      description: 'Get a tailored demonstration based on your specific business needs and use cases.'
    },
    {
      icon: 'Clock',
      title: '30-Minute Session',
      description: 'Comprehensive walkthrough of key features and Q&A session with our experts.'
    },
    {
      icon: 'Video',
      title: 'Screen Sharing',
      description: 'See the platform live with real examples and interactive demonstrations.'
    }
  ],
  benefits: [
    'Live platform demonstration',
    'Personalized use case discussion',
    'Technical Q&A session',
    'Implementation roadmap',
    'Pricing consultation',
    'Free trial setup'
  ],
  testimonial: {
    quote: 'The demo call was incredibly helpful. The team showed exactly how the platform would work for our specific workflow, and we were up and running within days.',
    author: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  stats: [
    { value: '15min', label: 'Average Setup Time' },
    { value: '98%', label: 'Demo Satisfaction' },
    { value: '500+', label: 'Demos This Month' }
  ]
} as const;

type VideoCallProps = Partial<typeof DEFAULT_VIDEO_CALL>;

export default function VideoCall(props: VideoCallProps) {
  const config = { ...DEFAULT_VIDEO_CALL, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryCTA = () => {
    navigate(config.primaryCtaHref);
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
    return <IconComponent className="h-6 w-6" />;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section id="video-call" className="bg-muted/30 text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Calendar className="h-3 w-3 mr-1" />
                Book Your Demo
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span data-editable="title">{config.title}</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-3">
              {config.features.map((feature, idx) => (
                <div key={idx} className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex justify-center mb-3 text-primary">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="font-semibold mb-2">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">What you'll get:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {config.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
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
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
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

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image Column */}
          <div className="space-y-6">
            {/* Video Thumbnail */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border border-border group">
              <Image
                src={config.videoThumbnail}
                alt="Platform demo video thumbnail"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                data-editable-src="videoThumbnail"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <Button
                  size="lg"
                  className="bg-primary/90 text-primary-foreground hover:bg-primary backdrop-blur-sm shadow-lg group-hover:scale-110 transition-all duration-200"
                  onClick={handleSecondaryCTA}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                >
                  <Play className="mr-2 h-6 w-6 fill-current" />
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-black/50 text-white border-0">
                  <Clock className="h-3 w-3 mr-1" />
                  5:30
                </Badge>
              </div>
            </div>

            {/* Testimonial */}
            <Card className="bg-background/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {config.testimonial.avatar ? (
                        <Image
                          src={config.testimonial.avatar}
                          alt={config.testimonial.author}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover"
                          data-editable-src="testimonial.avatar"
                        />
                      ) : (
                        getInitials(config.testimonial.author)
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-sm leading-relaxed mb-3">
                      <span data-editable="testimonial.quote">"{config.testimonial.quote}"</span>
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold">
                        <span data-editable="testimonial.author">{config.testimonial.author}</span>
                      </div>
                      <div className="text-muted-foreground">
                        <span data-editable="testimonial.role">{config.testimonial.role}</span>
                        {' at '}
                        <span data-editable="testimonial.company">{config.testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
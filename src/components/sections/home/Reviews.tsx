'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const DEFAULT_REVIEWS = {
  title: 'What Our Customers Say',
  subtitle: 'Join thousands of satisfied customers who have transformed their business operations with our automation platform.',
  reviews: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'TechFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      review: 'This automation platform has completely transformed how we handle our daily operations. We\'ve reduced manual tasks by 60% and our team can now focus on strategic initiatives. The ROI was evident within the first month.',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      review: 'As a startup, efficiency is crucial for our survival. This platform helped us automate our entire customer onboarding process. What used to take hours now happens in minutes. Game-changer!',
      featured: false
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'Global Solutions Ltd.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      review: 'The customer support is exceptional. They helped us set up complex workflows that perfectly match our business needs. The platform is intuitive and powerful at the same time.',
      featured: true
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'IT Director',
      company: 'Enterprise Corp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      review: 'Security and reliability were our top concerns. This platform exceeded our expectations with enterprise-grade features and 99.9% uptime. Our compliance team loves the audit trails.',
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Marketing Director',
      company: 'Creative Agency',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      rating: 5,
      review: 'We automated our entire lead nurturing process and saw a 45% increase in conversion rates. The visual workflow builder makes it easy for non-technical team members to create automations.',
      featured: true
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Operations Lead',
      company: 'Manufacturing Plus',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      review: 'Implementation was seamless and the training provided was comprehensive. Our productivity metrics have improved across all departments. Best investment we\'ve made this year.',
      featured: false
    }
  ],
  stats: {
    totalReviews: '2,500+',
    averageRating: '4.9',
    satisfactionRate: '98%'
  },
  trustBadges: [
    'G2 Leader 2024',
    'Capterra Best Value',
    'TrustPilot Excellent'
  ]
} as const;

type ReviewsProps = Partial<typeof DEFAULT_REVIEWS>;

export default function Reviews(props: ReviewsProps) {
  const config = { ...DEFAULT_REVIEWS, ...props };
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get featured reviews for carousel
  const featuredReviews = config.reviews.filter(review => review.featured);
  const allReviews = config.reviews;
  
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
  };
  
  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section id="reviews" className="bg-muted/30 text-foreground py-20">
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
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <span data-editable="stats.totalReviews">{config.stats.totalReviews}</span>
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                <span data-editable="stats.averageRating">{config.stats.averageRating}</span>
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <span data-editable="stats.satisfactionRate">{config.stats.satisfactionRate}</span>
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {config.trustBadges.map((badge, idx) => (
              <Badge key={idx} variant="secondary" className="bg-background/50 text-foreground">
                <span data-editable={`trustBadges[${idx}]`}>{badge}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Review Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-card text-card-foreground border-border shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                    <span data-editable={`reviews[${featuredReviews[currentIndex]?.id - 1}].review`}>
                      "{featuredReviews[currentIndex]?.review}"
                    </span>
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage 
                        src={featuredReviews[currentIndex]?.avatar} 
                        alt={featuredReviews[currentIndex]?.name}
                        data-editable-src={`reviews[${featuredReviews[currentIndex]?.id - 1}].avatar`}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                        {getInitials(featuredReviews[currentIndex]?.name || '')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="text-left">
                      <div className="font-semibold text-lg">
                        <span data-editable={`reviews[${featuredReviews[currentIndex]?.id - 1}].name`}>
                          {featuredReviews[currentIndex]?.name}
                        </span>
                      </div>
                      <div className="text-muted-foreground">
                        <span data-editable={`reviews[${featuredReviews[currentIndex]?.id - 1}].role`}>
                          {featuredReviews[currentIndex]?.role}
                        </span>
                        {' at '}
                        <span data-editable={`reviews[${featuredReviews[currentIndex]?.id - 1}].company`}>
                          {featuredReviews[currentIndex]?.company}
                        </span>
                      </div>
                      <div className="flex gap-1 mt-1">
                        {renderStars(featuredReviews[currentIndex]?.rating || 5)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevReview}
              disabled={featuredReviews.length <= 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextReview}
              disabled={featuredReviews.length <= 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            {/* Dots Indicator */}
            {featuredReviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {featuredReviews.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((review, idx) => (
            <Card key={review.id} className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage 
                      src={review.avatar} 
                      alt={review.name}
                      data-editable-src={`reviews[${idx}].avatar`}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(review.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">
                      <span data-editable={`reviews[${idx}].name`}>{review.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`reviews[${idx}].role`}>{review.role}</span>
                      {' at '}
                      <span data-editable={`reviews[${idx}].company`}>{review.company}</span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  <span data-editable={`reviews[${idx}].review`}>"{review.review}"</span>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our satisfied customers?
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}

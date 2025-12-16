'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react';
import { useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const DEFAULT_CONTACT = {
  title: 'Get in Touch',
  subtitle: 'Ready to transform your business? Our team is here to help you get started with our automation platform.',
  contactInfo: [
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'hello@tesautomation.com',
      description: 'Send us an email anytime'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      value: '123 Business Ave, Suite 100',
      description: 'San Francisco, CA 94105'
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      value: 'Mon-Fri: 8am-6pm PST',
      description: 'Weekend support available'
    }
  ],
  features: [
    {
      icon: 'MessageSquare',
      title: 'Live Chat Support',
      description: 'Get instant help from our support team'
    },
    {
      icon: 'Users',
      title: 'Dedicated Account Manager',
      description: 'Personal guidance for enterprise clients'
    },
    {
      icon: 'Headphones',
      title: '24/7 Technical Support',
      description: 'Round-the-clock assistance when you need it'
    }
  ],
  formFields: [
    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'john@company.com' },
    { name: 'company', label: 'Company Name', type: 'text', required: false, placeholder: 'Your Company' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+1 (555) 123-4567' },
    { name: 'subject', label: 'Subject', type: 'text', required: true, placeholder: 'How can we help?' },
    { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Tell us about your automation needs...' }
  ],
  ctaText: 'Send Message',
  responseTime: 'We typically respond within 2 hours during business hours'
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();
  const [formData, setFormData] = useState<Record<string, string>>({});

  const getIcon = (iconName: string) => {
    const icons = {
      Mail: Mail,
      Phone: Phone,
      MapPin: MapPin,
      Clock: Clock,
      MessageSquare: MessageSquare,
      Users: Users,
      Headphones: Headphones,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Mail;
    return <IconComponent className="h-5 w-5" />;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6 sm:grid-cols-2">
              {config.contactInfo.map((info, idx) => (
                <Card key={idx} className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                        {getIcon(info.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1">
                          <span data-editable={`contactInfo[${idx}].title`}>{info.title}</span>
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          <span data-editable={`contactInfo[${idx}].value`}>{info.value}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span data-editable={`contactInfo[${idx}].description`}>{info.description}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Support?</h3>
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0 p-2 bg-accent/10 text-accent rounded-lg">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <span data-editable="responseTime">{config.responseTime}</span>
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card text-card-foreground border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Send us a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
            </CardHeader>
            <CardContent>
              <form 
                onSubmit={handleSubmit}
                data-form-id="contact-form"
                className="space-y-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {config.formFields.slice(0, 4).map((field, idx) => (
                    <div key={field.name} className={field.name === 'name' || field.name === 'email' ? 'sm:col-span-1' : 'sm:col-span-1'}>
                      <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                        <span data-editable={`formFields[${idx}].label`}>{field.label}</span>
                        {field.required && <span className="text-destructive ml-1">*</span>}
                      </label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full"
                        data-editable-placeholder={`formFields[${idx}].placeholder`}
                      />
                    </div>
                  ))}
                </div>

                {/* Subject field - full width */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    <span data-editable="formFields[4].label">{config.formFields[4].label}</span>
                    <span className="text-destructive ml-1">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder={config.formFields[4].placeholder}
                    value={formData.subject || ''}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full"
                    data-editable-placeholder="formFields[4].placeholder"
                  />
                </div>

                {/* Message field - full width */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    <span data-editable="formFields[5].label">{config.formFields[5].label}</span>
                    <span className="text-destructive ml-1">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={config.formFields[5].placeholder}
                    value={formData.message || ''}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full min-h-[120px] resize-y"
                    data-editable-placeholder="formFields[5].placeholder"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {message && (
                  <div className={`p-4 rounded-lg text-sm ${
                    isSuccess 
                      ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                      : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                  }`}>
                    {message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

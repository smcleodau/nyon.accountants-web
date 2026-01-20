import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - nyon.accountants',
  description: 'Comprehensive accounting services enhanced by AI-native technology. Transparent pricing for UK businesses.',
};

export default function Services() {
  const pricingTiers = [
    {
      name: 'Essentials',
      price: '£2,500-6,000',
      period: '/month',
      description: 'Small businesses & early-stage startups',
      features: [
        'Core accounting + tax compliance',
        'Real-time dashboard access',
        '5-day close',
        'Monthly management accounts',
        'Email & Slack support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '£6,000-15,000',
      period: '/month',
      description: 'Scale-ups & growth-stage companies',
      features: [
        'Full accounting + strategic advisory',
        'Fractional CFO (10 hrs/month)',
        '3-day close',
        'Multi-entity consolidation',
        'Dedicated account manager',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Strategic',
      price: '£15,000-40,000',
      period: '/month',
      description: 'Established mid-market companies',
      features: [
        'Comprehensive advisory + CFO services',
        'Dedicated team, custom solutions',
        'Same-day close',
        'Board-ready reporting',
        'M&A support',
        '24/7 priority support',
      ],
      popular: false,
    },
  ];

  const services = [
    {
      id: 'accounting',
      title: 'Accounting & Advisory',
      price: '£2.5K-6K/month',
      description: 'Real-time financial visibility with AI-powered automation',
      features: [
        'Monthly management accounts',
        'Multi-entity consolidation',
        'Revenue recognition (ASC 606, IFRS 15)',
        'Cash flow forecasting & scenario planning',
        'Board-ready financial reporting',
      ],
      techAdvantages: [
        'Automated bank reconciliation',
        'AI transaction categorization',
        'Real-time dashboard',
        'Anomaly detection',
      ],
    },
    {
      id: 'tax',
      title: 'Tax Strategy & Compliance',
      price: 'From £5K',
      description: 'Proactive tax planning with AI-powered optimization',
      features: [
        'Corporation tax planning & filing',
        'R&D tax credits (avg. save £180K)',
        'International tax planning',
        'VAT/MTD compliance',
        'Tax due diligence',
      ],
      techAdvantages: [
        'AI-powered tax optimization',
        'Real-time compliance monitoring',
        'Automated filing workflows',
        'Credit opportunity detection',
      ],
    },
    {
      id: 'audit',
      title: 'Audit & Assurance',
      price: '£25K-100K',
      description: 'Technology-enabled audits with continuous monitoring',
      features: [
        'Statutory audits (UK GAAP, IFRS)',
        'SOC 2 Type II (£30K-75K)',
        'Internal controls assessment',
        'Pre-exit quality of earnings',
      ],
      techAdvantages: [
        'Continuous control monitoring',
        'AI-powered sampling',
        'Real-time progress tracking',
        'Collaborative evidence workspace',
      ],
    },
    {
      id: 'cfo',
      title: 'Fractional CFO Services',
      price: '£8K-25K/month',
      description: 'Strategic financial leadership at 60% the cost of full-time CFO',
      features: [
        'Strategic financial planning',
        'Fundraising support (Seed to Series C)',
        'Board presentations & investor relations',
        'M&A financial modeling',
        'KPI framework design',
      ],
      techAdvantages: [
        'Real-time financial dashboards',
        'Scenario modeling tools',
        'Investor data rooms',
        'Custom reporting automation',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Comprehensive services for ambitious businesses
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            AI-native technology combined with expert judgment. Transparent pricing, exceptional service.
          </p>
        </Container>
      </Section>

      {/* Pricing Tiers */}
      <Section>
        <Container>
          <SectionTitle centered subtitle="Choose the level of service that fits your needs">
            Transparent Pricing
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                hover
                className={`relative ${
                  tier.popular ? 'border-2 border-[var(--color-glacier-teal)] shadow-[var(--shadow-elevated)]' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="info">Most Popular</Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className="text-4xl font-bold text-[var(--color-glacier-teal)] mb-2"
                    style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                  >
                    {tier.price}
                  </div>
                  <div className="text-sm text-[var(--color-stone-500)]">{tier.period}</div>
                  <p className="text-sm text-[var(--color-stone-600)] mt-2">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <span className="text-[var(--color-glacier-teal)] mr-2 mt-1">✓</span>
                      <span className="text-[var(--color-stone-700)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Detailed Services */}
      <Section background="frost">
        <Container>
          <SectionTitle centered>Service Lines</SectionTitle>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className="text-xl text-[var(--color-glacier-teal)] font-medium mb-4"
                    style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                  >
                    {service.price}
                  </div>
                  <p className="text-lg text-[var(--color-stone-600)] mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                        <span className="text-[var(--color-stone-700)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className={`bg-white ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h4
                    className="text-lg font-bold mb-4 text-[var(--color-nyon-blue)]"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    Technology Advantages
                  </h4>
                  <ul className="space-y-3">
                    {service.techAdvantages.map((advantage) => (
                      <li key={advantage} className="flex items-start text-sm">
                        <span className="text-[var(--color-glacier-teal)] mr-2">✓</span>
                        <span className="text-[var(--color-stone-700)]">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="dark" className="relative overflow-hidden">
        <TopographicBackground opacity={0.1} className="text-white" />
        <Container className="relative z-10 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Ready to elevate your accounting?
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss your needs and find the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button href="/pricing" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--color-nyon-dark)]">
              Explore Pricing
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';

export const metadata: Metadata = {
  title: 'Pricing - nyon.accountants',
  description: 'Transparent, fixed monthly pricing. No hourly billing surprises.',
};

export default function Pricing() {
  return (
    <>
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Transparent pricing, no surprises
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            Fixed monthly fees based on your needs. No hourly billing.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Essentials',
                price: '£2,500-6,000',
                period: '/month',
                features: ['5-day close', 'Real-time dashboards', 'Email support'],
              },
              {
                name: 'Growth',
                price: '£6,000-15,000',
                period: '/month',
                popular: true,
                features: ['3-day close', 'Fractional CFO (10hrs)', 'Priority support'],
              },
              {
                name: 'Strategic',
                price: '£15,000-40,000',
                period: '/month',
                features: ['Same-day close', 'Dedicated team', '24/7 support'],
              },
            ].map((tier) => (
              <Card
                key={tier.name}
                hover
                className={tier.popular ? 'border-2 border-[var(--color-glacier-teal)]' : ''}
              >
                {tier.popular && (
                  <div className="text-center mb-4">
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
                    className="text-4xl font-bold text-[var(--color-glacier-teal)]"
                    style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                  >
                    {tier.price}
                  </div>
                  <div className="text-sm text-[var(--color-stone-500)]">{tier.period}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start text-sm">
                      <span className="text-[var(--color-glacier-teal)] mr-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant={tier.popular ? 'primary' : 'outline'} className="w-full">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="dark" className="relative overflow-hidden">
        <TopographicBackground opacity={0.1} className="text-white" />
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Need a custom solution?
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10">
            Schedule a consultation to discuss your specific needs.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Schedule Consultation
          </Button>
        </Container>
      </Section>
    </>
  );
}

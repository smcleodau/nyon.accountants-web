import type { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Industries - nyon.accountants',
  description: 'Specialized expertise for Technology, Fintech, E-commerce, Professional Services, Life Sciences, and Creative industries.',
};

export default function Industries() {
  const industries = [
    {
      name: 'Technology & SaaS',
      challenges: 'Revenue recognition, R&D credits, fundraising support',
      focus: 'Series A-C startups and scale-ups',
    },
    {
      name: 'Fintech & Financial Services',
      challenges: 'Complex regulatory compliance, multi-entity structures',
      focus: 'FCA-regulated businesses',
    },
    {
      name: 'E-commerce & DTC',
      challenges: 'Inventory accounting, marketplace reconciliation, VAT compliance',
      focus: '£5M-£50M revenue brands',
    },
    {
      name: 'Professional Services',
      challenges: 'Project accounting, resource planning, profitability analysis',
      focus: 'Agencies and consultancies',
    },
    {
      name: 'Life Sciences',
      challenges: 'Grant accounting, R&D tax credits, IP management',
      focus: 'Biotech and healthtech',
    },
    {
      name: 'Creative & Media',
      challenges: 'Production accounting, rights management, tax incentives',
      focus: 'Production companies and studios',
    },
  ];

  return (
    <>
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Specialized expertise for your industry
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            Deep knowledge of industry-specific challenges and opportunities.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card key={industry.name} hover>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {industry.name}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-[var(--color-glacier-teal)] mb-1">Key Challenges</div>
                    <p className="text-sm text-[var(--color-stone-600)]">{industry.challenges}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-glacier-teal)] mb-1">Our Focus</div>
                    <p className="text-sm text-[var(--color-stone-600)]">{industry.focus}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="dark" className="relative overflow-hidden">
        <TopographicBackground opacity={0.1} className="text-white" />
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Discuss your industry needs
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10">
            Every industry has unique requirements. Let's talk about yours.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Schedule Consultation
          </Button>
        </Container>
      </Section>
    </>
  );
}

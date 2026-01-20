import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import MetricCounter from '@/components/design-system/MetricCounter';

export const metadata: Metadata = {
  title: 'Careers - nyon.accountants',
  description: 'Join the team building the future of accounting. Remote-first, ambitious, exceptional.',
};

export default function Careers() {
  return (
    <>
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Build the future of accounting with us
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto mb-8">
            Join a team that's redefining what accounting can be.
          </p>
          <Button href="mailto:careers@nyon.accountants" size="lg">
            View Open Positions
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle centered>Why Join Nyon</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Remote-First', desc: 'Work from anywhere in the UK' },
              { title: 'Competitive Comp', desc: 'Top-tier salaries + equity' },
              { title: 'Growth', desc: 'Learn from the best' },
            ].map((benefit) => (
              <Card key={benefit.title} hover className="text-center">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-[var(--color-stone-600)]">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="gradient" className="relative overflow-hidden">
        <TopographicBackground opacity={0.08} />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <MetricCounter value={185} className="text-5xl font-bold text-[var(--color-nyon-blue)] mb-2" />
              <div className="text-sm text-[var(--color-stone-600)]">Team Members</div>
            </div>
            <div>
              <MetricCounter value={88} suffix="%" className="text-5xl font-bold text-[var(--color-nyon-blue)] mb-2" />
              <div className="text-sm text-[var(--color-stone-600)]">Retention Rate</div>
            </div>
            <div>
              <MetricCounter value={58} suffix="%" className="text-5xl font-bold text-[var(--color-nyon-blue)] mb-2" />
              <div className="text-sm text-[var(--color-stone-600)]">Women</div>
            </div>
            <div>
              <MetricCounter value={4.6} suffix="/5" className="text-5xl font-bold text-[var(--color-nyon-blue)] mb-2" />
              <div className="text-sm text-[var(--color-stone-600)]">Glassdoor</div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="dark" className="relative overflow-hidden">
        <TopographicBackground opacity={0.1} className="text-white" />
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Ready to join us?
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10">
            Send your CV to careers@nyon.accountants
          </p>
          <Button href="mailto:careers@nyon.accountants" size="lg" variant="secondary">
            Apply Now
          </Button>
        </Container>
      </Section>
    </>
  );
}

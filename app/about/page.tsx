import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import GlassCard from '@/components/design-system/GlassCard';
import MetricCounter from '@/components/design-system/MetricCounter';

export const metadata: Metadata = {
  title: 'About Us - nyon.accountants',
  description: 'Learn about Laura and the team building the modern accounting firm. AI-native, transparent, and client-obsessed.',
};

export default function About() {
  const timeline = [
    {
      year: '2019',
      title: 'Founded with £150K personal savings',
      description: '5 team members, big vision',
    },
    {
      year: '2020',
      title: 'Launched with 15 pilot clients',
      description: 'Built during pandemic as remote-first',
    },
    {
      year: '2022',
      title: 'Named Top 50 Modern Firms',
      description: 'Open-sourced reporting templates',
    },
    {
      year: '2024',
      title: 'Forbes "Next Billion-Dollar Startups"',
      description: 'Opened London & Manchester hubs',
    },
    {
      year: '2025',
      title: 'AI Innovation Award',
      description: 'Industry\'s most sophisticated AI implementation',
    },
    {
      year: '2026',
      title: 'Rebranded to nyon.accountants',
      description: 'Edinburgh office opened',
    },
  ];

  const values = [
    {
      title: 'Technology as Enabler',
      description: 'AI amplifies expertise, never replaces it',
      color: 'var(--color-glacier-teal)',
    },
    {
      title: 'Crystal Clear Transparency',
      description: 'Real-time visibility, no black boxes',
      color: 'var(--color-nyon-blue)',
    },
    {
      title: 'Proactive Partnership',
      description: 'Strategic guidance, not just compliance',
      color: 'var(--color-horizon-gold)',
    },
    {
      title: 'Craft Excellence',
      description: 'Every detail matters, from code to client service',
      color: 'var(--color-lavender-mist)',
    },
    {
      title: 'Continuous Innovation',
      description: 'Question assumptions, improve relentlessly',
      color: 'var(--color-forest-moss)',
    },
    {
      title: 'Flexibility First',
      description: 'Remote-first, results-oriented culture',
      color: 'var(--color-nyon-blue)',
    },
  ];

  const offices = [
    {
      city: 'London',
      subtitle: 'Headquarters',
      teamSize: 85,
      focus: 'Financial services, tech startups, scale-ups',
    },
    {
      city: 'Manchester',
      subtitle: 'Northern Hub',
      teamSize: 45,
      focus: 'Manufacturing, e-commerce, professional services',
    },
    {
      city: 'Edinburgh',
      subtitle: 'Scotland',
      teamSize: 35,
      focus: 'Fintech, life sciences, international expansion',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Building the modern accounting firm
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            AI-native, transparent, and client-obsessed. Founded in 2019 to deliver the financial
            clarity modern businesses deserve.
          </p>
        </Container>
      </Section>

      {/* Laura's Story */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Meet Laura, Founder & CEO
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-glacier-teal)] to-[var(--color-nyon-blue)] mb-6"></div>
              </div>

              <p className="text-lg text-[var(--color-stone-600)] leading-relaxed">
                Laura spent nine years at a respected UK mid-tier accounting firm, rising to
                manager level and developing deep expertise in complex accounting scenarios. But
                she witnessed a growing gap between what technology could enable and what
                traditional firms were actually delivering.
              </p>

              <p className="text-lg text-[var(--color-stone-600)] leading-relaxed">
                The breaking point came during a 2018 partner meeting. After presenting impressive
                ROI metrics from automation initiatives—40% efficiency gains and 95% client
                satisfaction—a senior partner dismissed the results:{' '}
                <span className="italic font-medium text-[var(--color-stone-800)]">
                  "We bill by the hour. Why would we want to be more efficient?"
                </span>
              </p>
            </div>

            <GlassCard className="bg-gradient-to-br from-[var(--color-alpine-frost)]/50 to-white/50 backdrop-blur-xl border border-[var(--color-glacier-teal)]/20">
              <div className="space-y-4">
                <h3
                  className="text-2xl font-bold text-[var(--color-nyon-blue)]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  The Clarity Moment
                </h3>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Laura took a sabbatical to clear her head, hiking through the French Alps near
                  Morzine. Standing on the Nyon plateau with 360-degree views across mountain
                  ranges, she had her clarity moment:
                </p>
                <p className="text-lg font-medium text-[var(--color-stone-800)] italic leading-relaxed">
                  "This is what financial transparency should feel like. Business owners should see
                  clearly in every direction—cash flow, profitability, opportunities, risks—with
                  confidence that comes from solid ground beneath you."
                </p>
                <div className="pt-4 border-t border-[var(--color-glacier-teal)]/20">
                  <p className="text-[var(--color-stone-700)]">
                    She returned to England and began building what would become{' '}
                    <span className="font-bold text-[var(--color-glacier-teal)]">
                      nyon.accountants
                    </span>{' '}
                    — named after that plateau where everything became clear.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="mt-12 max-w-3xl">
            <blockquote className="border-l-4 border-[var(--color-horizon-gold)] pl-6 py-2">
              <p
                className="text-2xl md:text-3xl text-[var(--color-stone-800)] italic mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                "Financial clarity gives you the confidence to make bold decisions. That belief
                drives everything we do."
              </p>
              <cite className="text-[var(--color-stone-600)] not-italic">
                — Laura, Founder & CEO
              </cite>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* Journey Timeline */}
      <Section background="frost">
        <Container>
          <SectionTitle centered>Our Journey</SectionTitle>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-glacier-teal)] via-[var(--color-nyon-blue)] to-[var(--color-lavender-mist)] md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-glacier-teal)] to-[var(--color-nyon-blue)] flex items-center justify-center shadow-[var(--shadow-glacier)] z-10">
                    <span
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 ml-28 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <Card hover className="h-full">
                      <h3
                        className="text-xl font-bold mb-2 text-[var(--color-stone-900)]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[var(--color-stone-600)]">{item.description}</p>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section>
        <Container>
          <SectionTitle centered subtitle="The principles that guide everything we do">
            Our Values
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                hover
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <div
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: value.color }}
                  ></div>
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-[var(--color-stone-900)]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {value.title}
                </h3>
                <p className="text-[var(--color-stone-600)] leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Culture */}
      <Section background="gradient" className="relative overflow-hidden">
        <TopographicBackground opacity={0.08} />
        <Container className="relative z-10">
          <SectionTitle centered>Our Team</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 185, label: 'Team Members' },
              { value: 58, label: 'Women', suffix: '%' },
              { value: 88, label: 'Retention Rate', suffix: '%' },
              { value: 4.6, label: 'Glassdoor Rating', suffix: '/5' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <MetricCounter
                  value={stat.value}
                  suffix={stat.suffix || ''}
                  className="text-5xl md:text-6xl font-bold text-[var(--color-nyon-blue)] mb-2"
                />
                <div className="text-sm md:text-base text-[var(--color-stone-600)] uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Offices */}
      <Section>
        <Container>
          <SectionTitle centered>Our Offices</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.city} hover className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-glacier-teal)] to-[var(--color-nyon-blue)] flex items-center justify-center shadow-[var(--shadow-glacier)]">
                  <div className="w-10 h-10 bg-white/30 rounded"></div>
                </div>

                <h3
                  className="text-2xl font-bold mb-2 text-[var(--color-stone-900)]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {office.city}
                </h3>
                <div className="text-sm text-[var(--color-glacier-teal)] font-medium mb-4 uppercase tracking-wide">
                  {office.subtitle}
                </div>

                <div
                  className="text-3xl font-bold text-[var(--color-nyon-blue)] mb-2"
                  style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                >
                  {office.teamSize}
                </div>
                <div className="text-sm text-[var(--color-stone-500)] mb-4">team members</div>

                <p className="text-[var(--color-stone-600)]">{office.focus}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Awards & Recognition */}
      <Section background="frost">
        <Container>
          <SectionTitle centered>Awards & Recognition</SectionTitle>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { year: '2025', award: 'AI Innovation Award' },
                { year: '2024', award: 'Forbes "Next Billion-Dollar Startups"' },
                { year: '2022', award: 'Top 50 Modern Firms' },
                { year: '2024', award: '4.6/5 Glassdoor Rating' },
              ].map((item) => (
                <Card key={item.award} className="flex items-center gap-4">
                  <div
                    className="text-2xl font-bold text-[var(--color-glacier-teal)]"
                    style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                  >
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[var(--color-stone-900)]">{item.award}</div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-[var(--color-stone-600)] mb-4 uppercase tracking-wide">
                Featured In
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Forbes', 'Accounting Today', 'Journal of Accountancy', 'CFO.com'].map(
                  (publication) => (
                    <Badge key={publication} variant="default">
                      {publication}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Careers CTA */}
      <Section background="dark" className="relative overflow-hidden">
        <TopographicBackground opacity={0.1} className="text-white" />
        <Container className="relative z-10 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Join the team building the future of accounting
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our mission.
          </p>
          <Button href="/careers" size="lg" variant="secondary">
            View Open Positions
          </Button>
        </Container>
      </Section>
    </>
  );
}

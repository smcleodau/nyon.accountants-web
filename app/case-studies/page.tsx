import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';

export const metadata: Metadata = {
  title: 'Case Studies - nyon.accountants',
  description: 'Real businesses, measurable results. See how we\'ve helped ambitious companies achieve financial clarity and accelerate growth.',
};

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'FinFlow',
      industry: 'Fintech & Financial Services',
      challenge: 'Complex multi-entity structure, FCA compliance burden',
      metric: '£180K saved annually on compliance costs',
      color: 'glacier-teal',
    },
    {
      company: 'GreenLeaf Organics',
      industry: 'E-commerce & DTC',
      challenge: 'Multi-channel inventory chaos, VAT compliance nightmare',
      metric: '£280K R&D tax credit recovered',
      color: 'forest-moss',
    },
    {
      company: 'Insight Partners',
      industry: 'Professional Services',
      challenge: 'Project profitability invisible, cash flow unpredictable',
      metric: '32% improvement in project margins',
      color: 'nyon-blue',
    },
    {
      company: 'BioGen Labs',
      industry: 'Life Sciences',
      challenge: 'Grant accounting complexity, IP valuation uncertainty',
      metric: '£450K in R&D credits & grants secured',
      color: 'lavender-mist',
    },
    {
      company: 'Studio Lux',
      industry: 'Creative & Media',
      challenge: 'Production accounting mess, tax incentive opportunities missed',
      metric: '£120K in creative tax reliefs claimed',
      color: 'horizon-gold',
    },
    {
      company: 'CloudScale',
      industry: 'Technology & SaaS',
      challenge: 'Revenue recognition confusion (ASC 606), investor reporting delays',
      metric: 'Exit valuation increased 23% with clean financials',
      color: 'glacier-teal',
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
            Real businesses, measurable results
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            See how we've helped ambitious companies achieve financial clarity and accelerate growth.
          </p>
        </Container>
      </Section>

      {/* Featured Case Study */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-glacier-teal)] via-[var(--color-nyon-blue)] to-[var(--color-lavender-mist)] p-[2px]">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <Badge variant="info" className="mb-4">Featured Case Study</Badge>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    TechVelocity
                  </h2>
                  <div className="text-sm font-medium text-[var(--color-glacier-teal)] mb-6 uppercase tracking-wide">
                    Technology & SaaS
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Challenge</h3>
                      <p className="text-[var(--color-stone-600)]">
                        Month-end close took 12 days, blocking board meetings and fundraising momentum
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">Solution</h3>
                      <p className="text-[var(--color-stone-600)]">
                        Implemented real-time accounting platform with AI categorization and automated reconciliation
                      </p>
                    </div>

                    <div className="bg-[var(--color-alpine-frost)] rounded-xl p-6">
                      <blockquote className="text-[var(--color-stone-700)] italic mb-4">
                        "Nyon transformed our financial operations from a liability into a strategic advantage.
                        The real-time dashboards gave our board confidence to approve aggressive growth plans."
                      </blockquote>
                      <div className="font-medium text-sm">
                        <div className="text-[var(--color-stone-900)]">Sarah Chen</div>
                        <div className="text-[var(--color-stone-600)]">CEO, TechVelocity</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-[var(--color-stone-700)] mb-6">Key Results</div>

                    <div className="bg-gradient-to-br from-[var(--color-alpine-frost)] to-white rounded-xl p-6 border-l-4 border-[var(--color-glacier-teal)]">
                      <div
                        className="text-4xl font-bold text-[var(--color-glacier-teal)] mb-2"
                        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                      >
                        83%
                      </div>
                      <div className="text-sm text-[var(--color-stone-700)]">
                        Reduction in close time
                      </div>
                      <div className="text-xs text-[var(--color-stone-500)] mt-1">
                        12 days → 2 days
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[var(--color-alpine-frost)] to-white rounded-xl p-6 border-l-4 border-[var(--color-forest-moss)]">
                      <div
                        className="text-4xl font-bold text-[var(--color-forest-moss)] mb-2"
                        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                      >
                        £15M
                      </div>
                      <div className="text-sm text-[var(--color-stone-700)]">
                        Series B raised
                      </div>
                      <div className="text-xs text-[var(--color-stone-500)] mt-1">
                        Financial clarity impressed investors
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[var(--color-alpine-frost)] to-white rounded-xl p-6 border-l-4 border-[var(--color-horizon-gold)]">
                      <div
                        className="text-4xl font-bold text-[var(--color-horizon-gold)] mb-2"
                        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                      >
                        15 hrs
                      </div>
                      <div className="text-sm text-[var(--color-stone-700)]">
                        Saved per week
                      </div>
                      <div className="text-xs text-[var(--color-stone-500)] mt-1">
                        On manual processes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Study Grid */}
      <Section background="frost">
        <Container>
          <SectionTitle centered>More Success Stories</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.company}
                hover
                className="group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-2"
                  style={{ backgroundColor: `var(--color-${study.color})` }}
                />
                <div className="pl-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {study.company}
                  </h3>
                  <div
                    className="text-xs font-medium uppercase tracking-wide mb-4"
                    style={{ color: `var(--color-${study.color})` }}
                  >
                    {study.industry}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-[var(--color-stone-700)] mb-1">
                        Challenge
                      </div>
                      <p className="text-sm text-[var(--color-stone-600)]">
                        {study.challenge}
                      </p>
                    </div>

                    <div
                      className="bg-gradient-to-br from-[var(--color-alpine-frost)] to-white rounded-lg p-4 border-l-2"
                      style={{ borderColor: `var(--color-${study.color})` }}
                    >
                      <div className="text-sm font-bold text-[var(--color-stone-900)]">
                        {study.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes Metrics */}
      <Section>
        <Container>
          <SectionTitle centered>By the Numbers</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <div
                className="text-5xl font-bold text-[var(--color-glacier-teal)] mb-2"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                18
              </div>
              <div className="text-sm text-[var(--color-stone-600)]">Hours saved per week</div>
              <div className="text-xs text-[var(--color-stone-500)] mt-1">Average across clients</div>
            </Card>

            <Card className="text-center">
              <div
                className="text-5xl font-bold text-[var(--color-forest-moss)] mb-2"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                3.2
              </div>
              <div className="text-sm text-[var(--color-stone-600)]">Day close time</div>
              <div className="text-xs text-[var(--color-stone-500)] mt-1">Average across clients</div>
            </Card>

            <Card className="text-center">
              <div
                className="text-5xl font-bold text-[var(--color-horizon-gold)] mb-2"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                £8.2M
              </div>
              <div className="text-sm text-[var(--color-stone-600)]">R&D credits secured</div>
              <div className="text-xs text-[var(--color-stone-500)] mt-1">Total for clients</div>
            </Card>

            <Card className="text-center">
              <div
                className="text-5xl font-bold text-[var(--color-nyon-blue)] mb-2"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                94%
              </div>
              <div className="text-sm text-[var(--color-stone-600)]">Client retention</div>
              <div className="text-xs text-[var(--color-stone-500)] mt-1">Year over year</div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="dark" className="relative overflow-hidden">
        <TopographicBackground opacity={0.1} className="text-white" />
        <Container className="relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Ready to write your success story?
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Schedule Consultation
          </Button>
        </Container>
      </Section>
    </>
  );
}

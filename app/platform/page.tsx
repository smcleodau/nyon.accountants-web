import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import GlassCard from '@/components/design-system/GlassCard';

export const metadata: Metadata = {
  title: 'Platform - nyon.accountants',
  description: 'AI-native accounting platform built for clarity. Real-time intelligence, intelligent automation, CPA-reviewed accuracy.',
};

export default function Platform() {
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
            AI-native platform built for clarity
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto mb-8">
            Intelligent automation combined with expert judgment. Real-time insights, not month-end surprises.
          </p>
          <Button href="/contact" size="lg">
            See Platform Demo
          </Button>
        </Container>
      </Section>

      {/* Three Differentiators */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="text-center">
              <h3 className="text-xl font-bold mb-2">AI-Native</h3>
              <p className="text-[var(--color-stone-600)]">Not bolt-on</p>
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-xl font-bold mb-2">Real-Time</h3>
              <p className="text-[var(--color-stone-600)]">Not month-end</p>
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-xl font-bold mb-2">Transparent</h3>
              <p className="text-[var(--color-stone-600)]">Not black box</p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* AI Financial Assistant */}
      <Section background="frost">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                AI Financial Assistant
              </h2>
              <p className="text-lg text-[var(--color-stone-600)] mb-6">
                Ask questions in natural language, get instant answers from live data.
                100% CPA-reviewed for accuracy.
              </p>

              <div className="space-y-4">
                {[
                  '"What\'s our burn rate?"',
                  '"Show me Q4 profitability by product"',
                  '"When will we hit £1M ARR?"',
                  '"What\'s our cash runway?"',
                ].map((query) => (
                  <Card key={query} className="bg-white/50">
                    <p className="text-[var(--color-stone-700)] italic">{query}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <div className="space-y-4">
                <div className="font-bold mb-2">How it works:</div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-glacier-teal)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <p className="text-sm text-[var(--color-stone-700)]">Ask your question in Slack, Teams, or web app</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-glacier-teal)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <p className="text-sm text-[var(--color-stone-700)]">AI searches your live financial data</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-glacier-teal)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <p className="text-sm text-[var(--color-stone-700)]">Get instant answer with CPA review</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Real-Time Intelligence */}
      <Section>
        <Container>
          <SectionTitle centered>Real-Time Intelligence</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <h3 className="text-xl font-bold mb-4">Live Dashboards</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>P&L, balance sheet, cash flow (hourly updates)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Budget vs. actuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Cash runway projection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Custom KPI tracking</span>
                </li>
              </ul>
            </Card>

            <Card hover>
              <h3 className="text-xl font-bold mb-4">Proactive Alerts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Cash runway warnings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Budget variance notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Unusual transaction detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-glacier-teal)] mr-2">•</span>
                  <span>Tax deadline reminders</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Integrations */}
      <Section background="frost">
        <Container>
          <SectionTitle centered>Integrations</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Xero',
              'QuickBooks',
              'NetSuite',
              'Sage Intacct',
              'Stripe',
              'GoCardless',
              'Slack',
              'Teams',
              'Google Workspace',
              'Box',
              'Shopify',
              'Custom API',
            ].map((integration) => (
              <Card key={integration} className="text-center py-6">
                <div className="font-medium text-[var(--color-stone-700)]">{integration}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Security */}
      <Section>
        <Container>
          <SectionTitle centered>Security & Compliance</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-[var(--color-stone-600)]">Certified</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold mb-2">256-bit Encryption</h3>
              <p className="text-sm text-[var(--color-stone-600)]">At rest & in transit</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-bold mb-2">99.9% Uptime</h3>
              <p className="text-sm text-[var(--color-stone-600)]">SLA guaranteed</p>
            </Card>
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
            See the platform in action
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo with our team.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Request Demo
          </Button>
        </Container>
      </Section>
    </>
  );
}

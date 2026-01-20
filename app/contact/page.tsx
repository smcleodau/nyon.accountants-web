import type { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact Us - nyon.accountants',
  description: '4-hour response time. Get in touch with our team in London, Manchester, or Edinburgh.',
};

export default function Contact() {
  const offices = [
    {
      city: 'London',
      subtitle: 'Headquarters',
      email: 'hello@nyon.accountants',
      teamSize: 85,
    },
    {
      city: 'Manchester',
      subtitle: 'Northern Hub',
      email: 'hello@nyon.accountants',
      teamSize: 45,
    },
    {
      city: 'Edinburgh',
      subtitle: 'Scotland',
      email: 'hello@nyon.accountants',
      teamSize: 35,
    },
  ];

  const departments = [
    { name: 'General Inquiries', email: 'hello@nyon.accountants' },
    { name: 'New Clients', email: 'sales@nyon.accountants' },
    { name: 'Careers', email: 'careers@nyon.accountants' },
    { name: 'CFO Services', email: 'cfo@nyon.accountants' },
    { name: 'Tax Services', email: 'tax@nyon.accountants' },
    { name: 'Audit Services', email: 'audit@nyon.accountants' },
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
            Let's talk about your financial clarity
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            4-hour response time during business hours. Reach out to discuss how we can help.
          </p>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Send us a message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Name" type="text" required />
                    <Input label="Email" type="email" required />
                  </div>

                  <Input label="Company" type="text" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-stone-700)] mb-2">
                        Revenue Range
                      </label>
                      <select className="w-full px-4 py-2.5 border border-[var(--color-stone-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-glacier-teal)] focus:border-[var(--color-glacier-teal)] outline-none">
                        <option>Select range</option>
                        <option>Under £1M</option>
                        <option>£1M - £5M</option>
                        <option>£5M - £20M</option>
                        <option>£20M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-stone-700)] mb-2">
                        Service Interest
                      </label>
                      <select className="w-full px-4 py-2.5 border border-[var(--color-stone-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-glacier-teal)] focus:border-[var(--color-glacier-teal)] outline-none">
                        <option>Select service</option>
                        <option>Accounting & Advisory</option>
                        <option>Tax Services</option>
                        <option>Audit & Assurance</option>
                        <option>Fractional CFO</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-stone-700)] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2.5 border border-[var(--color-stone-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-glacier-teal)] focus:border-[var(--color-glacier-teal)] outline-none"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Department Emails
                </h3>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div key={dept.name}>
                      <div className="text-sm font-medium text-[var(--color-stone-900)]">
                        {dept.name}
                      </div>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-[var(--color-glacier-teal)] to-[var(--color-nyon-blue)] text-white">
                <h3 className="text-lg font-bold mb-2">Why Choose nyon.accountants?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ 4-hour response time</li>
                  <li>✓ 3-day close</li>
                  <li>✓ Real-time dashboards</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ 82 NPS score</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Offices */}
      <Section background="frost">
        <Container>
          <SectionTitle centered>Our Offices</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.city} className="text-center">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {office.city}
                </h3>
                <div className="text-sm text-[var(--color-glacier-teal)] font-medium mb-4 uppercase">
                  {office.subtitle}
                </div>
                <div
                  className="text-3xl font-bold text-[var(--color-nyon-blue)] mb-2"
                  style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                >
                  {office.teamSize}
                </div>
                <div className="text-sm text-[var(--color-stone-500)] mb-4">team members</div>
                <a
                  href={`mailto:${office.email}`}
                  className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)] text-sm"
                >
                  {office.email}
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container maxWidth="standard">
          <SectionTitle centered>Frequently Asked Questions</SectionTitle>

          <div className="space-y-6">
            {[
              {
                q: 'How quickly can we get started?',
                a: 'Most clients are onboarded within 2-3 weeks. We prioritize smooth transitions with minimal disruption to your operations.',
              },
              {
                q: 'Do you work with companies outside the UK?',
                a: 'Yes, we serve international companies with UK operations and provide multi-jurisdictional tax and accounting support.',
              },
              {
                q: 'What size companies do you typically work with?',
                a: 'We serve businesses from early-stage startups to mid-market companies (£1M-£50M revenue). Our sweet spot is growth-stage companies scaling rapidly.',
              },
              {
                q: 'How does pricing work?',
                a: 'We offer transparent, fixed monthly fees based on your company size and needs. No hourly billing surprises. Schedule a call to get a custom quote.',
              },
            ].map((faq) => (
              <Card key={faq.q}>
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-[var(--color-stone-600)]">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

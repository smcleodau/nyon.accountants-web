import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import TopographicBackground from '@/components/design-system/TopographicBackground';

export const metadata: Metadata = {
  title: 'Privacy Policy - nyon.accountants',
  description: 'Our commitment to protecting your privacy and personal data.',
};

export default function Privacy() {
  return (
    <>
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-lg text-[var(--color-stone-600)] max-w-2xl mx-auto">
            Last updated: 18 January 2026
          </p>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="standard">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  1. Introduction
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  nyon.accountants ("we", "our", or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit
                  our website or use our services. We comply with the UK General Data Protection Regulation
                  (UK GDPR) and the Data Protection Act 2018.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  2. Information We Collect
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)]">
                  <li>Name, email address, phone number, and company details</li>
                  <li>Financial information necessary to provide accounting services</li>
                  <li>Communications between you and nyon.accountants</li>
                  <li>Payment and billing information</li>
                  <li>Usage data and analytics from our platform</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  3. How We Use Your Information
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)]">
                  <li>Provide, maintain, and improve our accounting services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Detect, prevent, and address fraud and security issues</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  4. Data Security
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data,
                  including 256-bit encryption at rest and in transit, SOC 2 Type II certification, and regular
                  security audits. However, no method of transmission over the Internet is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  5. Data Retention
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We retain your personal data for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required by law. Financial records are
                  retained in accordance with UK accounting and tax regulations (typically 6-7 years).
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  6. Your Rights
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-4">
                  Under UK GDPR, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)]">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-[var(--color-stone-700)] leading-relaxed mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a
                    href="mailto:privacy@nyon.accountants"
                    className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                  >
                    privacy@nyon.accountants
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  7. Cookies
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store
                  certain information. For detailed information about the cookies we use, please see our{' '}
                  <a
                    href="/cookies"
                    className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  8. Third-Party Services
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We may employ third-party companies and individuals to facilitate our services, provide services
                  on our behalf, or assist us in analyzing how our services are used. These third parties have
                  access to your personal data only to perform these tasks and are obligated not to disclose or
                  use it for any other purpose.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  9. International Data Transfers
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of the UK.
                  We ensure appropriate safeguards are in place for such transfers in accordance with UK GDPR
                  requirements.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  11. Contact Us
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-[var(--color-stone-700)]">
                  <div>
                    Email:{' '}
                    <a
                      href="mailto:privacy@nyon.accountants"
                      className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                    >
                      privacy@nyon.accountants
                    </a>
                  </div>
                  <div>
                    Address: nyon.accountants, London, United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

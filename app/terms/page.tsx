import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import TopographicBackground from '@/components/design-system/TopographicBackground';

export const metadata: Metadata = {
  title: 'Terms of Service - nyon.accountants',
  description: 'Terms and conditions for using nyon.accountants services.',
};

export default function Terms() {
  return (
    <>
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  By accessing or using the services provided by nyon.accountants ("we", "our", or "us"),
                  you agree to be bound by these Terms of Service. If you do not agree to these terms,
                  please do not use our services.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  2. Services Description
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  nyon.accountants provides professional accounting, tax, audit, and advisory services to
                  businesses. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)] mt-4">
                  <li>Monthly management accounts and financial reporting</li>
                  <li>Tax planning, compliance, and filing services</li>
                  <li>Statutory audit and assurance services</li>
                  <li>Fractional CFO and strategic advisory services</li>
                  <li>AI-powered accounting platform access</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  3. Client Responsibilities
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)]">
                  <li>Provide accurate, complete, and timely information necessary for service delivery</li>
                  <li>Maintain proper records and documentation</li>
                  <li>Pay fees according to the agreed payment terms</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Notify us immediately of any material changes to your business</li>
                  <li>Protect your account credentials and notify us of any unauthorized access</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  4. Fees and Payment
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Service fees are outlined in your engagement letter or service agreement. Fees are typically
                  billed monthly in advance. Late payments may incur interest charges at a rate of 8% above
                  the Bank of England base rate. We reserve the right to suspend services for non-payment.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  5. Confidentiality
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We maintain strict confidentiality of all client information in accordance with professional
                  accounting standards and applicable laws. We will not disclose your confidential information
                  except as required by law, regulation, or with your explicit consent.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  6. Professional Standards
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Our services are performed in accordance with applicable professional standards, including
                  those established by the Institute of Chartered Accountants in England and Wales (ICAEW)
                  and other relevant professional bodies. We maintain professional indemnity insurance as
                  required.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  7. Limitation of Liability
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  To the maximum extent permitted by law, our liability for any claim arising from our
                  services shall be limited to the fees paid for the specific service that gave rise to the
                  claim. We shall not be liable for any indirect, consequential, or punitive damages.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  8. Intellectual Property
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  All intellectual property rights in our platform, methodologies, and proprietary tools
                  remain our property. You are granted a limited, non-exclusive license to use our platform
                  solely for receiving our services.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  9. Termination
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Either party may terminate the engagement with 30 days' written notice. Upon termination,
                  you remain responsible for payment of all fees for services provided up to the termination
                  date. We will provide you with copies of your records and assist with transition to a new
                  service provider.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  10. Data Protection
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We process personal data in accordance with our{' '}
                  <a
                    href="/privacy"
                    className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                  >
                    Privacy Policy
                  </a>{' '}
                  and applicable data protection laws, including UK GDPR. Both parties agree to comply with
                  their respective obligations under data protection legislation.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  11. Dispute Resolution
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Any disputes arising from these terms or our services shall first be addressed through
                  good faith negotiation. If unresolved, disputes shall be subject to the exclusive
                  jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  12. Changes to Terms
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be
                  effective upon posting to our website. Continued use of our services after changes
                  constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  13. Governing Law
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  These Terms of Service are governed by and construed in accordance with the laws of
                  England and Wales.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  14. Contact Information
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-[var(--color-stone-700)]">
                  <div>
                    Email:{' '}
                    <a
                      href="mailto:hello@nyon.accountants"
                      className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                    >
                      hello@nyon.accountants
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

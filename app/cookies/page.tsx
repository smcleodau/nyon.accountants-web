import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Cookie Policy - nyon.accountants',
  description: 'Information about how we use cookies and similar technologies.',
};

export default function Cookies() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      purpose: 'Required for the website to function properly',
      examples: 'Authentication, security, session management',
      duration: 'Session or up to 1 year',
      canDisable: false,
    },
    {
      name: 'Analytics Cookies',
      purpose: 'Help us understand how visitors use our website',
      examples: 'Google Analytics, page views, user behavior',
      duration: 'Up to 2 years',
      canDisable: true,
    },
    {
      name: 'Functional Cookies',
      purpose: 'Remember your preferences and settings',
      examples: 'Language preferences, display settings',
      duration: 'Up to 1 year',
      canDisable: true,
    },
    {
      name: 'Marketing Cookies',
      purpose: 'Track visitors across websites for advertising',
      examples: 'LinkedIn, Google Ads, remarketing',
      duration: 'Up to 2 years',
      canDisable: true,
    },
  ];

  return (
    <>
      <Section background="gradient" className="relative overflow-hidden pt-8 md:pt-16">
        <TopographicBackground opacity={0.1} />
        <Container maxWidth="standard" className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Cookie Policy
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
                  What Are Cookies?
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website.
                  They are widely used to make websites work more efficiently and provide information to
                  website owners. Cookies help us understand how you use our site and improve your experience.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  How We Use Cookies
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-6">
                  We use cookies for several purposes:
                </p>

                <div className="grid gap-6">
                  {cookieTypes.map((cookie) => (
                    <Card key={cookie.name}>
                      <div className="flex items-start justify-between mb-3">
                        <h3
                          className="text-xl font-bold"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {cookie.name}
                        </h3>
                        {!cookie.canDisable && (
                          <span className="px-3 py-1 bg-[var(--color-nyon-blue)] text-white text-xs font-medium rounded-full">
                            Required
                          </span>
                        )}
                        {cookie.canDisable && (
                          <span className="px-3 py-1 bg-[var(--color-stone-200)] text-[var(--color-stone-700)] text-xs font-medium rounded-full">
                            Optional
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-[var(--color-stone-900)]">Purpose: </span>
                          <span className="text-[var(--color-stone-600)]">{cookie.purpose}</span>
                        </div>
                        <div>
                          <span className="font-medium text-[var(--color-stone-900)]">Examples: </span>
                          <span className="text-[var(--color-stone-600)]">{cookie.examples}</span>
                        </div>
                        <div>
                          <span className="font-medium text-[var(--color-stone-900)]">Duration: </span>
                          <span className="text-[var(--color-stone-600)]">{cookie.duration}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Third-Party Cookies
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-4">
                  We use services from third-party providers that may set cookies on your device:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)]">
                  <li>
                    <strong>Google Analytics:</strong> Helps us understand website usage and improve our
                    content and services
                  </li>
                  <li>
                    <strong>LinkedIn:</strong> Enables professional networking features and advertising
                  </li>
                  <li>
                    <strong>Cloudflare:</strong> Provides security and performance optimization
                  </li>
                  <li>
                    <strong>Intercom/HubSpot:</strong> Powers our chat support and customer relationship
                    management
                  </li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-stone-700)]">
                  <li>
                    <strong>Cookie Banner:</strong> When you first visit our site, you can accept or decline
                    optional cookies through our cookie consent banner
                  </li>
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete
                    existing cookies. Consult your browser's help documentation for specific instructions
                  </li>
                  <li>
                    <strong>Third-Party Opt-Out:</strong> You can opt out of Google Analytics by installing
                    the{' '}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                </ul>
                <p className="text-[var(--color-stone-700)] leading-relaxed mt-4">
                  Please note that disabling cookies may affect the functionality of our website and prevent
                  you from using certain features.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Do Not Track Signals
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  Some browsers support a "Do Not Track" feature that signals to websites that you do not
                  want to have your online activity tracked. We currently do not respond to Do Not Track
                  signals.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Changes to This Cookie Policy
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology,
                  legislation, or our business practices. We will notify you of any significant changes
                  by posting the updated policy on this page.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  More Information
                </h2>
                <p className="text-[var(--color-stone-700)] leading-relaxed">
                  For more information about how we use your personal data, please see our{' '}
                  <a
                    href="/privacy"
                    className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                  >
                    Privacy Policy
                  </a>
                  . If you have questions about our use of cookies, please contact us at{' '}
                  <a
                    href="mailto:privacy@nyon.accountants"
                    className="text-[var(--color-glacier-teal)] hover:text-[var(--color-nyon-blue)]"
                  >
                    privacy@nyon.accountants
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

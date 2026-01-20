import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TopographicBackground from '@/components/design-system/TopographicBackground';
import Input from '@/components/ui/Input';

export const metadata: Metadata = {
  title: 'Resources - nyon.accountants',
  description: 'Expert guidance on accounting, tax, technology, and growth strategy for modern finance leaders.',
};

export default function Resources() {
  const articles = [
    {
      title: 'R&D Tax Credits for SaaS: A Complete Guide for UK Startups',
      category: 'Tax Planning',
      categoryColor: 'glacier-teal',
      excerpt: 'Navigate the complexities of R&D tax credits with our step-by-step guide.',
      readTime: '12 min',
      date: '10 Jan 2026',
    },
    {
      title: 'Corporation Tax Planning Strategies for 2026',
      category: 'Tax Planning',
      categoryColor: 'glacier-teal',
      excerpt: 'Optimize your tax position with these strategic planning insights.',
      readTime: '10 min',
      date: '5 Jan 2026',
    },
    {
      title: 'Preparing Your Financials for Series A: What Investors Actually Want',
      category: 'Fundraising',
      categoryColor: 'horizon-gold',
      excerpt: 'Clean financials can make or break your fundraising round. Here\'s what matters.',
      readTime: '15 min',
      date: '28 Dec 2025',
    },
    {
      title: 'Financial Metrics That Matter: ARR, MRR, and Beyond',
      category: 'Fundraising',
      categoryColor: 'horizon-gold',
      excerpt: 'Understanding the metrics that investors care about most.',
      readTime: '8 min',
      date: '20 Dec 2025',
    },
    {
      title: 'MTD VAT: What You Need to Know in 2026',
      category: 'Compliance',
      categoryColor: 'nyon-blue',
      excerpt: 'Making Tax Digital requirements and how to stay compliant.',
      readTime: '7 min',
      date: '18 Dec 2025',
    },
    {
      title: 'FCA Compliance for Fintech: A Practical Guide',
      category: 'Compliance',
      categoryColor: 'nyon-blue',
      excerpt: 'Navigate regulatory requirements without slowing down innovation.',
      readTime: '14 min',
      date: '12 Dec 2025',
    },
    {
      title: 'Getting Started with AI Financial Assistant',
      category: 'Platform How-Tos',
      categoryColor: 'lavender-mist',
      excerpt: 'Unlock instant insights from your financial data with natural language queries.',
      readTime: '5 min',
      date: '8 Dec 2025',
    },
    {
      title: 'Building Custom Dashboards: Best Practices',
      category: 'Platform How-Tos',
      categoryColor: 'lavender-mist',
      excerpt: 'Design dashboards that surface the insights that matter most to your business.',
      readTime: '9 min',
      date: '1 Dec 2025',
    },
    {
      title: 'E-commerce Accounting: Managing Multi-Channel Complexity',
      category: 'Industry Insights',
      categoryColor: 'forest-moss',
      excerpt: 'Best practices for reconciling Shopify, Amazon, and marketplace sales.',
      readTime: '11 min',
      date: '25 Nov 2025',
    },
    {
      title: 'SaaS Revenue Recognition: ASC 606 Simplified',
      category: 'Industry Insights',
      categoryColor: 'forest-moss',
      excerpt: 'Navigate complex revenue recognition rules for subscription businesses.',
      readTime: '13 min',
      date: '18 Nov 2025',
    },
    {
      title: 'Life Sciences Accounting: Grant & IP Management',
      category: 'Industry Insights',
      categoryColor: 'forest-moss',
      excerpt: 'Specialized guidance for biotech and healthtech companies.',
      readTime: '10 min',
      date: '10 Nov 2025',
    },
    {
      title: 'Professional Services: Project Profitability Analysis',
      category: 'Industry Insights',
      categoryColor: 'forest-moss',
      excerpt: 'Track and improve margins across client engagements.',
      readTime: '9 min',
      date: '3 Nov 2025',
    },
  ];

  const categories = [
    'All Articles',
    'Tax Planning',
    'Fundraising',
    'Compliance',
    'Platform How-Tos',
    'Industry Insights',
  ];

  const popularTopics = [
    'R&D Tax Credits',
    'Series A Fundraising',
    'Real-Time Accounting',
    'ASC 606',
    'FCA Compliance',
    'Cash Flow Management',
    'AI Automation',
    'Fractional CFO',
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
            Insights for modern finance leaders
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-stone-600)] max-w-3xl mx-auto">
            Expert guidance on accounting, tax, technology, and growth strategy.
          </p>
        </Container>
      </Section>

      {/* Featured Article */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-glacier-teal)] via-[var(--color-nyon-blue)] to-[var(--color-nyon-dark)] text-white p-8 md:p-12">
            <div className="relative z-10">
              <Badge variant="info" className="mb-4 bg-white/20 border-white/30 text-white">
                Featured Article
              </Badge>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    The 3-Day Close: How Real-Time Accounting Changes Decision Making
                  </h2>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Traditional month-end close processes create a 2-4 week lag between business reality
                    and financial visibility. Here's why real-time accounting is becoming table stakes for
                    growth-stage companies.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                        LF
                      </div>
                      <div>
                        <div className="font-medium text-white">Laura Foster</div>
                        <div className="text-xs">Founder & CEO</div>
                      </div>
                    </div>
                    <div className="h-4 w-px bg-white/30" />
                    <div>8 min read</div>
                    <div className="h-4 w-px bg-white/30" />
                    <div>15 Jan 2026</div>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Button variant="secondary" size="lg">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-horizon-gold)]/10 rounded-full blur-3xl" />
          </div>
        </Container>
      </Section>

      {/* Category Navigation */}
      <Section background="frost" className="py-8">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2.5 rounded-full border-2 border-[var(--color-stone-300)] bg-white hover:border-[var(--color-glacier-teal)] hover:bg-[var(--color-alpine-frost)] transition-all font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Article Grid */}
      <Section>
        <Container>
          <SectionTitle centered>All Articles</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.title}
                hover
                className="group flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="info"
                      className="text-xs"
                      style={{
                        backgroundColor: `var(--color-${article.categoryColor})`,
                        color: 'white',
                        border: 'none',
                      }}
                    >
                      {article.category}
                    </Badge>
                    <div
                      className="text-xs text-[var(--color-stone-500)]"
                      style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      {article.readTime}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-[var(--color-glacier-teal)] transition-colors"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {article.title}
                  </h3>

                  <p className="text-sm text-[var(--color-stone-600)] mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-stone-200)]">
                  <div className="flex items-center justify-between text-xs text-[var(--color-stone-500)]">
                    <div>{article.date}</div>
                    <div className="text-[var(--color-glacier-teal)] font-medium group-hover:underline">
                      Read more →
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section background="gradient" className="relative overflow-hidden">
        <TopographicBackground opacity={0.08} />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Weekly insights delivered
            </h2>
            <p className="text-lg text-[var(--color-stone-600)] mb-8">
              Join 4,200+ finance leaders. Unsubscribe anytime.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1"
                required
              />
              <Button type="submit" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </form>

            <div className="mt-6 text-sm text-[var(--color-stone-500)]">
              No spam. Just valuable insights on accounting, tax, and growth strategy.
            </div>
          </div>
        </Container>
      </Section>

      {/* Popular Topics */}
      <Section>
        <Container>
          <SectionTitle centered>Popular Topics</SectionTitle>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {popularTopics.map((topic) => (
              <button
                key={topic}
                className="px-5 py-2.5 rounded-lg bg-[var(--color-alpine-frost)] hover:bg-[var(--color-glacier-teal)] hover:text-white transition-all font-medium text-sm border border-[var(--color-stone-200)] hover:border-[var(--color-glacier-teal)]"
              >
                {topic}
              </button>
            ))}
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
            Need personalized guidance?
          </h2>
          <p className="text-xl text-[var(--color-stone-300)] mb-10 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate your specific challenges.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Schedule Consultation
          </Button>
        </Container>
      </Section>
    </>
  );
}

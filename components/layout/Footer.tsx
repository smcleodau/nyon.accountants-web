import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Accounting & Advisory', href: '/services#accounting' },
    { name: 'Tax Services', href: '/services#tax' },
    { name: 'Audit & Assurance', href: '/services#audit' },
    { name: 'Fractional CFO', href: '/services#cfo' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
  ];

  const offices = [
    { city: 'London', address: '85 team members' },
    { city: 'Manchester', address: '45 team members' },
    { city: 'Edinburgh', address: '35 team members' },
  ];

  return (
    <footer className="bg-[var(--color-nyon-dark)] text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold mb-4 block hover:text-[var(--color-glacier-teal)] transition-colors"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              nyon.accountants
            </Link>
            <p className="text-[var(--color-stone-300)] mb-4">
              Elevated accounting for modern business
            </p>
            <a
              href="mailto:hello@nyon.accountants"
              className="text-[var(--color-glacier-teal)] hover:text-[var(--color-horizon-gold)] transition-colors"
            >
              hello@nyon.accountants
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-stone-300)] hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-stone-300)] hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Offices
            </h3>
            <ul className="space-y-3">
              {offices.map((office) => (
                <li key={office.city}>
                  <div className="text-white font-medium">{office.city}</div>
                  <div className="text-[var(--color-stone-300)] text-sm">{office.address}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-stone-700)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--color-stone-400)] text-sm">
              © {currentYear} nyon.accountants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-[var(--color-stone-400)] hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--color-stone-400)] hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-[var(--color-stone-400)] hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

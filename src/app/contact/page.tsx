import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FWD Lab. Tell us about your project and we'll respond within one business day.",
};

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: "📞",
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: "📍",
    label: "Location",
    value: siteConfig.contact.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-white pt-28 pb-16 md:pt-36 md:pb-20 border-b border-neutral-100">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Contact
            </p>
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              Let&apos;s talk about your project.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              Fill in the form below and we&apos;ll get back to you within one business day.
              No sales pitch — just a straightforward conversation about what you need.
            </p>
          </div>
        </Container>
      </div>

      <Section background="light">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white border border-neutral-100 shadow-soft p-8 md:p-10">
                <h2 className="mb-6 text-xl font-bold text-neutral-900">
                  Send us a message
                </h2>

                {/* Form — UI only, no backend yet */}
                <form className="space-y-5" noValidate>
                  {/* Row 1: Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company */}
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Company / Organisation
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  {/* Row 3: Service needed */}
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Something else / Not sure yet</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, or questions…"
                      className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full justify-center">
                    Send Message
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>

                  <p className="text-center text-xs text-neutral-400">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar: contact details */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl bg-white border border-neutral-100 shadow-soft p-6">
                <h3 className="mb-5 text-sm font-semibold text-neutral-900">
                  Contact Details
                </h3>
                <ul className="space-y-4">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-3">
                      <span className="mt-0.5 text-lg flex-shrink-0">{detail.icon}</span>
                      <div>
                        <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm font-medium text-neutral-800 hover:text-brand-600 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-neutral-800">{detail.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6">
                <h3 className="mb-2 text-sm font-semibold text-neutral-900">
                  Response time
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  We aim to respond to all enquiries within <strong className="text-neutral-700">one business day</strong>.
                  For urgent matters, feel free to call us directly.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-neutral-100 shadow-soft p-6">
                <h3 className="mb-2 text-sm font-semibold text-neutral-900">
                  What happens next?
                </h3>
                <ol className="mt-3 space-y-3">
                  {[
                    "We review your message and respond within 24 hours.",
                    "We schedule a short discovery call to understand your needs.",
                    "We prepare a clear proposal with scope, timeline, and pricing.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-500">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

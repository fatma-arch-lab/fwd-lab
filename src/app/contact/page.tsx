import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FWD Lab. Tell us about your project and we'll respond within one business day.",
};

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-300 transition-all duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

const contactDetails = [
  { icon: "✉️", label: "Email",    value: siteConfig.contact.email,   href: `mailto:${siteConfig.contact.email}` },
  { icon: "📞", label: "Phone",    value: siteConfig.contact.phone,   href: `tel:${siteConfig.contact.phone}` },
  { icon: "📍", label: "Location", value: siteConfig.contact.address, href: undefined },
];

const nextSteps = [
  "We review your message and respond within 24 hours.",
  "We schedule a short discovery call to understand your needs.",
  "We prepare a clear proposal with scope, timeline, and pricing.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Fill in the form and we'll get back to you within one business day. No sales pitch — just a straightforward conversation."
      />

      <Section background="light">
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">

            {/* ── Form ────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-soft md:p-10">
                <h2 className="mb-7 text-xl font-bold text-ink-950">Send us a message</h2>

                {/* UI-only — wire to backend (Resend, Formspree, etc.) when ready */}
                <form className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
                        Full Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input id="name" name="name" type="text" required autoComplete="name"
                        placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
                        Email Address <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email"
                        placeholder="you@company.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-700">
                      Company / Organisation
                    </label>
                    <input id="company" name="company" type="text" autoComplete="organization"
                      placeholder="Your company name" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-700">
                      Service Needed
                    </label>
                    <select id="service" name="service" className={`${inputClass} cursor-pointer appearance-none`}>
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="other">Something else / Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Tell us about your project, goals, or questions…"
                      className={`${inputClass} resize-none`} />
                  </div>

                  <Button type="submit" size="lg" className="w-full justify-center">
                    Send Message
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>

                  <p className="text-center text-xs text-ink-400">
                    We respect your privacy. Your information is never shared.
                  </p>
                </form>
              </div>
            </div>

            {/* ── Sidebar ─────────────────────────── */}
            <aside className="space-y-5 lg:col-span-1">
              {/* Contact details */}
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <h3 className="mb-5 text-sm font-semibold text-ink-900">Contact Details</h3>
                <ul className="space-y-4">
                  {contactDetails.map((d) => (
                    <li key={d.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-lg" aria-hidden="true">{d.icon}</span>
                      <div>
                        <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-ink-400">{d.label}</p>
                        {d.href ? (
                          <a href={d.href} className="text-sm font-medium text-ink-800 hover:text-brand-600 transition-colors">
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-ink-800">{d.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <h3 className="mb-2 text-sm font-semibold text-ink-900">Response time</h3>
                <p className="text-sm leading-relaxed text-ink-600">
                  We aim to respond within{" "}
                  <strong className="text-ink-900">one business day</strong>.
                  For urgent matters, call us directly.
                </p>
              </div>

              {/* What happens next */}
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <h3 className="mb-4 text-sm font-semibold text-ink-900">What happens next?</h3>
                <ol className="space-y-3.5">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-ink-500">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700" aria-hidden="true">
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

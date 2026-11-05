import Container from "@/components/Container";
import { pageMeta } from "@/lib/seo";
import { contactInfo } from "@/data/content";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Viraj Pate collects, uses and protects your personal information.",
  path: "/privacy",
});

const UPDATED = "5 November 2026";

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {UPDATED}</p>

      <div className="mt-8 space-y-8 text-[16px] leading-relaxed text-ink/90">
        <section>
          <h2 className="text-xl font-bold">Who I am</h2>
          <p className="mt-2">
            This website is run by Viraj Pate, a freelance web developer
            ([your city, state, India]). You can contact me at{" "}
            <a className="text-primary underline" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">What I collect</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>
              <strong>Business Growth Analyzer:</strong> your answers about your
              business, website and customers. They are stored in your browser while
              you complete the analyzer. If you submit your email or contact me,
              they are saved with your lead.
            </li>
            <li>
              <strong>Contact and report forms:</strong> your name, email, phone
              (optional), service interest, budget (optional) and message.
            </li>
            <li>
              <strong>Analytics:</strong> anonymous page views and events, such as
              starting or completing the analyzer.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold">How I use it</h2>
          <p className="mt-2">
            To send you your report, reply to your message, understand how
            the site is used and improve it. I do not sell your data and I do not
            send marketing emails you did not ask for.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Services that process data for me</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li><strong>Vercel</strong>: website hosting and cookie-free analytics.</li>
            <li><strong>Supabase</strong>: secure storage of leads.</li>
            <li><strong>Resend</strong>: sending emails.</li>
            <li><strong>Google Analytics</strong>: usage statistics. It sets cookies only if you accept them in the banner.</li>
            <li><strong>Cal.com</strong>: call booking, if you choose to book.</li>
          </ul>
          <p className="mt-2">
            Some of these providers store data outside India, for example in the
            United States.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">How long I keep it</h2>
          <p className="mt-2">
            Lead details are kept for up to 24 months so I can follow up on your
            enquiry, or until you ask me to delete them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Your rights</h2>
          <p className="mt-2">
            You can ask to see, correct or delete the personal information I hold
            about you at any time by emailing me. I will respond within a
            reasonable time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Cookies</h2>
          <p className="mt-2">
            The site works without cookies. Google Analytics cookies are used only
            after you click Accept. You can change your mind by clearing this
            site&apos;s data in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Changes</h2>
          <p className="mt-2">
            If I change this policy, I will update the date above.
          </p>
        </section>
      </div>
    </Container>
  );
}
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DentaScale collects, uses, and protects information submitted through this website.",
};

const LAST_UPDATED = "July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <Section bg="secondary">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[14px] leading-relaxed text-text-secondary">
              This Privacy Policy explains how DentaScale (&ldquo;DentaScale,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses,
              and protects information when you visit {siteConfig.name.toLowerCase()}
              &apos;s website or submit information through it. By using this site,
              you agree to the practices described below.
            </p>
          </div>

          <PolicySection title="Information we collect">
            <p>
              When you submit our contact or strategy-call form, we collect the
              information you provide, which may include your name, business
              name, practice type, phone number, email address, and location.
            </p>
            <p>
              We also automatically collect limited technical information when
              you browse this site — such as pages visited, referring source,
              device/browser type, and general location — through the analytics
              and advertising tools described below.
            </p>
          </PolicySection>

          <PolicySection title="How we use your information">
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to your inquiry and follow up about our services.</li>
              <li>To evaluate whether our services are a good fit for your practice.</li>
              <li>To improve our website, marketing, and advertising performance.</li>
              <li>To measure the effectiveness of our ad campaigns.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </PolicySection>

          <PolicySection title="Form submissions">
            <p>
              Our contact forms are processed by{" "}
              <span className="text-text-secondary">Formspree</span>, a
              third-party form-handling service. Submissions are delivered to
              our email inbox. Please review{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light underline underline-offset-2 hover:text-white"
              >
                Formspree&apos;s privacy policy
              </a>{" "}
              for details on how they handle submitted data.
            </p>
          </PolicySection>

          <PolicySection title="Cookies & advertising technologies">
            <p>
              This site uses tracking technologies — including the{" "}
              <span className="text-text-secondary">Meta (Facebook) Pixel</span>{" "}
              and <span className="text-text-secondary">Google Analytics /
              Google Ads</span> — to measure ad performance and understand how
              visitors use our site. These tools may use cookies or similar
              technologies and may share information with Meta and Google in
              accordance with their own privacy policies.
            </p>
            <p>
              You can control cookies through your browser settings, and you
              can review or adjust your ad preferences directly with{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light underline underline-offset-2 hover:text-white"
              >
                Meta
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light underline underline-offset-2 hover:text-white"
              >
                Google
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="Data retention">
            <p>
              We retain information submitted through our forms only as long as
              needed to respond to your inquiry and maintain a record of our
              business communications, unless you ask us to delete it sooner.
            </p>
          </PolicySection>

          <PolicySection title="Your choices">
            <p>
              You can ask us to access, correct, or delete any personal
              information you&apos;ve submitted by emailing us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-light underline underline-offset-2 hover:text-white"
              >
                {siteConfig.email}
              </a>
              . We&apos;ll respond within a reasonable time.
            </p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &ldquo;Last updated&rdquo;
              date.
            </p>
          </PolicySection>

          <PolicySection title="Contact us">
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-light underline underline-offset-2 hover:text-white"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </PolicySection>
        </Reveal>
      </Section>
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-border-subtle pt-8">
      <h2 className="text-lg font-medium text-white">{title}</h2>
      <div className="flex flex-col gap-3 text-[14px] leading-relaxed text-text-muted">
        {children}
      </div>
    </div>
  );
}

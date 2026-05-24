import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Manvith Kumar — send a message, connect on social media, or schedule a meeting.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader pageKey="contact" />
      <ContactSection />
    </>
  );
}

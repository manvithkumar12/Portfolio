import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CertificationGallery } from "@/components/certifications/CertificationGallery";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Manvith Kumar's professional certifications — programming, web development, AI, cloud, and database credentials.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader pageKey="certifications" />
      <CertificationGallery />
    </>
  );
}

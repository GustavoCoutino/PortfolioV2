import { ContactSection } from "@/components/contact/ContactSection";
import { SocialsSection } from "@/components/contact/SocialsSection";

export default function Page() {
  return (
    <section className="flex flex-col">
      <ContactSection />
      <SocialsSection />
    </section>
  );
}

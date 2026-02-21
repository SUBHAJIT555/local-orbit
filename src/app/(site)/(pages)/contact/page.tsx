import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Page | Local Orbit",
  description: "This is Contact Page for Local Orbit",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;

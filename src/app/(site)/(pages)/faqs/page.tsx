import FAQs from "@/components/FAQs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs | Local Orbit",
  description: "Frequently asked questions about shopping at Local Orbit.",
};

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;

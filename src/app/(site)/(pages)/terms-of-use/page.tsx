import TermsOfUse from "@/components/TermsOfUse";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use | Local Orbit",
  description: "This is Terms of Use Page for Local Orbit",
  // other metadata
};

const TermsOfUsePage = () => {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
};

export default TermsOfUsePage;

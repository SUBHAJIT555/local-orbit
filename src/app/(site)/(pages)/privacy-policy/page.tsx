import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Local Orbit",
  description: "This is Privacy Policy Page for Local Orbit",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;

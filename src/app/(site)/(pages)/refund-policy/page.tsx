import RefundPolicy from "@/components/RefundPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Refund Policy | Local Orbit",
  description: "This is Refund Policy Page for Local Orbit",
  // other metadata
};

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;

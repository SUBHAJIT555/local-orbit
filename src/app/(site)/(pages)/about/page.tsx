import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Local Orbit",
  description: "This is About Us Page for Local Orbit",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main >
  );
};

export default AboutPage;

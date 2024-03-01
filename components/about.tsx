"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        From a young age, I've been captivated by the world of technology. My journey began with
        endless hours on a Sony console and exploring the capabilities of an iPhone through jailbreaking.
        This passion led me to specialize in computer studies during high school, where I delved
        into Java programming. My military service in the ICT Corps further honed my skills, where I
        established mobile cellular sites using satellite communication and maintained critical
        communication systems on military ships. Following my service, I was determined to pursue
        technology professionally, leading me to enroll in a computer science degree program. Now, in
        the final year of my studies, I am eager for the next challenge in the tech industry. My
        experiences have equipped me with a unique blend of practical and theoretical knowledge, making
        me ready to contribute to innovative projects and solutions.
      </p>
    </motion.section>
  );
}
